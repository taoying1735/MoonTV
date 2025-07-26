/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */
const nextConfig = {
  // 针对 Cloudflare Pages 优化输出模式
  output: process.env.CF_PAGES ? 'export' : 'standalone',
  
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
  },

  // 压缩配置
  compress: true,

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

  webpack(config, { isServer, dev }) {
    // 生产环境优化配置
    if (!dev) {
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
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: -10,
              chunks: 'all',
              maxSize: 20000000, // 20MB 限制
            },
          },
        },
        // 禁用开发时的缓存以减少文件大小
        cache: false,
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
      net: false,
      tls: false,
      crypto: false,
    };

    return config;
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA(nextConfig);
