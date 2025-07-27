# MoonTV 环境变量配置指南

## 概述

MoonTV 支持多种部署方式和存储后端，通过环境变量进行灵活配置。本指南详细说明了所有可用的环境变量及其配置方法。

## 🔧 基础配置

### 必需环境变量

| 环境变量 | 描述 | 默认值 | 示例 |
|---------|------|--------|------|
| `USERNAME` | 管理员用户名 | 无 | `admin` |
| `PASSWORD` | 管理员密码 | 无 | `your-secure-password` |

### 站点配置

| 环境变量 | 描述 | 默认值 | 示例 |
|---------|------|--------|------|
| `SITE_NAME` | 网站名称 | `MoonTV` | `我的影视站` |
| `ANNOUNCEMENT` | 网站公告 | 默认免责声明 | `欢迎使用本站服务` |
| `NEXT_PUBLIC_SEARCH_MAX_PAGE` | 搜索最大页数 | `5` | `10` |
| `NEXT_PUBLIC_IMAGE_PROXY` | 图片代理地址 | 空 | `https://images.weserv.nl/?url=` |
| `NEXT_PUBLIC_ENABLE_REGISTER` | 是否允许用户注册 | `false` | `true` |

## 🗄️ 存储配置

### 存储类型选择

通过 `NEXT_PUBLIC_STORAGE_TYPE` 环境变量选择存储后端：

```bash
# 本地存储（默认，适合开发环境）
NEXT_PUBLIC_STORAGE_TYPE=localstorage

# Redis 存储（适合生产环境）
NEXT_PUBLIC_STORAGE_TYPE=redis

# Upstash Redis 存储（适合 Serverless 部署）
NEXT_PUBLIC_STORAGE_TYPE=upstash

# Cloudflare D1 存储（适合 Cloudflare Pages）
NEXT_PUBLIC_STORAGE_TYPE=d1
```

### Redis 配置

当 `NEXT_PUBLIC_STORAGE_TYPE=redis` 时需要配置：

| 环境变量 | 描述 | 必需 | 示例 |
|---------|------|------|------|
| `REDIS_URL` | Redis 连接 URL | ✅ | `redis://localhost:6379` |
| | | | `redis://username:password@host:port` |
| | | | `rediss://host:port` (SSL) |

**Redis URL 格式说明：**
```bash
# 本地 Redis
REDIS_URL=redis://localhost:6379

# 带认证的 Redis
REDIS_URL=redis://username:password@redis.example.com:6379

# SSL 连接
REDIS_URL=rediss://redis.example.com:6380

# 云服务商 Redis
REDIS_URL=redis://user:pass@redis-12345.c1.us-east-1-1.ec2.cloud.redislabs.com:12345
```

### Upstash Redis 配置

当 `NEXT_PUBLIC_STORAGE_TYPE=upstash` 时需要配置：

| 环境变量 | 描述 | 必需 | 获取方式 |
|---------|------|------|----------|
| `UPSTASH_URL` | Upstash Redis REST URL | ✅ | Upstash 控制台 |
| `UPSTASH_TOKEN` | Upstash Redis REST Token | ✅ | Upstash 控制台 |

