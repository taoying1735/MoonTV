#!/usr/bin/env node

/**
 * Cloudflare Pages 构建脚本
 * 解决 SSR 环境下的兼容性问题
 */

const { spawn } = require('child_process');
const path = require('path');

// 设置环境变量
process.env.CF_PAGES = 'true';
process.env.NODE_ENV = 'production';

// 在全局环境中添加 self polyfill
if (typeof global !== 'undefined' && typeof self === 'undefined') {
  console.log('🔧 添加 self polyfill 以支持 SSR...');
  
  // 创建一个更完整的 self 对象
  const selfPolyfill = {
    // 基本属性
    ...global,
    
    // 浏览器特有属性（设为 undefined 以避免错误）
    window: undefined,
    document: undefined,
    location: undefined,
    navigator: undefined,
    
    // Webpack chunk 加载支持
    webpackChunk_N_E: [],
    
    // 常用的全局函数
    setTimeout: global.setTimeout,
    clearTimeout: global.clearTimeout,
    setInterval: global.setInterval,
    clearInterval: global.clearInterval,
    
    // 自引用
    self: undefined
  };
  
  // 设置自引用
  selfPolyfill.self = selfPolyfill;
  
  // 分配到全局
  global.self = selfPolyfill;
}

console.log('🚀 开始 Cloudflare Pages 构建...');

// 运行构建命令，使用 -r 参数预加载 polyfill
const buildProcess = spawn('node', ['-r', './polyfills/global-self.js', './node_modules/next/dist/bin/next', 'build'], {
  stdio: 'inherit',
  shell: false,
  cwd: process.cwd(),
  env: {
    ...process.env,
    CF_PAGES: 'true'
  }
});

buildProcess.on('close', (code) => {
  if (code === 0) {
    console.log('✅ Cloudflare Pages 构建成功！');
  } else {
    console.error('❌ Cloudflare Pages 构建失败，退出码:', code);
    process.exit(code);
  }
});

buildProcess.on('error', (error) => {
  console.error('❌ 构建过程中发生错误:', error);
  process.exit(1);
});