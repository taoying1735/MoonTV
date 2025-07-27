# 腾讯云部署指南

## 概述
本指南详细介绍如何在腾讯云的各种服务上部署 MoonTV 项目。

## 部署方式选择

### 1. 腾讯云 Webify（最推荐）
**适用场景**: 静态网站托管，自动化部署
**优势**: 简单易用，自动CI/CD，免费额度充足

#### 部署步骤
1. **登录腾讯云控制台**
   - 访问 [腾讯云 Webify](https://console.cloud.tencent.com/webify)
   - 创建新的静态网站项目

2. **连接代码仓库**
   ```
   仓库类型: GitHub/GitLab/Gitee
   分支: main 或 master
   ```

3. **配置构建设置**
   ```
   框架预设: Next.js
   根目录: /
   构建命令: pnpm install && pnpm build
   输出目录: .next
   Node.js版本: 20.x
   ```

4. **环境变量配置**
   ```bash
   # 根据项目需要添加环境变量
   NEXT_PUBLIC_SITE_NAME=MoonTV
   # 其他必要的环境变量...
   ```

5. **部署**
   - 点击"立即部署"
   - 等待构建完成
   - 获取访问域名

### 2. 腾讯云 CloudBase（云开发）
**适用场景**: 全栈应用，需要数据库和云函数
**优势**: 一站式解决方案，支持服务端渲染

#### 部署步骤
1. **创建云开发环境**
   ```bash
   # 安装 CloudBase CLI
   npm install -g @cloudbase/cli
   
   # 登录
   tcb login
   
   # 初始化项目
   tcb init
   ```

2. **配置 cloudbaserc.json**
   ```json
   {
     "envId": "your-env-id",
     "framework": {
       "name": "nextjs",
       "plugins": {
         "node": {
           "use": "@cloudbase/framework-plugin-node",
           "inputs": {
             "entry": "start.js",
             "name": "moontv",
             "path": "/",
             "buildCommand": "pnpm install && pnpm build"
           }
         }
       }
     }
   }
   ```

3. **部署命令**
   ```bash
   # 部署到云开发
   tcb framework deploy
   ```

### 3. 腾讯云 CVM（云服务器）
**适用场景**: 需要完全控制服务器环境
**优势**: 灵活性高，可自定义配置

#### 服务器配置要求
```
CPU: 2核心以上
内存: 4GB以上
存储: 40GB以上
操作系统: Ubuntu 20.04 LTS 或 CentOS 8
```

#### 详细部署步骤

1. **连接服务器**
   ```bash
   ssh root@your-server-ip
   ```

2. **更新系统**
   ```bash
   # Ubuntu
   sudo apt update && sudo apt upgrade -y
   
   # CentOS
   sudo yum update -y
   ```

3. **安装 Node.js 20.x**
   ```bash
   # Ubuntu
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # CentOS
   curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
   sudo yum install -y nodejs
   ```

4. **安装 pnpm**
   ```bash
   npm install -g pnpm
   ```

5. **安装 Git**
   ```bash
   # Ubuntu
   sudo apt install git -y
   
   # CentOS
   sudo yum install git -y
   ```

6. **克隆项目**
   ```bash
   cd /var/www
   git clone https://github.com/your-username/MoonTV.git
   cd MoonTV
   ```

7. **安装依赖并构建**
   ```bash
   pnpm install
   pnpm build
   ```

8. **安装 PM2 进程管理器**
   ```bash
   npm install -g pm2
   ```

9. **创建 PM2 配置文件**
   ```bash
   # 创建 ecosystem.config.js
   cat > ecosystem.config.js << 'EOF'
   module.exports = {
     apps: [{
       name: 'moontv',
       script: 'npm',
       args: 'start',
       cwd: '/var/www/MoonTV',
       instances: 'max',
       exec_mode: 'cluster',
       env: {
         NODE_ENV: 'production',
         PORT: 3000
       },
       error_file: './logs/err.log',
       out_file: './logs/out.log',
       log_file: './logs/combined.log',
       time: true
     }]
   }
   EOF
   ```

10. **启动应用**
    ```bash
    # 创建日志目录
    mkdir logs
    
    # 启动应用
    pm2 start ecosystem.config.js
    
    # 设置开机自启
    pm2 startup
    pm2 save
    ```

11. **配置 Nginx 反向代理**
    ```bash
    # 安装 Nginx
    sudo apt install nginx -y  # Ubuntu
    # sudo yum install nginx -y  # CentOS
    
    # 创建 Nginx 配置
    sudo cat > /etc/nginx/sites-available/moontv << 'EOF'
    server {
        listen 80;
        server_name your-domain.com;
        
        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_cache_bypass $http_upgrade;
        }
    }
    EOF
    
    # 启用站点
    sudo ln -s /etc/nginx/sites-available/moontv /etc/nginx/sites-enabled/
    
    # 测试配置
    sudo nginx -t
    
    # 重启 Nginx
    sudo systemctl restart nginx
    sudo systemctl enable nginx
    ```

12. **配置防火墙**
    ```bash
    # Ubuntu (UFW)
    sudo ufw allow 22
    sudo ufw allow 80
    sudo ufw allow 443
    sudo ufw enable
    
    # CentOS (firewalld)
    sudo firewall-cmd --permanent --add-service=ssh
    sudo firewall-cmd --permanent --add-service=http
    sudo firewall-cmd --permanent --add-service=https
    sudo firewall-cmd --reload
    ```

### 4. 腾讯云容器服务（TKE）
**适用场景**: 微服务架构，需要容器化部署
**优势**: 高可用，自动扩缩容

#### 部署步骤

1. **构建 Docker 镜像**
   ```bash
   # 确保项目根目录有 Dockerfile
   docker build -t moontv:latest .
   ```

2. **推送到腾讯云容器镜像服务**
   ```bash
   # 登录腾讯云容器镜像服务
   docker login ccr.ccs.tencentyun.com
   
   # 标记镜像
   docker tag moontv:latest ccr.ccs.tencentyun.com/your-namespace/moontv:latest
   
   # 推送镜像
   docker push ccr.ccs.tencentyun.com/your-namespace/moontv:latest
   ```

3. **创建 Kubernetes 部署文件**
   ```yaml
   # k8s-deployment.yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: moontv-deployment
   spec:
     replicas: 3
     selector:
       matchLabels:
         app: moontv
     template:
       metadata:
         labels:
           app: moontv
       spec:
         containers:
         - name: moontv
           image: ccr.ccs.tencentyun.com/your-namespace/moontv:latest
           ports:
           - containerPort: 3000
           env:
           - name: NODE_ENV
             value: "production"
   ---
   apiVersion: v1
   kind: Service
   metadata:
     name: moontv-service
   spec:
     selector:
       app: moontv
     ports:
     - protocol: TCP
       port: 80
       targetPort: 3000
     type: LoadBalancer
   ```

4. **部署到 TKE**
   ```bash
   kubectl apply -f k8s-deployment.yaml
   ```

## 环境变量配置

根据部署方式，配置以下环境变量：

```bash
# 基础配置
NODE_ENV=production
PORT=3000

# 站点配置
NEXT_PUBLIC_SITE_NAME=MoonTV

# 数据库配置（如果使用）
DATABASE_URL=your-database-url

# Redis 配置（如果使用）
REDIS_URL=your-redis-url

# 其他 API 密钥
# API_KEY=your-api-key
```

## 域名和 SSL 配置

### 腾讯云 DNS 解析
1. 在腾讯云 DNS 解析控制台添加域名
2. 配置 A 记录指向服务器 IP
3. 配置 CNAME 记录（如果需要）

### SSL 证书配置
```bash
# 使用 Let's Encrypt 免费证书
sudo apt install certbot python3-certbot-nginx -y

# 申请证书
sudo certbot --nginx -d your-domain.com

# 自动续期
sudo crontab -e
# 添加以下行
0 12 * * * /usr/bin/certbot renew --quiet
```

## 监控和日志

### PM2 监控
```bash
# 查看应用状态
pm2 status

# 查看日志
pm2 logs moontv

# 监控面板
pm2 monit
```

### Nginx 日志
```bash
# 访问日志
sudo tail -f /var/log/nginx/access.log

# 错误日志
sudo tail -f /var/log/nginx/error.log
```

## 故障排除

### 常见问题

1. **端口被占用**
   ```bash
   sudo netstat -tulpn | grep :3000
   sudo kill -9 <PID>
   ```

2. **权限问题**
   ```bash
   sudo chown -R $USER:$USER /var/www/MoonTV
   ```

3. **内存不足**
   ```bash
   # 创建交换文件
   sudo fallocate -l 2G /swapfile
   sudo chmod 600 /swapfile
   sudo mkswap /swapfile
   sudo swapon /swapfile
   ```

4. **Node.js 版本问题**
   ```bash
   # 使用 nvm 管理 Node.js 版本
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   source ~/.bashrc
   nvm install 20
   nvm use 20
   ```

## 性能优化

### 服务器优化
```bash
# 调整文件描述符限制
echo "* soft nofile 65536" >> /etc/security/limits.conf
echo "* hard nofile 65536" >> /etc/security/limits.conf

# 优化内核参数
echo "net.core.somaxconn = 65536" >> /etc/sysctl.conf
sysctl -p
```

### Nginx 优化
```nginx
# 在 nginx.conf 中添加
worker_processes auto;
worker_connections 1024;

gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

## 备份策略

### 代码备份
```bash
# 定期备份代码
#!/bin/bash
cd /var/www/MoonTV
git pull origin main
pnpm install
pnpm build
pm2 restart moontv
```

### 数据备份
```bash
# 如果使用数据库，定期备份数据
# 具体命令根据数据库类型而定
```

## 总结

选择合适的部署方式：
- **新手推荐**: 腾讯云 Webify
- **需要数据库**: 腾讯云 CloudBase
- **需要完全控制**: 腾讯云 CVM
- **企业级应用**: 腾讯云 TKE

每种方式都有其适用场景，请根据实际需求选择。