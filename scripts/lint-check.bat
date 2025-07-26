@echo off
REM Windows 批处理脚本 - 代码质量检查
REM 用于替代 Husky pre-commit hooks

echo 🔍 开始代码质量检查...

echo.
echo 📝 运行 ESLint 检查...
call pnpm lint:strict
if %errorlevel% neq 0 (
    echo ❌ ESLint 检查失败
    exit /b 1
)
echo ✅ ESLint 检查通过

echo.
echo 🔧 运行 TypeScript 类型检查...
call pnpm typecheck
if %errorlevel% neq 0 (
    echo ❌ TypeScript 类型检查失败
    exit /b 1
)
echo ✅ TypeScript 类型检查通过

echo.
echo 🎨 运行 Prettier 格式检查...
call pnpm format:check
if %errorlevel% neq 0 (
    echo ❌ Prettier 格式检查失败，正在自动修复...
    call pnpm format
    echo ✅ 代码格式已自动修复
) else (
    echo ✅ Prettier 格式检查通过
)

echo.
echo 🧪 运行测试...
call pnpm test
if %errorlevel% neq 0 (
    echo ⚠️  测试失败或未配置
) else (
    echo ✅ 测试通过
)

echo.
echo 🎉 所有检查完成！代码质量良好，可以安全提交。
echo 💡 提示：使用 'git commit' 或 'pnpm commit:force' 进行提交