# MoonTV 部署说明

## 部署平台配置（重要）

### 腾讯云部署配置

#### 腾讯云 Webify（推荐）
```
框架名称: Next.js
根目录: /
输出目录: （留空，使用默认）
编译命令: pnpm build
安装命令: pnpm install
Node.js版本: 20.x
环境变量: 详见下方环境变量配置章节
```

#### 腾讯云 CloudBase（云开发）
```
框架名称: Next.js
根目录: /
构建目录: .next
编译命令: pnpm build
安装命令: pnpm install
Node.js版本: 20.x
运行时: Node.js 20
```

#### 腾讯云 CVM（云服务器）手动部署
```bash
# 1. 安装 Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. 安装 pnpm
npm install -g pnpm

# 3. 克隆项目
git clone <your-repo-url>
cd MoonTV

# 4. 安装依赖并构建
pnpm install
pnpm build

# 5. 使用 PM2 管理进程
npm install -g pm2
pm2 start npm --name "moontv" -- start
pm2 startup
pm2 save
```

#### 腾讯云容器服务（TKE）
使用项目根目录的 `Dockerfile` 进行容器化部署：
```bash
# 构建镜像
docker build -t moontv:latest .

# 推送到腾讯云容器镜像服务
docker tag moontv:latest ccr.ccs.tencentyun.com/your-namespace/moontv:latest
docker push ccr.ccs.tencentyun.com/your-namespace/moontv:latest
```

### Vercel 部署配置
```
框架名称: Next.js
根目录: /
输出目录: （留空，使用默认）
编译命令: pnpm build
安装命令: pnpm install
Node.js版本: 20.x
```

### Cloudflare Pages 部署配置
```
框架名称: Next.js
根目录: /
输出目录: （留空，使用默认）
编译命令: pnpm pages:build
安装命令: pnpm install
Node.js版本: 20.10.0
```

### Netlify 部署配置
```
框架名称: Next.js
根目录: /
发布目录: .next
编译命令: pnpm build
安装命令: pnpm install
Node.js版本: 20.x
```

### 其他平台（使用npm）
如果平台不支持pnpm，使用以下配置：
```
框架名称: Next.js
根目录: /
输出目录: .next
编译命令: npm run build:npm
安装命令: npm install
Node.js版本: 20.x
```

## npm 依赖冲突解决方案

### 问题描述
项目遇到 React 类型定义版本冲突：
- `@types/react@^18.3.18` 与 `@types/react-dom@^19.1.6` 不兼容
- `@types/react-dom@^19.1.6` 需要 `@types/react@^19.0.0`

### 解决方案

#### 1. 依赖版本更新
已将以下依赖更新到兼容版本：
- `@types/react`: `^18.3.18` → `^19.0.0`
- `react`: `^18.2.0` → `^18.3.1`
- `react-dom`: `^18.2.0` → `^18.3.1`

#### 2. npm 配置优化
更新 `.npmrc` 文件，添加：
```
legacy-peer-deps=true
package-lock=false
```

#### 3. 构建脚本优化
创建专门的 npm 构建脚本 `scripts/npm-build.js`，包含：
- 缓存清理
- 依赖重新安装（使用 --legacy-peer-deps）
- 运行时配置生成
- 构建执行

### 部署命令

#### 对于支持 pnpm 的平台：
```bash
pnpm install
pnpm run build
```

#### 对于仅支持 npm 的平台：
```bash
npm run build:npm
```

#### 手动构建（如果自动脚本失败）：
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
node scripts/convert-config.js
node scripts/generate-manifest.js
npm run build:next
```

### 环境要求
- Node.js: v20.10.0 (见 .nvmrc)
- npm: 10.9.0+ 或 pnpm: 10.12.4+

## 🔧 环境变量配置

### 必需环境变量

所有部署方式都需要配置以下基础环境变量：

| 环境变量 | 描述 | 示例 |
|---------|------|------|
| `USERNAME` | 管理员用户名 | `admin` |
| `PASSWORD` | 管理员密码 | `your-secure-password` |

### 存储配置

根据选择的存储类型配置相应环境变量：

#### 1. 本地存储（默认）
```bash
NEXT_PUBLIC_STORAGE_TYPE=localstorage
```
适合：开发环境、小型部署

#### 2. Redis 存储
```bash
NEXT_PUBLIC_STORAGE_TYPE=redis
REDIS_URL=redis://localhost:6379
# 或带认证: redis://username:password@host:port
```
适合：生产环境、需要数据持久化

#### 3. Upstash Redis 存储（推荐 Serverless）
```bash
NEXT_PUBLIC_STORAGE_TYPE=upstash
UPSTASH_URL=https://your-redis.upstash.io
UPSTASH_TOKEN=your-token
```
适合：Vercel、Netlify 等 Serverless 平台

#### 4. Cloudflare D1 存储
```bash
NEXT_PUBLIC_STORAGE_TYPE=d1
```
适合：Cloudflare Pages 部署

### 可选配置

| 环境变量 | 描述 | 默认值 | 示例 |
|---------|------|--------|------|
| `SITE_NAME` | 网站名称 | `MoonTV` | `我的影视站` |
| `ANNOUNCEMENT` | 网站公告 | 默认免责声明 | `欢迎使用本站服务` |
| `NEXT_PUBLIC_SEARCH_MAX_PAGE` | 搜索最大页数 | `5` | `10` |
| `NEXT_PUBLIC_IMAGE_PROXY` | 图片代理地址 | 空 | `https://images.weserv.nl/?url=` |
| `NEXT_PUBLIC_ENABLE_REGISTER` | 允许用户注册 | `false` | `true` |

### 平台特定配置示例

#### Vercel 环境变量
```bash
USERNAME=admin
PASSWORD=your-secure-password
NEXT_PUBLIC_STORAGE_TYPE=upstash
UPSTASH_URL=https://your-redis.upstash.io
UPSTASH_TOKEN=your-token
SITE_NAME=MoonTV
```

#### Cloudflare Pages 环境变量
```bash
USERNAME=admin
PASSWORD=your-secure-password
NEXT_PUBLIC_STORAGE_TYPE=d1
SITE_NAME=MoonTV
CF_PAGES=true
```

#### 腾讯云环境变量
```bash
USERNAME=admin
PASSWORD=your-secure-password
NEXT_PUBLIC_STORAGE_TYPE=redis
REDIS_URL=redis://username:password@redis.tencentcloudapi.com:6379
SITE_NAME=MoonTV
NODE_ENV=production
```

### 安全建议

1. **使用强密码**
   ```bash
   # 生成随机密码
   PASSWORD=$(openssl rand -base64 32)
   ```

2. **生产环境禁用注册**
   ```bash
   NEXT_PUBLIC_ENABLE_REGISTER=false
   ```

3. **使用 HTTPS Redis 连接**
   ```bash
   REDIS_URL=rediss://your-redis-host:6380
   ```

### 详细配置指南

更多详细的环境变量配置说明，请参考：[环境变量配置指南](./ENVIRONMENT_VARIABLES.md)

### 注意事项
1. 优先使用 pnpm 进行本地开发
2. 部署时如遇到依赖冲突，使用 `npm run build:npm` 命令
3. 确保部署平台使用正确的 Node.js 版本
4. 如果仍有问题，可以在部署配置中设置环境变量：
   ```
   NPM_CONFIG_LEGACY_PEER_DEPS=true
   ```