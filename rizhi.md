20:29:14.745
Running build
20:29:17.049
20:29:17.050
builder version 20250704
20:29:17.061
20:29:17.061
Cloning github.com/taoying1735/MoonTV (Branch: main)
20:29:19.782
Cloning completed: 2680ms
20:29:19.865
20:29:19.865
Switching node version
20:29:20.824
Now, we're on node version v22.11.0 (npm 10.9.0)
20:29:24.739
20:29:24.739
Running "npm install"
20:31:03.919
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
20:31:03.943
npm warn deprecated rollup-plugin-terser@7.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser
20:31:03.973
npm warn deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
20:31:03.998
npm warn deprecated workbox-cacheable-response@6.6.0: workbox-background-sync@6.6.0
20:31:04.024
npm warn deprecated workbox-google-analytics@6.6.0: It is not compatible with newer versions of GA starting with v4, as long as you are using GAv3 it should be ok, but the package is not longer being maintained
20:31:04.044
npm warn deprecated w3c-hr-time@1.0.2: Use your platform's native performance.now() and performance.timeOrigin.
20:31:04.067
npm warn deprecated domexception@2.0.1: Use your platform's native DOMException instead
20:31:04.091
npm warn deprecated abab@2.0.6: Use your platform's native atob() and btoa() methods instead
20:31:04.116
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
20:31:04.138
npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
20:31:04.161
npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
20:31:04.185
npm warn deprecated q@1.5.1: You or someone you depend on is using Q, the JavaScript Promise library that gave JavaScript developers strong feelings about promises. They can almost certainly migrate to the native JavaScript promise now. Thank you literally everyone for joining me in this bet against the odds. Be excellent to each other.
20:31:04.210
npm warn deprecated
20:31:04.233
npm warn deprecated (For a CapTP with native promises, see @endo/eventual-send and @endo/captp)
20:31:04.254
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
20:31:04.274
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
20:31:04.295
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
20:31:04.318
npm warn deprecated critters@0.0.25: Ownership of Critters has moved to the Nuxt team, who will be maintaining the project going forward. If you'd like to keep using Critters, please switch to the actively-maintained fork at https://github.com/danielroe/beasties
20:31:04.340
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
20:31:04.361
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
20:31:04.384
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
20:31:04.401
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
20:31:04.424
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
20:31:04.444
npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
20:31:04.489
> moontv@0.1.0 prepare
20:31:04.510
> husky install
20:31:04.554
husky - Git hooks installed
20:31:04.598
added 1303 packages, and audited 1304 packages in 2m
20:31:04.641
234 packages are looking for funding
20:31:04.664
run `npm fund` for details
20:31:04.705
8 vulnerabilities (2 low, 2 moderate, 4 high)
20:31:04.749
To address issues that do not require attention, run:
20:31:04.769
npm audit fix
20:31:04.813
To address all issues possible (including breaking changes), run:
20:31:04.833
npm audit fix --force
20:31:04.877
Some issues need review, and may require choosing
20:31:04.901
a different dependency.
20:31:04.946
Run `npm audit` for details.
20:31:04.969
npm notice
20:31:04.994
npm notice New major version of npm available! 10.9.0 -> 11.5.1
20:31:05.017
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.5.1
20:31:05.043
npm notice To update run: npm install -g npm@11.5.1
20:31:05.065
npm notice
20:31:05.067
20:31:05.067
Running "npm run build"
20:31:27.132
(node:562) [dep0040] deprecationwarning: the `punycode` module is deprecated. please use a userland alternative instead.
20:31:27.133
(use `node --trace-deprecation ...` to show where the warning was created)
20:32:10.703
unhandledrejection referenceerror: self is not defined
20:32:10.724
    at object.<anonymous> (/tmp/repo/moontv-3jw761hjo4/.next/server/vendors.js:1:1)
20:32:10.724
    at module._compile (node:internal/modules/cjs/loader:1546:14)
20:32:10.724
    at object..js (node:internal/modules/cjs/loader:1689:10)
20:32:10.724
    at module.load (node:internal/modules/cjs/loader:1318:32)
20:32:10.724
    at function._load (node:internal/modules/cjs/loader:1128:12)
