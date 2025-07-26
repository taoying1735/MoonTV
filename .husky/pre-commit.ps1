# PowerShell pre-commit hook for Windows
# 检查是否安装了 Node.js 和 pnpm
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Error "Node.js is not installed or not in PATH"
    exit 1
}

if (-not (Get-Command pnpm -ErrorAction SilentlyContinue)) {
    Write-Error "pnpm is not installed or not in PATH"
    exit 1
}

# 运行 lint-staged
Write-Host "Running lint-staged..." -ForegroundColor Green
try {
    npx lint-staged
    if ($LASTEXITCODE -ne 0) {
        Write-Error "lint-staged failed with exit code $LASTEXITCODE"
        exit $LASTEXITCODE
    }
    Write-Host "lint-staged completed successfully!" -ForegroundColor Green
} catch {
    Write-Error "Error running lint-staged: $_"
    exit 1
}