@echo off
REM Windows 批处理版本的 pre-commit hook
REM 用于替代 shell 脚本在 Windows 环境下的执行

echo Running pre-commit checks on Windows...

REM 检查 Node.js 是否安装
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH
    exit /b 1
)

REM 检查 pnpm 是否安装
where pnpm >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: pnpm is not installed or not in PATH
    exit /b 1
)

REM 运行 lint-staged
echo Running lint-staged...
call pnpm lint:pre-commit
if %errorlevel% neq 0 (
    echo Error: lint-staged failed with exit code %errorlevel%
    exit /b %errorlevel%
)

echo Pre-commit checks completed successfully!
exit /b 0