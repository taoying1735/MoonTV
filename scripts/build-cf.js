#!/usr/bin/env node

/**
 * Cloudflare Pages 构建脚本
 * 解决 SSR 环境下的兼容性问题
 */

const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');

// 添加 self polyfill
console.log('🔧 添加 self polyfill 以支持 SSR...');
const polyfillPath = path.join(__dirname, '..', 'public', 'self-polyfill.js');
if (!fs.existsSync(polyfillPath)) {
  const polyfillContent = `
if (typeof self === 'undefined') {
  global.self = global;
}
if (typeof window === 'undefined') {
  global.window = global;
}
`;
  fs.writeFileSync(polyfillPath, polyfillContent);
}

console.log('🚀 开始 Cloudflare Pages 构建...');

// 设置环境变量
process.env.CF_PAGES = 'true';
process.env.NODE_ENV = 'production';

// 清理缓存文件以减少部署大小
const cleanupPaths = [
  path.join(__dirname, '..', '.next', 'cache'),
  path.join(__dirname, '..', 'cache'),
];

cleanupPaths.forEach((cachePath) => {
  if (fs.existsSync(cachePath)) {
    console.log(`🧹 清理缓存目录: ${cachePath}`);
    fs.rmSync(cachePath, { recursive: true, force: true });
  }
});

// 执行 Next.js 构建
const nextBuild = spawn('npx', ['next', 'build'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env },
});

nextBuild.on('close', (code) => {
  if (code === 0) {
    console.log('✅ Cloudflare Pages 构建成功！');

    // 构建完成后再次清理缓存
    cleanupPaths.forEach((cachePath) => {
      if (fs.existsSync(cachePath)) {
        console.log(`🧹 构建后清理缓存: ${cachePath}`);
        fs.rmSync(cachePath, { recursive: true, force: true });
      }
    });
  } else {
    console.error('❌ 构建失败，退出码:', code);
    process.exit(code);
  }
});

// 修复：使用正确的变量名 nextBuild 而不是 buildProcess
nextBuild.on('error', (error) => {
  console.error('❌ 构建过程中发生错误:', error);
  process.exit(1);
});
