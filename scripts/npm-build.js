#!/usr/bin/env node

/**
 * npm构建脚本
 * 用于处理npm依赖冲突和构建优化
 * 
 * 功能：
 * 1. 清理缓存
 * 2. 使用legacy-peer-deps安装依赖
 * 3. 生成运行时配置
 * 4. 执行构建
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 开始npm构建流程...');

try {
  // 1. 清理npm缓存
  console.log('📦 清理npm缓存...');
  execSync('npm cache clean --force', { stdio: 'inherit' });

  // 2. 删除node_modules和package-lock.json（如果存在）
  console.log('🗑️ 清理旧的依赖文件...');
  if (fs.existsSync('node_modules')) {
    execSync('rm -rf node_modules', { stdio: 'inherit' });
  }
  if (fs.existsSync('package-lock.json')) {
    fs.unlinkSync('package-lock.json');
  }

  // 3. 使用legacy-peer-deps安装依赖
  console.log('📥 安装依赖（使用legacy-peer-deps）...');
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });

  // 4. 生成运行时配置
  console.log('⚙️ 生成运行时配置...');
  if (fs.existsSync('scripts/convert-config.js')) {
    execSync('node scripts/convert-config.js', { stdio: 'inherit' });
  }

  // 5. 生成manifest
  console.log('📋 生成manifest...');
  if (fs.existsSync('scripts/generate-manifest.js')) {
    execSync('node scripts/generate-manifest.js', { stdio: 'inherit' });
  }

  // 6. 执行构建
  console.log('🔨 开始构建...');
  execSync('npm run build:next', { stdio: 'inherit' });

  console.log('✅ 构建完成！');

} catch (error) {
  console.error('❌ 构建失败:', error.message);
  process.exit(1);
}