**获取 Upstash 配置步骤：**
1. 访问 [Upstash Console](https://console.upstash.com/)
2. 创建新的 Redis 数据库
3. 在数据库详情页面复制 `UPSTASH_REDIS_REST_URL` 和 `UPSTASH_REDIS_REST_TOKEN`

### Cloudflare D1 配置

当 `NEXT_PUBLIC_STORAGE_TYPE=d1` 时，需要在 Cloudflare Pages 中绑定 D1 数据库。

## 🚀 部署平台配置

### Vercel 部署

在 Vercel 项目设置中添加环境变量：

```bash
# 基础配置
USERNAME=admin
PASSWORD=your-secure-password
NEXT_PUBLIC_STORAGE_TYPE=upstash

# Upstash Redis 配置
UPSTASH_URL=https://your-redis.upstash.io
UPSTASH_TOKEN=your-token

# 可选配置
SITE_NAME=MoonTV
NEXT_PUBLIC_ENABLE_REGISTER=true
```

### Cloudflare Pages 部署

在 Cloudflare Pages 环境变量中配置：

```bash
# 基础配置
USERNAME=admin
PASSWORD=your-secure-password
NEXT_PUBLIC_STORAGE_TYPE=d1

# 可选配置
SITE_NAME=MoonTV
CF_PAGES=true
```

### 腾讯云部署

#### Webify / CloudBase
```bash
# 基础配置
USERNAME=admin
PASSWORD=your-secure-password
NEXT_PUBLIC_STORAGE_TYPE=redis

# Redis 配置（使用腾讯云 Redis）
REDIS_URL=redis://username:password@redis.tencentcloudapi.com:6379

# 站点配置
SITE_NAME=MoonTV
NODE_ENV=production
```

#### CVM 服务器
创建 `.env.local` 文件：

```bash
# .env.local
USERNAME=admin
PASSWORD=your-secure-password
NEXT_PUBLIC_STORAGE_TYPE=redis
REDIS_URL=redis://localhost:6379
SITE_NAME=MoonTV
NODE_ENV=production
PORT=3000
```

### Netlify 部署

在 Netlify 环境变量中配置：

```bash
USERNAME=admin
PASSWORD=your-secure-password
NEXT_PUBLIC_STORAGE_TYPE=upstash
UPSTASH_URL=https://your-redis.upstash.io
UPSTASH_TOKEN=your-token
```

## 🐳 Docker 部署

### Docker Compose 配置

```yaml
# docker-compose.yml
version: '3.8'
services:
  moontv:
    image: moontv:latest
    ports:
      - "3000:3000"
    environment:
      - USERNAME=admin
      - PASSWORD=your-secure-password
      - NEXT_PUBLIC_STORAGE_TYPE=redis
      - REDIS_URL=redis://redis:6379
      - SITE_NAME=MoonTV
      - NODE_ENV=production
      - DOCKER_ENV=true
    depends_on:
      - redis
    volumes:
      - ./config.json:/app/config.json

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  redis_data:
```

### 环境变量文件

创建 `.env` 文件：

```bash
# .env
USERNAME=admin
PASSWORD=your-secure-password
NEXT_PUBLIC_STORAGE_TYPE=redis
REDIS_URL=redis://redis:6379
SITE_NAME=MoonTV
NODE_ENV=production
DOCKER_ENV=true
```

## 🔒 安全配置

### 生产环境建议

1. **使用强密码**
   ```bash
   PASSWORD=$(openssl rand -base64 32)
   ```

2. **启用 HTTPS**
   ```bash
   # 对于 Redis SSL 连接
   REDIS_URL=rediss://your-redis-host:6380
   ```

3. **限制注册**
   ```bash
   NEXT_PUBLIC_ENABLE_REGISTER=false
   ```

### 环境变量安全

- ❌ 不要在代码中硬编码敏感信息
- ❌ 不要将 `.env` 文件提交到版本控制
- ✅ 使用部署平台的环境变量管理
- ✅ 定期轮换密码和 Token

## 🛠️ 开发环境配置

### 本地开发

创建 `.env.local` 文件：

```bash
# .env.local
USERNAME=admin
PASSWORD=123456
NEXT_PUBLIC_STORAGE_TYPE=localstorage
SITE_NAME=MoonTV Dev
NEXT_PUBLIC_ENABLE_REGISTER=true
```

### 测试环境

```bash
# .env.test
USERNAME=test
PASSWORD=test123
NEXT_PUBLIC_STORAGE_TYPE=localstorage
SITE_NAME=MoonTV Test
```

## 📋 环境变量检查清单

### 部署前检查

- [ ] `USERNAME` 和 `PASSWORD` 已设置
- [ ] `NEXT_PUBLIC_STORAGE_TYPE` 已选择
- [ ] 对应存储类型的连接信息已配置
- [ ] 站点名称和公告已自定义
- [ ] 生产环境已禁用注册（可选）

### 常见问题排查

1. **Redis 连接失败**
   - 检查 `REDIS_URL` 格式是否正确
   - 确认 Redis 服务是否运行
   - 验证网络连接和防火墙设置

2. **Upstash 连接失败**
   - 确认 `UPSTASH_URL` 和 `UPSTASH_TOKEN` 是否正确
   - 检查 Upstash 数据库状态

3. **管理员登录失败**
   - 确认 `USERNAME` 和 `PASSWORD` 环境变量
   - 检查是否有特殊字符需要转义

## 🔄 环境变量更新

### 运行时更新

大部分环境变量需要重启应用才能生效。以下变量支持运行时更新：

- `SITE_NAME`
- `ANNOUNCEMENT`
- `NEXT_PUBLIC_IMAGE_PROXY`

### 更新步骤

1. 在部署平台更新环境变量
2. 重新部署或重启应用
3. 验证配置是否生效

## 📚 相关文档

- [部署指南](./DEPLOYMENT_GUIDE.md)
- [腾讯云部署](./TENCENT_CLOUD_DEPLOYMENT.md)
- [Cloudflare 部署](./CLOUDFLARE_DEPLOYMENT.md)
- [Docker 部署](./README.md#docker-部署)

---

**注意：** 请根据您的具体部署环境选择合适的配置方案。如有问题，请参考对应的部署文档或提交 Issue。