20:32:10.751
    at tracingchannel.tracesync (node:diagnostics_channel:315:14)
20:32:10.751
    at wrapmoduleload (node:internal/modules/cjs/loader:218:24)
20:32:10.752
    at module.<anonymous> (node:internal/modules/cjs/loader:1340:12)
20:32:10.752
    at mod.require (/tmp/repo/moontv-3jw761hjo4/node_modules/next/dist/server/require-hook.js:65:28)
20:32:10.755
    at require (node:internal/modules/helpers:141:16) {
20:32:10.756
  type: 'referenceerror'
20:32:10.757
}
20:32:10.870
> moontv@0.1.0 build > pnpm gen:runtime && pnpm gen:manifest && next build > moontv@0.1.0 gen:runtime /tmp/repo/moontv-3jw761hjo4 > node scripts/convert-config.js 已生成 src/lib/runtime.ts > moontv@0.1.0 gen:manifest /tmp/repo/moontv-3jw761hjo4 > node scripts/generate-manifest.js ✅ generated manifest.json with site name: moontv attention: next.js now collects completely anonymous telemetry regarding usage. this information is used to shape next.js' roadmap and prioritize features. you can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following url: https://nextjs.org/telemetry ▲ next.js 14.2.30 - experiments (use with caution): · optimizecss creating an optimized production build ... > [pwa] compile server > [pwa] compile server > [pwa] compile client (static) > [pwa] auto register service worker with: /tmp/repo/moontv-3jw761hjo4/node_modules/next-pwa/register.js > [pwa] service worker: /tmp/repo/moontv-3jw761hjo4/public/sw.js > [pwa] url: /sw.js > [pwa] scope: / ✓ compiled successfully linting and checking validity of types ... collecting page data ...
20:32:10.872
20:32:10.873
Build error at stage 2

=== 第二次构建尝试 (pnpm 错误) ===
20:47:12.640 
Running build 
20:47:14.914 
20:47:14.915 
builder version 20250704 
20:47:14.927 
20:47:14.927 
Cloning github.com/taoying1735/MoonTV (Branch: main, Commit: da9d017) 
20:47:16.763 
Cloning completed: 1795ms 
20:47:16.920 
20:47:16.921 
Switching node version 
20:47:17.941 
Now, we're on node version v20.18.0 (npm 10.8.2) 
20:47:21.568 
20:47:21.568 
Running "npm install"
20:47:35.664 
> moontv@0.1.0 build 
20:47:37.725 
> pnpm gen:runtime && pnpm gen:manifest && next build 
20:47:37.766 
sh: line 1: pnpm: command not found 
20:47:37.784 
npm error code 127 
20:47:37.803 
npm error path /tmp/repo/moontv-bygrybrows 
20:47:37.823 
npm error command failed 
20:47:37.843 
npm error command sh -c pnpm gen:runtime && pnpm gen:manifest && next build 
20:47:37.922 
Build error at stage 2

**错误分析**: pnpm 命令未找到，构建脚本使用 pnpm 但部署环境只有 npm

