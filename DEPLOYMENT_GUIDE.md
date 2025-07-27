# MoonTV 部署说明

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

### 注意事项
1. 优先使用 pnpm 进行本地开发
2. 部署时如遇到依赖冲突，使用 `npm run build:npm` 命令
3. 确保部署平台使用正确的 Node.js 版本
4. 如果仍有问题，可以在部署配置中设置环境变量：
   ```
   NPM_CONFIG_LEGACY_PEER_DEPS=true
   ```