# Cloudflare Pages 部署优化指南

## 问题分析

根据构建日志分析，MoonTV 项目在 Cloudflare Pages 部署时遇到以下问题：

### 主要错误
```
Error: Pages only supports files up to 25 MiB in size
cache/webpack/client-production/0.pack is 38.7 MiB in size
```

## 解决方案

### 1. Next.js 配置优化

已优化 `next.config.js` 文件，主要改进：

- **动态输出模式**：根据环境变量 `CF_PAGES` 自动切换输出模式
- **Webpack 优化**：
  - 禁用生产环境缓存以减少文件大小
  - 配置代码分割，限制 chunk 大小为 20MB
  - 优化 vendor 包分离
- **压缩配置**：启用 CSS 优化和 Gzip 压缩

### 2. 构建脚本优化

新增构建命令：
```bash
# Cloudflare Pages 专用构建
pnpm build:cf

# 清理缓存
pnpm clean
```

### 3. 文件忽略优化

更新 `.gitignore` 文件，忽略：
- Webpack 缓存文件
- PWA 生成文件
- Cloudflare 配置文件
- 各种临时文件

### 4. Cloudflare Pages 配置

创建了以下配置文件：

#### `_headers`
- 启用 Gzip 压缩
- 配置静态资源缓存策略
- 优化 API 路由缓存

#### `_redirects`
- 处理 SPA 路由重定向
- API 路由映射
- 404 页面处理

## 部署步骤

### 方法一：使用 Cloudflare Pages Dashboard

1. **连接 GitHub 仓库**
   - 登录 Cloudflare Dashboard
   - 进入 Pages 页面
   - 连接 GitHub 仓库

2. **配置构建设置**
   ```
   构建命令: pnpm build:cf
   输出目录: out
   环境变量: CF_PAGES=true
   ```

3. **高级设置**
   - Node.js 版本: 20.x
   - 包管理器: pnpm

### 方法二：使用 Wrangler CLI

1. **安装 Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **登录 Cloudflare**
   ```bash
   wrangler login
   ```

3. **部署项目**
   ```bash
   # 清理并构建
   pnpm clean
   pnpm build:cf
   
   # 部署到 Cloudflare Pages
   wrangler pages deploy out --project-name moontv
   ```

## 性能优化建议

### 1. 代码分割
- 使用动态导入 `import()` 分割大型组件
- 按路由分割代码

### 2. 图片优化
- 使用 WebP 格式
- 实现懒加载
- 配置适当的图片尺寸

### 3. 依赖优化
- 定期审查和清理未使用的依赖
- 使用 Tree Shaking 移除未使用代码
- 考虑使用更轻量的替代库

### 4. 缓存策略
- 静态资源长期缓存
- API 响应适当缓存
- 使用 CDN 加速

## 监控和调试

### 构建日志检查
- 监控构建时间和文件大小
- 检查 webpack 分析报告
- 关注内存使用情况

### 性能监控
- 使用 Lighthouse 评估性能
- 监控 Core Web Vitals
- 设置错误追踪

## 故障排除

### 常见问题

1. **文件大小超限**
   - 运行 `pnpm clean` 清理缓存
   - 检查是否有大型文件被意外包含
   - 优化图片和静态资源

2. **构建失败**
   - 检查 Node.js 版本兼容性
   - 验证环境变量设置
   - 查看详细错误日志

3. **运行时错误**
   - 检查 API 路由配置
   - 验证环境变量
   - 查看 Cloudflare Functions 日志

## 更新记录

- **2025年1月**: 完成 Cloudflare Pages 部署优化
  - 优化 Next.js 配置
  - 添加构建脚本
  - 创建部署配置文件
  - 编写部署指南