=== 第三次构建尝试 (Husky 错误) ===
20:51:49.938 
Running build 
20:51:52.230 
20:51:52.231 
builder version 20250704 
20:51:52.245 
20:51:52.246 
Cloning github.com/taoying1735/MoonTV (Branch: main) 
20:51:54.096 
Cloning completed: 1810ms 
20:51:54.185 
20:51:54.185 
Switching node version 
20:51:55.383 
Now, we're on node version v20.18.0 (npm 10.8.2) 
20:51:59.220 
20:51:59.221 
Running "npm install" 
20:53:12.464 
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful. 
20:53:12.485 
npm warn deprecated rollup-plugin-terser@7.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser 
20:53:12.505 
npm warn deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead 
20:53:12.525 
npm warn deprecated workbox-google-analytics@6.6.0: It is not compatible with newer versions of GA starting with v4, as long as you are using GAv3 it should be ok, but the package is not longer being maintained 
20:53:12.547 
npm warn deprecated workbox-cacheable-response@6.6.0: workbox-background-sync@6.6.0 
20:53:12.569 
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported 
20:53:12.590 
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported 
20:53:12.609 
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported 
20:53:12.630 
npm warn deprecated critters@0.0.25: Ownership of Critters has moved to the Nuxt team, who will be maintaining the project going forward. If you'd like to keep using Critters, please switch to the actively-maintained fork at https://github.com/danielroe/beasties  
20:53:12.664 
> moontv@0.1.0 prepare 
20:53:12.684 
> husky install 
20:53:12.725 
sh: line 1: husky: command not found 
20:53:12.745 
npm error code 127 
20:53:12.766 
npm error path /tmp/repo/moontv-bygrybrows 
20:53:12.784 
npm error command failed 
20:53:12.803 
npm error command sh -c husky install 
20:53:12.823 
npm notice 
20:53:12.843 
npm notice New major version of npm available! 10.8.2 -> 11.5.1 
20:53:12.862 
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.5.1  
20:53:12.881 
npm notice To update run: npm install -g npm@11.5.1 
20:53:12.899 
npm notice 
20:53:12.917 
npm error A complete log of this run can be found in: /tmp/home/.npm/_logs/2025-07-27T12_51_59_469Z-debug-0.log 
20:53:12.921 
20:53:12.922 
Build error at stage 2

错误分析：
- Husky 命令未找到，导致 prepare 脚本失败
- 需要修复 package.json 中的 prepare 脚本

=== 第四次构建尝试 (Beasties 版本错误) ===
20:59:49.314 
Running build 
20:59:51.630 
20:59:51.631 
builder version 20250704 
20:59:51.644 
20:59:51.644 
Cloning github.com/taoying1735/MoonTV (Branch: main) 
20:59:53.452 
Cloning completed: 1769ms 
20:59:53.531 
20:59:53.532 
Switching node version 
20:59:54.733 
Now, we're on node version v20.18.0 (npm 10.8.2) 
20:59:58.416 
20:59:58.417 
Running "npm install" 
21:01:04.445 
npm error code ETARGET 
21:01:04.457 
npm error notarget No matching version found for beasties@^0.0.25. 
21:01:04.470 
npm error notarget In most cases you or one of your dependencies are requesting 
21:01:04.485 
npm error notarget a package version that doesn't exist. 
21:01:04.501 
npm notice 
21:01:04.515 
npm notice New major version of npm available! 10.8.2 -> 11.5.1 
21:01:04.528 
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.5.1  
21:01:04.540 
npm notice To update run: npm install -g npm@11.5.1 
21:01:04.553 
npm notice 
21:01:04.565 
npm error A complete log of this run can be found in: /tmp/home/.npm/_logs/2025-07-27T12_59_58_718Z-debug-0.log 
21:01:04.569 
21:01:04.569 
Build error at stage 2

**错误分析**: 
- `npm error notarget No matching version found for beasties@^0.0.25` - beasties 包的版本号错误
- 实际上 beasties 的正确版本是 `0.1.0`，而不是 `0.0.25`

**修复措施**:
- 将 `package.json` 中的 `"beasties": "^0.0.25"` 修改为 `"beasties": "^0.1.0"`

## 已实施的修复

### 1. 包管理器兼容性修复 ✅
```json
// 修改前
"build": "pnpm gen:runtime && pnpm gen:manifest && next build"

// 修改后
"build": "node scripts/convert-config.js && node scripts/generate-manifest.js && next build"
```

### 2. 全局变量错误修复 ✅
在 next.config.js 中添加 webpack 配置：
```javascript
config.plugins.push(
  new webpack.DefinePlugin({
    'typeof self': JSON.stringify('object'),
    self: 'globalThis',
    'typeof global': JSON.stringify('object'),
    global: 'globalThis',
  })
);
```

### 3. Husky 安装错误修复 ✅
```json
// 修改前
"prepare": "husky install"

// 修改后
"prepare": "node -e \"try { require('husky').install() } catch (e) { console.log('Husky not available, skipping...') }\""
```

### 4. Beasties 版本修复 🆕
```json
// 修改前
"beasties": "^0.0.25"

// 修改后
"beasties": "^0.1.0"
```

## 预期结果
- npm install 应该成功完成
- 构建过程应该顺利进入 next build 阶段
- 所有依赖包都能正确安装