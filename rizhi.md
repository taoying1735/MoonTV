21:04:47.248
Running build
21:04:49.557
21:04:49.558
builder version 20250704
21:04:49.580
21:04:49.580
Cloning github.com/taoying1735/MoonTV (Branch: main)
21:04:51.393
Cloning completed: 1775ms
21:04:51.480
21:04:51.480
Switching node version
21:04:52.690
Now, we're on node version v20.18.0 (npm 10.8.2)
21:04:56.444
21:04:56.444
Running "npm install"
21:06:11.245
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
21:06:11.266
npm warn deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
21:06:11.287
npm warn deprecated rollup-plugin-terser@7.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser
21:06:11.308
npm warn deprecated workbox-google-analytics@6.6.0: It is not compatible with newer versions of GA starting with v4, as long as you are using GAv3 it should be ok, but the package is not longer being maintained
21:06:11.329
npm warn deprecated workbox-cacheable-response@6.6.0: workbox-background-sync@6.6.0
21:06:11.350
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
21:06:11.373
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
21:06:11.393
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
21:06:11.434

> moontv@0.1.0 prepare
> 21:06:11.455
> node -e "try { require('husky').install() } catch (e) { console.log('Husky not available, skipping...') }"
> 21:06:11.494
> Husky not available, skipping...
> 21:06:11.535
> added 545 packages, and audited 546 packages in 1m
> 21:06:11.577
> 125 packages are looking for funding
> 21:06:11.598
> run `npm fund` for details
> 21:06:11.639
> 4 vulnerabilities (2 low, 2 moderate)
> 21:06:11.681
> To address issues that do not require attention, run:
> 21:06:11.699
> npm audit fix
> 21:06:11.740
> To address all issues possible (including breaking changes), run:
> 21:06:11.760
> npm audit fix --force
> 21:06:11.799
> Some issues need review, and may require choosing
> 21:06:11.820
> a different dependency.
> 21:06:11.860
> Run `npm audit` for details.
> 21:06:11.881
> npm notice
> 21:06:11.902
> npm notice New major version of npm available! 10.8.2 -> 11.5.1
> 21:06:11.922
> npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.5.1
> 21:06:11.942
> npm notice To update run: npm install -g npm@11.5.1
> 21:06:11.965
> npm notice
> 21:06:11.966
> 21:06:11.966
> Running "pnpm build"
> 21:06:29.545
> failed to compile.
> 21:06:29.545
> 21:06:29.546
> src/app/layout.tsx
> 21:06:29.546
> an error occurred in `next/font`.
> 21:06:29.546
> 21:06:29.546
> error: cannot find module 'tailwindcss'
> 21:06:29.546
> require stack:
> 21:06:29.546

- /tmp/repo/moontv-zi3wh8al9g/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js
  21:06:29.546
- /tmp/repo/moontv-zi3wh8al9g/node_modules/next/dist/build/webpack/config/blocks/css/index.js
  21:06:29.546
- /tmp/repo/moontv-zi3wh8al9g/node_modules/next/dist/build/webpack/config/index.js
  21:06:29.546
- /tmp/repo/moontv-zi3wh8al9g/node_modules/next/dist/build/webpack-config.js
  21:06:29.546
- /tmp/repo/moontv-zi3wh8al9g/node_modules/next/dist/build/webpack/plugins/next-trace-entrypoints-plugin.js
  21:06:29.546
- /tmp/repo/moontv-zi3wh8al9g/node_modules/next/dist/build/collect-build-traces.js
  21:06:29.547
- /tmp/repo/moontv-zi3wh8al9g/node_modules/next/dist/build/index.js
  21:06:29.547
- /tmp/repo/moontv-zi3wh8al9g/node_modules/next/dist/cli/next-build.js
  21:06:29.548
  at module.\_resolvefilename (node:internal/modules/cjs/loader:1225:15)
  21:06:29.548
  at /tmp/repo/moontv-zi3wh8al9g/node_modules/next/dist/server/require-hook.js:55:36
  21:06:29.549
  at function.resolve (node:internal/modules/helpers:190:19)
  21:06:29.550
  at loadplugin (/tmp/repo/moontv-zi3wh8al9g/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js:49:32)
  21:06:29.550
  at /tmp/repo/moontv-zi3wh8al9g/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js:157:56
  21:06:29.550
  at array.map (<anonymous>)
  21:06:29.550
  at getpostcssplugins (/tmp/repo/moontv-zi3wh8al9g/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js:157:47)
  21:06:29.550
  at async /tmp/repo/moontv-zi3wh8al9g/node_modules/next/dist/build/webpack/config/blocks/css/index.js:124:36
  21:06:29.550
  at async /tmp/repo/moontv-zi3wh8al9g/node_modules/next/dist/build/webpack/loaders/next-font-loader/index.js:86:33
  21:06:29.551
  at async span.traceasyncfn (/tmp/repo/moontv-zi3wh8al9g/node_modules/next/dist/trace/trace.js:154:20)
  21:06:29.551
  21:06:29.551
  ./src/app/admin/page.tsx
  21:06:29.551
  module not found: can't resolve '@/lib/auth'
  21:06:29.551
  21:06:29.551
  https://nextjs.org/docs/messages/module-not-found
  21:06:29.551
  21:06:29.551
  ./src/app/admin/page.tsx
  21:06:29.551
  module not found: can't resolve '@/components/pagelayout'
  21:06:29.551
  21:06:29.551
  https://nextjs.org/docs/messages/module-not-found
  21:06:29.551
  21:06:29.551
  ./src/app/douban/page.tsx
  21:06:29.551
  module not found: can't resolve '@/lib/douban.client'
  21:06:29.552
  21:06:29.552
  https://nextjs.org/docs/messages/module-not-found
  21:06:29.552
  21:06:29.552
  ./src/app/douban/page.tsx
  21:06:29.553
  module not found: can't resolve '@/components/doubancardskeleton'
  21:06:29.553
  21:06:29.553
  https://nextjs.org/docs/messages/module-not-found
  21:06:29.553
  21:06:29.553
  21:06:29.553
  > build failed because of webpack errors
  > 21:06:29.702
  > moontv@0.1.0 build /tmp/repo/moontv-zi3wh8al9g > node scripts/convert-config.js && node scripts/generate-manifest.js && next build 已生成 src/lib/runtime.ts ✅ generated manifest.json with site name: moontv attention: next.js now collects completely anonymous telemetry regarding usage. this information is used to shape next.js' roadmap and prioritize features. you can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following url: https://nextjs.org/telemetry ▲ next.js 14.2.30 - experiments (use with caution): · optimizecss creating an optimized production build ... > [pwa] compile server > [pwa] compile server > [pwa] compile client (static) > [pwa] auto register service worker with: /tmp/repo/moontv-zi3wh8al9g/node_modules/next-pwa/register.js > [pwa] service worker: /tmp/repo/moontv-zi3wh8al9g/public/sw.js > [pwa] url: /sw.js > [pwa] scope: /  elifecycle  command failed with exit code 1.
  > 21:06:29.704
  > 21:06:29.704
  > Build error at stage 2
