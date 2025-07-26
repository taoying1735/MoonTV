# Windows 环境下的 Husky 兼容性解决方案

## 问题描述

在 Windows 环境下，Husky 的 Git hooks 会遇到以下问题：

- `/usr/bin/env: 'bash': No such file or directory`
- `husky - commit-msg hook exited with code 127 (error)`

## 解决方案

### 1. 禁用有问题的 Hooks

- ✅ `pre-commit` hook 已禁用
- ✅ `commit-msg` hook 已禁用

### 2. 手动代码质量检查

使用以下命令进行手动检查：

#### PowerShell 版本（推荐）

```bash
pnpm lint:check
```

#### 批处理版本

```bash
pnpm lint:check:bat
```

#### 单独检查命令

```bash
# ESLint 检查
pnpm lint:strict

# TypeScript 类型检查
pnpm typecheck

# Prettier 格式检查
pnpm format:check

# 自动修复格式
pnpm format
```

### 3. 安全提交方式

#### 方式一：手动检查后提交

```bash
# 1. 运行代码质量检查
pnpm lint:check

# 2. 提交代码
git commit -m "your commit message"
```

#### 方式二：使用安全提交脚本

```bash
# 自动运行检查并提交
pnpm commit:safe
```

#### 方式三：跳过 hooks 强制提交（紧急情况）

```bash
pnpm commit:force
```

### 4. 提交信息检查

手动检查提交信息格式：

```bash
# 检查最后一次提交信息
pnpm commit:msg-check

# 或者确保使用 conventional commit 格式
# feat: 新功能
# fix: 修复问题
# docs: 文档更新
# style: 代码格式
# refactor: 重构
# test: 测试
# chore: 构建过程或辅助工具的变动
```

## 文件说明

- `.husky/pre-commit` - 已禁用的 pre-commit hook
- `.husky/commit-msg` - 已禁用的 commit-msg hook
- `scripts/lint-check.ps1` - PowerShell 版本的代码检查脚本
- `scripts/lint-check.bat` - 批处理版本的代码检查脚本

## 最佳实践

1. 提交前始终运行 `pnpm lint:check`
2. 使用 conventional commit 格式编写提交信息
3. 如果检查失败，修复问题后再提交
4. 紧急情况下可使用 `pnpm commit:force` 跳过检查

## 注意事项

- 这些脚本会自动修复 Prettier 格式问题
- ESLint 和 TypeScript 错误需要手动修复
- 建议在 IDE 中配置自动格式化和 lint 检查
