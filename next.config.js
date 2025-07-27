/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */
const nextConfig = {
  // 针对 Cloudflare Pages 优化输出模式
  output: 'standalone',

  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: false,
  swcMinify: true,

  // 针对 Cloudflare Pages 的优化配置
  experimental: {
    // 减少构建缓存大小
    optimizeCss: true,
    // 启用 gzip 压缩
    gzipSize: true,
    // 为 Cloudflare Pages 添加特殊配置
    ...(process.env.CF_PAGES && {
      esmExternals: false,
    }),
  },

  // 压缩配置
  compress: true,
  // 优化构建以减少文件大小
  poweredByHeader: false,
  generateEtags: false,

  // 在 Cloudflare Pages 环境下的基本配置
  ...(process.env.CF_PAGES && {
    trailingSlash: false,
  }),

  // 图片优化配置
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },

  webpack(config, { dev, isServer }) {
    // 添加全局变量定义，解决 "self is not defined" 错误
    const webpack = require('webpack');
    config.plugins.push(
      new webpack.DefinePlugin({
        'typeof self': JSON.stringify('object'),
        self: 'globalThis',
        'typeof global': JSON.stringify('object'),
        global: 'globalThis',
      })
    );

    // 为 Cloudflare Pages 环境添加特殊处理
    if (process.env.CF_PAGES && isServer) {
      // 启用代码分割和最小化以减少 Worker 大小
      config.optimization.splitChunks = {
        chunks: 'all',
        maxSize: 1000000, // 1MB 限制每个 chunk
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\/]node_modules[\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
            maxSize: 500000, // 500KB 限制 vendor chunk
          },
        },
      };
      
      // 启用最小化以减少文件大小
      config.optimization.minimize = true;
    }

    // 生产环境优化配置
    if (!dev && !process.env.CF_PAGES) {
      // 禁用缓存以减少文件大小
      config.cache = false;

      // 减少 chunk 大小
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
            vendor: {
              test: /[\/]node_modules[\/]/,
              name: 'vendors',
              priority: -10,
              chunks: 'all',
              maxSize: 20000000, // 20MB 限制
            },
          },
        },
      };
    }

    // SVG 处理规则
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // 重新应用现有规则，但仅适用于以 ?url 结尾的 svg 导入
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // 将所有其他 *.svg 导入转换为 React 组件
      {
        test: /\.svg$/i,
        issuer: { not: /\.(css|scss|sass)$/ },
        resourceQuery: { not: /url/ }, // 排除 *.svg?url
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
          titleProp: true,
        },
      }
    );

    // 修改文件加载器规则以忽略 *.svg
    fileLoaderRule.exclude = /\.svg$/i;

    // 解析回退配置
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
    };

    return config;
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  // 在开发环境或 Cloudflare Pages 构建环境下禁用 PWA
  disable: process.env.NODE_ENV === 'development' || process.env.CF_PAGES,
  register: true,
  skipWaiting: true,
});

// 在 Cloudflare Pages 环境下完全跳过 PWA 插件
module.exports = process.env.CF_PAGES ? nextConfig : withPWA(nextConfig);
