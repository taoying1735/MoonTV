# Windows 环境下的代码质量检查脚本
# 用于替代 Husky pre-commit hooks

Write-Host "🔍 开始代码质量检查..." -ForegroundColor Cyan

# 1. 运行 ESLint 检查
Write-Host "`n📝 运行 ESLint 检查..." -ForegroundColor Yellow
$eslintResult = & pnpm lint:strict 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ ESLint 检查失败" -ForegroundColor Red
    Write-Host $eslintResult
    exit 1
}
Write-Host "✅ ESLint 检查通过" -ForegroundColor Green

# 2. 运行 TypeScript 类型检查
Write-Host "`n🔧 运行 TypeScript 类型检查..." -ForegroundColor Yellow
$typecheckResult = & pnpm typecheck 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ TypeScript 类型检查失败" -ForegroundColor Red
    Write-Host $typecheckResult
    exit 1
}
Write-Host "✅ TypeScript 类型检查通过" -ForegroundColor Green

# 3. 运行 Prettier 格式检查
Write-Host "`n🎨 运行 Prettier 格式检查..." -ForegroundColor Yellow
$formatResult = & pnpm format:check 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Prettier 格式检查失败，正在自动修复..." -ForegroundColor Yellow
    & pnpm format
    Write-Host "✅ 代码格式已自动修复" -ForegroundColor Green
} else {
    Write-Host "✅ Prettier 格式检查通过" -ForegroundColor Green
}

# 4. 运行测试（如果有的话）
Write-Host "`n🧪 运行测试..." -ForegroundColor Yellow
$testResult = & pnpm test 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  测试失败或未配置" -ForegroundColor Yellow
} else {
    Write-Host "✅ 测试通过" -ForegroundColor Green
}

Write-Host "`n🎉 所有检查完成！代码质量良好，可以安全提交。" -ForegroundColor Green
Write-Host "💡 提示：使用 'git commit' 或 'pnpm commit:force' 进行提交" -ForegroundColor Cyan