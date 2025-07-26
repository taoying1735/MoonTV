# Windows 环境下禁用 Husky 的环境变量设置
# 在 PowerShell 中运行以下命令来禁用 Husky

# 临时禁用（当前会话）
$env:HUSKY = "0"

# 永久禁用（用户级别）
[Environment]::SetEnvironmentVariable("HUSKY", "0", "User")

# 验证设置
Write-Host "HUSKY environment variable set to: $env:HUSKY"
Write-Host "You can now commit without pre-commit hooks."
Write-Host "Use 'pnpm lint:pre-commit' to manually check code quality."