2025-07-26T06:08:32.556563Z Cloning repository...
2025-07-26T06:08:33.357453Z From https://github.com/taoying1735/MoonTV
2025-07-26T06:08:33.358268Z * branch 24dcdd8063b189d6fd6f4124b0899a3ee1e947de -> FETCH_HEAD
2025-07-26T06:08:33.358653Z
2025-07-26T06:08:33.402911Z HEAD is now at 24dcdd8 fix: resolve routes-manifest.json issue for Cloudflare Pages
2025-07-26T06:08:33.403381Z
2025-07-26T06:08:33.49475Z
2025-07-26T06:08:33.495447Z Using v2 root directory strategy
2025-07-26T06:08:33.516424Z Success: Finished cloning repository files
2025-07-26T06:08:35.207201Z Checking for configuration in a Wrangler configuration file (BETA)
2025-07-26T06:08:35.207896Z
2025-07-26T06:08:36.306128Z No wrangler.toml file found. Continuing.
2025-07-26T06:08:36.38645Z Detected the following tools from environment: nodejs@20.10.0, pnpm@10.11.1
2025-07-26T06:08:36.387066Z Installing nodejs 20.10.0
2025-07-26T06:08:37.469049Z Trying to update node-build... ok
2025-07-26T06:08:37.570619Z To follow progress, use 'tail -f /tmp/node-build.20250726060837.494.log' or pass --verbose
2025-07-26T06:08:37.672787Z Downloading node-v20.10.0-linux-x64.tar.gz...
2025-07-26T06:08:37.89754Z -> https://nodejs.org/dist/v20.10.0/node-v20.10.0-linux-x64.tar.gz
2025-07-26T06:08:39.596911Z
2025-07-26T06:08:39.597569Z WARNING: node-v20.10.0-linux-x64 is in LTS Maintenance mode and nearing its end of life.
2025-07-26T06:08:39.597692Z It only receives *critical* security updates, *critical\* bug fixes and documentation updates.
2025-07-26T06:08:39.59776Z
2025-07-26T06:08:39.597842Z Installing node-v20.10.0-linux-x64...
2025-07-26T06:08:40.009359Z Installed node-v20.10.0-linux-x64 to /opt/buildhome/.asdf/installs/nodejs/20.10.0
2025-07-26T06:08:40.009658Z
2025-07-26T06:08:41.756548Z
2025-07-26T06:08:41.756776Z changed 1 package in 469ms
2025-07-26T06:08:41.765018Z Reshimming asdf nodejs...
2025-07-26T06:08:45.55023Z Preparing pnpm@10.11.1 for immediate activation...
2025-07-26T06:08:46.255641Z ! Corepack is about to download https://registry.npmjs.org/pnpm/-/pnpm-10.12.4.tgz
2025-07-26T06:08:47.418221Z Installing project dependencies: pnpm install
2025-07-26T06:08:48.065545Z Lockfile is up to date, resolution step is skipped
2025-07-26T06:08:48.178344Z Progress: resolved 1, reused 0, downloaded 0, added 0
2025-07-26T06:08:48.395764Z Packages: +1305
2025-07-26T06:08:48.396059Z ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
2025-07-26T06:08:49.183778Z Progress: resolved 1305, reused 0, downloaded 72, added 36
2025-07-26T06:08:50.187405Z Progress: resolved 1305, reused 0, downloaded 272, added 262
2025-07-26T06:08:51.209591Z Progress: resolved 1305, reused 0, downloaded 338, added 309
2025-07-26T06:08:52.210286Z Progress: resolved 1305, reused 0, downloaded 402, added 340
2025-07-26T06:08:53.210474Z Progress: resolved 1305, reused 0, downloaded 542, added 443
2025-07-26T06:08:54.241018Z Progress: resolved 1305, reused 0, downloaded 716, added 599
2025-07-26T06:08:55.241313Z Progress: resolved 1305, reused 0, downloaded 870, added 724
2025-07-26T06:08:56.242451Z Progress: resolved 1305, reused 0, downloaded 1046, added 867
2025-07-26T06:08:57.248662Z Progress: resolved 1305, reused 0, downloaded 1281, added 1065
2025-07-26T06:08:57.974336Z Progress: resolved 1305, reused 0, downloaded 1305, added 1305, done
2025-07-26T06:08:58.499262Z
2025-07-26T06:08:58.499619Z dependencies:
2025-07-26T06:08:58.499787Z + @cloudflare/next-on-pages 1.13.12
2025-07-26T06:08:58.499903Z + @dnd-kit/core 6.3.1
2025-07-26T06:08:58.499989Z + @dnd-kit/modifiers 9.0.0
2025-07-26T06:08:58.500079Z + @dnd-kit/sortable 10.0.0
2025-07-26T06:08:58.500181Z + @dnd-kit/utilities 3.2.2
2025-07-26T06:08:58.500268Z + @headlessui/react 2.2.4
2025-07-26T06:08:58.500389Z + @heroicons/react 2.2.0
2025-07-26T06:08:58.500483Z + @upstash/redis 1.35.1
2025-07-26T06:08:58.500577Z + @vidstack/react 1.12.13
2025-07-26T06:08:58.500667Z + artplayer 5.2.3
2025-07-26T06:08:58.500749Z + clsx 2.1.1
2025-07-26T06:08:58.501002Z + critters 0.0.25
2025-07-26T06:08:58.501172Z + framer-motion 12.18.1
2025-07-26T06:08:58.501294Z + hls.js 1.6.6
2025-07-26T06:08:58.501377Z + lucide-react 0.438.0
2025-07-26T06:08:58.501481Z + media-icons 1.1.5
2025-07-26T06:08:58.501577Z + next 14.2.30
2025-07-26T06:08:58.501812Z + next-pwa 5.6.0
2025-07-26T06:08:58.502183Z + next-themes 0.4.6
2025-07-26T06:08:58.502378Z + react 18.3.1
2025-07-26T06:08:58.502527Z + react-dom 18.3.1
2025-07-26T06:08:58.502687Z + react-icons 5.5.0
2025-07-26T06:08:58.502801Z + redis 4.7.1
2025-07-26T06:08:58.502887Z + sweetalert2 11.22.2
2025-07-26T06:08:58.502966Z + swiper 11.2.8
2025-07-26T06:08:58.503043Z + tailwind-merge 2.6.0
2025-07-26T06:08:58.503159Z + vidstack 0.6.15
2025-07-26T06:08:58.503715Z + zod 3.25.67
2025-07-26T06:08:58.504023Z
2025-07-26T06:08:58.504596Z devDependencies:
2025-07-26T06:08:58.504808Z + @commitlint/cli 16.3.0
2025-07-26T06:08:58.505041Z + @commitlint/config-conventional 16.2.4
2025-07-26T06:08:58.505269Z + @svgr/webpack 8.1.0
2025-07-26T06:08:58.505416Z + @tailwindcss/forms 0.5.10
2025-07-26T06:08:58.505555Z + @testing-library/jest-dom 5.17.0
2025-07-26T06:08:58.505671Z + @testing-library/react 15.0.7
2025-07-26T06:08:58.505802Z + @types/node 24.0.3
2025-07-26T06:08:58.505914Z + @types/react 18.3.23
2025-07-26T06:08:58.506029Z + @types/react-dom 19.1.6
2025-07-26T06:08:58.506128Z + @types/testing-library\_\_jest-dom 5.14.9
2025-07-26T06:08:58.506258Z + @typescript-eslint/eslint-plugin 5.62.0
2025-07-26T06:08:58.506373Z + @typescript-eslint/parser 5.62.0
2025-07-26T06:08:58.506554Z + autoprefixer 10.4.21
2025-07-26T06:08:58.506643Z + eslint 8.57.1
2025-07-26T06:08:58.506753Z + eslint-config-next 14.2.30
2025-07-26T06:08:58.506858Z + eslint-config-prettier 8.10.0
2025-07-26T06:08:58.506967Z + eslint-plugin-simple-import-sort 7.0.0
2025-07-26T06:08:58.507061Z + eslint-plugin-unused-imports 2.0.0
2025-07-26T06:08:58.50718Z + husky 7.0.4
2025-07-26T06:08:58.50728Z + jest 27.5.1
2025-07-26T06:08:58.507371Z + lint-staged 12.5.0
2025-07-26T06:08:58.507467Z + next-router-mock 0.9.13
2025-07-26T06:08:58.507571Z + postcss 8.5.6
2025-07-26T06:08:58.507661Z + prettier 2.8.8
2025-07-26T06:08:58.507751Z + prettier-plugin-tailwindcss 0.5.14
2025-07-26T06:08:58.507845Z + tailwindcss 3.4.17
2025-07-26T06:08:58.507939Z + typescript 4.9.5
2025-07-26T06:08:58.508029Z
2025-07-26T06:08:58.508162Z ╭ Warning ─────────────────────────────────────────────────────────────────────╮
2025-07-26T06:08:58.508269Z │ │
2025-07-26T06:08:58.508449Z │ Ignored build scripts: esbuild, sharp, unrs-resolver, workerd. │
2025-07-26T06:08:58.508567Z │ Run "pnpm approve-builds" to pick which dependencies should be allowed │
2025-07-26T06:08:58.508674Z │ to run scripts. │
2025-07-26T06:08:58.508774Z │ │
2025-07-26T06:08:58.508932Z ╰──────────────────────────────────────────────────────────────────────────────╯
2025-07-26T06:08:58.509059Z
2025-07-26T06:08:58.53155Z
2025-07-26T06:08:58.531815Z > moontv@0.1.0 prepare /opt/buildhome/repo
2025-07-26T06:08:58.531974Z > husky install
2025-07-26T06:08:58.532101Z
2025-07-26T06:08:58.653488Z husky - Git hooks installed
2025-07-26T06:08:58.72598Z Done in 11s using pnpm v10.12.4
2025-07-26T06:08:58.765427Z Executing user command: pnpm build:cf
2025-07-26T06:08:59.34459Z
2025-07-26T06:08:59.344896Z > moontv@0.1.0 build:cf /opt/buildhome/repo
2025-07-26T06:08:59.345054Z > pnpm gen:runtime && pnpm gen:manifest && node scripts/build-cf.js && npx @cloudflare/next-on-pages
2025-07-26T06:08:59.345202Z
2025-07-26T06:08:59.718763Z
2025-07-26T06:08:59.71905Z > moontv@0.1.0 gen:runtime /opt/buildhome/repo
2025-07-26T06:08:59.719226Z > node scripts/convert-config.js
2025-07-26T06:08:59.719366Z
2025-07-26T06:08:59.767469Z 已生成 src/lib/runtime.ts
2025-07-26T06:09:00.150217Z
2025-07-26T06:09:00.15057Z > moontv@0.1.0 gen:manifest /opt/buildhome/repo
2025-07-26T06:09:00.150738Z > node scripts/generate-manifest.js
2025-07-26T06:09:00.150874Z
2025-07-26T06:09:00.20066Z ✅ Generated manifest.json with site name: MoonTV
2025-07-26T06:09:00.258547Z 🔧 添加 self polyfill 以支持 SSR...
2025-07-26T06:09:00.265007Z 🚀 开始 Cloudflare Pages 构建...
2025-07-26T06:09:01.578944Z ⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
2025-07-26T06:09:01.583316Z Attention: Next.js now collects completely anonymous telemetry regarding usage.
2025-07-26T06:09:01.583586Z This information is used to shape Next.js' roadmap and prioritize features.
2025-07-26T06:09:01.583683Z You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
2025-07-26T06:09:01.583746Z https://nextjs.org/telemetry
2025-07-26T06:09:01.583834Z
2025-07-26T06:09:01.633208Z ▲ Next.js 14.2.30
2025-07-26T06:09:01.633459Z - Experiments (use with caution):
2025-07-26T06:09:01.633603Z · optimizeCss
2025-07-26T06:09:01.633684Z · esmExternals
2025-07-26T06:09:01.633749Z
2025-07-26T06:09:01.69972Z Creating an optimized production build ...
2025-07-26T06:09:25.311421Z ✓ Compiled successfully
2025-07-26T06:09:25.312498Z Linting and checking validity of types ...
2025-07-26T06:09:33.861652Z Collecting page data ...
2025-07-26T06:09:35.324628Z ⚠ Using edge runtime on a page currently disables static generation for that page
2025-07-26T06:09:40.792193Z Generating static pages (0/9) ...
2025-07-26T06:09:41.098941Z Generating static pages (2/9)
2025-07-26T06:09:41.335156Z Generating static pages (4/9)
2025-07-26T06:09:41.419761Z Generating static pages (6/9)
2025-07-26T06:09:41.771146Z Time 6ms
2025-07-26T06:09:41.771593Z Time 8ms
2025-07-26T06:09:41.771851Z ✓ Generating static pages (9/9)
2025-07-26T06:09:42.394743Z Finalizing page optimization ...
2025-07-26T06:09:42.395005Z Collecting build traces ...
2025-07-26T06:10:03.652378Z
2025-07-26T06:10:03.665969Z Route (app) Size First Load JS
2025-07-26T06:10:03.666189Z ┌ ○ / 3.77 kB 273 kB
2025-07-26T06:10:03.666397Z ├ ○ /\_not-found 142 B 87.4 kB
2025-07-26T06:10:03.666533Z ├ ○ /admin 41.9 kB 146 kB
2025-07-26T06:10:03.666649Z ├ ƒ /api/admin/config 0 B 0 B
2025-07-26T06:10:03.666768Z ├ ƒ /api/admin/reset 0 B 0 B
2025-07-26T06:10:03.666862Z ├ ƒ /api/admin/site 0 B 0 B
2025-07-26T06:10:03.666957Z ├ ƒ /api/admin/source 0 B 0 B
2025-07-26T06:10:03.667295Z ├ ƒ /api/admin/user 0 B 0 B
2025-07-26T06:10:03.667422Z ├ ƒ /api/cron 0 B 0 B
2025-07-26T06:10:03.667568Z ├ ƒ /api/detail 0 B 0 B
2025-07-26T06:10:03.667676Z ├ ƒ /api/douban 0 B 0 B
2025-07-26T06:10:03.667751Z ├ ƒ /api/douban/categories 0 B 0 B
2025-07-26T06:10:03.667844Z ├ ƒ /api/favorites 0 B 0 B
2025-07-26T06:10:03.667936Z ├ ƒ /api/image-proxy 0 B 0 B
2025-07-26T06:10:03.668032Z ├ ƒ /api/login 0 B 0 B
2025-07-26T06:10:03.668153Z ├ ƒ /api/logout 0 B 0 B
2025-07-26T06:10:03.668268Z ├ ƒ /api/playrecords 0 B 0 B
2025-07-26T06:10:03.668366Z ├ ƒ /api/register 0 B 0 B
2025-07-26T06:10:03.668538Z ├ ƒ /api/search 0 B 0 B
2025-07-26T06:10:03.668679Z ├ ƒ /api/search/one 0 B 0 B
2025-07-26T06:10:03.668782Z ├ ƒ /api/search/resources 0 B 0 B
2025-07-26T06:10:03.668912Z ├ ƒ /api/searchhistory 0 B 0 B
2025-07-26T06:10:03.669052Z ├ ƒ /api/server-config 0 B 0 B
2025-07-26T06:10:03.669192Z ├ ○ /douban 3.13 kB 273 kB
2025-07-26T06:10:03.669307Z ├ ○ /login 4.49 kB 91.8 kB
2025-07-26T06:10:03.669412Z ├ ○ /play 12.5 kB 272 kB
2025-07-26T06:10:03.66951Z └ ○ /search 5 kB 271 kB
2025-07-26T06:10:03.669613Z + First Load JS shared by all 87.3 kB
2025-07-26T06:10:03.669708Z ├ chunks/242-3804d87f50553b94.js 31.6 kB
2025-07-26T06:10:03.66995Z ├ chunks/b145b63a-b7e49c063d2fa255.js 53.6 kB
2025-07-26T06:10:03.670077Z └ other shared chunks (total) 2.04 kB
2025-07-26T06:10:03.670258Z
2025-07-26T06:10:03.670366Z
2025-07-26T06:10:03.670465Z ƒ Middleware 48.7 kB
2025-07-26T06:10:03.670568Z
2025-07-26T06:10:03.67066Z ○ (Static) prerendered as static content
2025-07-26T06:10:03.670759Z ƒ (Dynamic) server-rendered on demand
2025-07-26T06:10:03.670852Z
2025-07-26T06:10:03.711918Z ✅ Cloudflare Pages 构建成功！
2025-07-26T06:10:07.925899Z ⚡️ @cloudflare/next-on-pages CLI v.1.13.12
2025-07-26T06:10:08.398808Z ⚡️ Detected Package Manager: pnpm (10.12.4)
2025-07-26T06:10:08.399103Z ⚡️ Preparing project...
2025-07-26T06:10:08.402628Z ⚡️ Project is ready
2025-07-26T06:10:08.402763Z ⚡️ Building project...
2025-07-26T06:10:09.687542Z ▲ Progress: resolved 1, reused 0, downloaded 0, added 0
2025-07-26T06:10:10.688282Z ▲ Progress: resolved 189, reused 174, downloaded 15, added 0
2025-07-26T06:10:11.250942Z ▲ WARN  1 deprecated subdependencies found: path-match@1.2.4
2025-07-26T06:10:11.257071Z ▲ Packages: +235
2025-07-26T06:10:11.257358Z ▲ ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
2025-07-26T06:10:11.498959Z ▲ Progress: resolved 254, reused 219, downloaded 16, added 235, done
2025-07-26T06:10:12.253002Z ▲ Vercel CLI 44.6.3
2025-07-26T06:10:12.258474Z ▲ > NOTE: The Vercel CLI now collects telemetry regarding usage of the CLI.
2025-07-26T06:10:12.258867Z ▲ > This information is used to shape the CLI roadmap and prioritize features.
2025-07-26T06:10:12.259158Z ▲ > You can learn more, including how to opt-out if you'd not like to participate in this program, by visiting the following URL:
2025-07-26T06:10:12.259344Z ▲ > https://vercel.com/docs/cli/about-telemetry
2025-07-26T06:10:12.382023Z ▲ WARN! Build not running on Vercel. System environment variables will not be available.
2025-07-26T06:10:12.630394Z ▲ Detected `pnpm-lock.yaml` 9 which may be generated by pnpm@9.x or pnpm@10.x
2025-07-26T06:10:12.63062Z ▲ Using pnpm@9.x based on project creation date
2025-07-26T06:10:12.630747Z ▲ To use pnpm@10.x, manually opt in using corepack (https://vercel.com/docs/deployments/configure-a-build#corepack)
2025-07-26T06:10:12.632323Z ▲ WARNING: You should not upload the `.next` directory.
2025-07-26T06:10:12.663975Z ▲ Installing dependencies...
2025-07-26T06:10:13.244418Z ▲ Lockfile is up to date, resolution step is skipped
2025-07-26T06:10:13.407956Z ▲ Already up to date
2025-07-26T06:10:13.794959Z ▲ ╭ Warning ─────────────────────────────────────────────────────────────────────╮
2025-07-26T06:10:13.795227Z ▲ │ │
2025-07-26T06:10:13.795569Z ▲ │ Ignored build scripts: esbuild, sharp, unrs-resolver, workerd. │
2025-07-26T06:10:13.795665Z ▲ │ Run "pnpm approve-builds" to pick which dependencies should be allowed │
2025-07-26T06:10:13.795757Z ▲ │ to run scripts. │
2025-07-26T06:10:13.795863Z ▲ │ │
2025-07-26T06:10:13.796123Z ▲ ╰──────────────────────────────────────────────────────────────────────────────╯
2025-07-26T06:10:13.816004Z ▲ > moontv@0.1.0 prepare /opt/buildhome/repo
2025-07-26T06:10:13.816282Z ▲ > husky install
2025-07-26T06:10:13.89555Z ▲ husky - Git hooks installed
2025-07-26T06:10:13.907915Z ▲ Done in 1.1s using pnpm v10.12.4
2025-07-26T06:10:13.923895Z ▲ Detected Next.js version: 14.2.30
2025-07-26T06:10:13.953541Z ▲ Running "pnpm run build"
2025-07-26T06:10:14.393766Z ▲ > moontv@0.1.0 build /opt/buildhome/repo
2025-07-26T06:10:14.394173Z ▲ > pnpm gen:runtime && pnpm gen:manifest && next build
2025-07-26T06:10:14.846295Z ▲ > moontv@0.1.0 gen:runtime /opt/buildhome/repo
2025-07-26T06:10:14.84658Z ▲ > node scripts/convert-config.js
2025-07-26T06:10:14.898146Z ▲ 旧的 runtime.ts 已删除
2025-07-26T06:10:14.89925Z ▲ 已生成 src/lib/runtime.ts
2025-07-26T06:10:15.355984Z ▲ > moontv@0.1.0 gen:manifest /opt/buildhome/repo
2025-07-26T06:10:15.356387Z ▲ > node scripts/generate-manifest.js
2025-07-26T06:10:15.405889Z ▲ ✅ Generated manifest.json with site name: MoonTV
2025-07-26T06:10:16.771977Z ▲ ▲ Next.js 14.2.30
2025-07-26T06:10:16.772251Z ▲ - Experiments (use with caution):
2025-07-26T06:10:16.772345Z ▲ · optimizeCss
2025-07-26T06:10:16.772406Z ▲ · esmExternals
2025-07-26T06:10:17.178366Z ▲ Creating an optimized production build ...
2025-07-26T06:10:21.702809Z ▲ ✓ Compiled successfully
2025-07-26T06:10:21.705715Z ▲ Linting and checking validity of types ...
2025-07-26T06:10:25.104811Z ▲ Collecting page data ...
2025-07-26T06:10:26.705268Z ▲ ⚠ Using edge runtime on a page currently disables static generation for that page
2025-07-26T06:10:32.172679Z ▲ Generating static pages (0/9) ...
2025-07-26T06:10:32.50588Z ▲ Generating static pages (2/9)
2025-07-26T06:10:32.694631Z ▲ Generating static pages (4/9)
2025-07-26T06:10:32.694921Z ▲ Generating static pages (6/9)
2025-07-26T06:10:32.950606Z ▲ Time 6ms
2025-07-26T06:10:33.008255Z ▲ Time 5ms
2025-07-26T06:10:33.008568Z ▲ ✓ Generating static pages (9/9)
2025-07-26T06:10:33.514913Z ▲ Finalizing page optimization ...
2025-07-26T06:10:33.515282Z ▲ Collecting build traces ...
2025-07-26T06:10:50.701069Z ▲  
2025-07-26T06:10:50.715864Z ▲ Route (app) Size First Load JS
2025-07-26T06:10:50.716092Z ▲ ┌ ○ / 3.77 kB 273 kB
2025-07-26T06:10:50.716572Z ▲ ├ ○ /\_not-found 142 B 87.4 kB
2025-07-26T06:10:50.716707Z ▲ ├ ○ /admin 41.9 kB 146 kB
2025-07-26T06:10:50.716783Z ▲ ├ ƒ /api/admin/config 0 B 0 B
2025-07-26T06:10:50.716882Z ▲ ├ ƒ /api/admin/reset 0 B 0 B
2025-07-26T06:10:50.716982Z ▲ ├ ƒ /api/admin/site 0 B 0 B
2025-07-26T06:10:50.717083Z ▲ ├ ƒ /api/admin/source 0 B 0 B
2025-07-26T06:10:50.717234Z ▲ ├ ƒ /api/admin/user 0 B 0 B
2025-07-26T06:10:50.717313Z ▲ ├ ƒ /api/cron 0 B 0 B
2025-07-26T06:10:50.717373Z ▲ ├ ƒ /api/detail 0 B 0 B
2025-07-26T06:10:50.717581Z ▲ ├ ƒ /api/douban 0 B 0 B
2025-07-26T06:10:50.717688Z ▲ ├ ƒ /api/douban/categories 0 B 0 B
2025-07-26T06:10:50.71787Z ▲ ├ ƒ /api/favorites 0 B 0 B
2025-07-26T06:10:50.717979Z ▲ ├ ƒ /api/image-proxy 0 B 0 B
2025-07-26T06:10:50.718083Z ▲ ├ ƒ /api/login 0 B 0 B
2025-07-26T06:10:50.718202Z ▲ ├ ƒ /api/logout 0 B 0 B
2025-07-26T06:10:50.718327Z ▲ ├ ƒ /api/playrecords 0 B 0 B
2025-07-26T06:10:50.718425Z ▲ ├ ƒ /api/register 0 B 0 B
2025-07-26T06:10:50.718513Z ▲ ├ ƒ /api/search 0 B 0 B
2025-07-26T06:10:50.718603Z ▲ ├ ƒ /api/search/one 0 B 0 B
2025-07-26T06:10:50.718713Z ▲ ├ ƒ /api/search/resources 0 B 0 B
2025-07-26T06:10:50.718808Z ▲ ├ ƒ /api/searchhistory 0 B 0 B
2025-07-26T06:10:50.718907Z ▲ ├ ƒ /api/server-config 0 B 0 B
2025-07-26T06:10:50.719005Z ▲ ├ ○ /douban 3.13 kB 273 kB
2025-07-26T06:10:50.719109Z ▲ ├ ○ /login 4.49 kB 91.8 kB
2025-07-26T06:10:50.719251Z ▲ ├ ○ /play 12.5 kB 272 kB
2025-07-26T06:10:50.719473Z ▲ └ ○ /search 5 kB 271 kB
2025-07-26T06:10:50.719607Z ▲ + First Load JS shared by all 87.3 kB
2025-07-26T06:10:50.719938Z ▲ ├ chunks/242-3804d87f50553b94.js 31.6 kB
2025-07-26T06:10:50.720063Z ▲ ├ chunks/b145b63a-b7e49c063d2fa255.js 53.6 kB
2025-07-26T06:10:50.720209Z ▲ └ other shared chunks (total) 2.04 kB
2025-07-26T06:10:50.720322Z ▲  
2025-07-26T06:10:50.720418Z ▲  
2025-07-26T06:10:50.720512Z ▲ ƒ Middleware 48.7 kB
2025-07-26T06:10:50.720615Z ▲ ○ (Static) prerendered as static content
2025-07-26T06:10:50.720714Z ▲ ƒ (Dynamic) server-rendered on demand
2025-07-26T06:10:50.757007Z ▲ > moontv@0.1.0 postbuild /opt/buildhome/repo
2025-07-26T06:10:50.75725Z ▲ > echo 'Build completed - sitemap generation disabled'
2025-07-26T06:10:50.762385Z ▲ Build completed - sitemap generation disabled
2025-07-26T06:10:51.952107Z ▲ Traced Next.js server files in: 1.124s
2025-07-26T06:10:52.112765Z ▲ Created all serverless functions in: 160.414ms
2025-07-26T06:10:53.372768Z ▲ Collected static files (public/, static/, .next/static): 6.405ms
2025-07-26T06:10:53.766102Z ▲ Build Completed in .vercel/output [41s]
2025-07-26T06:10:54.548572Z ⚡️ Completed `pnpm dlx vercel build`.
2025-07-26T06:10:57.789009Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:57.78938Z
2025-07-26T06:10:57.789544Z <stdin>:29526:25:
2025-07-26T06:10:57.789678Z 29526 │ const \_require = eval("require");
2025-07-26T06:10:57.789811Z ╵ ~~~~
2025-07-26T06:10:57.789943Z
2025-07-26T06:10:57.790048Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:57.790177Z
2025-07-26T06:10:57.790293Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:57.790461Z
2025-07-26T06:10:57.790596Z <stdin>:29729:25:
2025-07-26T06:10:57.790715Z 29729 │ const \_require = eval("require");
2025-07-26T06:10:57.79082Z ╵ ~~~~
2025-07-26T06:10:57.790931Z
2025-07-26T06:10:57.79103Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:57.791142Z
2025-07-26T06:10:57.868371Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:57.868802Z
2025-07-26T06:10:57.8689Z <stdin>:29516:25:
2025-07-26T06:10:57.869126Z 29516 │ const \_require = eval("require");
2025-07-26T06:10:57.869274Z ╵ ~~~~
2025-07-26T06:10:57.869929Z
2025-07-26T06:10:57.870086Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:57.87022Z
2025-07-26T06:10:57.870644Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:57.87091Z
2025-07-26T06:10:57.871128Z <stdin>:29719:25:
2025-07-26T06:10:57.87141Z 29719 │ const \_require = eval("require");
2025-07-26T06:10:57.871646Z ╵ ~~~~
2025-07-26T06:10:57.872Z
2025-07-26T06:10:57.872311Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:57.872449Z
2025-07-26T06:10:57.872968Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:57.873222Z
2025-07-26T06:10:57.873367Z <stdin>:29548:25:
2025-07-26T06:10:57.873607Z 29548 │ const \_require = eval("require");
2025-07-26T06:10:57.873753Z ╵ ~~~~
2025-07-26T06:10:57.87387Z
2025-07-26T06:10:57.873971Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:57.874151Z
2025-07-26T06:10:57.874351Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:57.874451Z
2025-07-26T06:10:57.874608Z <stdin>:29751:25:
2025-07-26T06:10:57.874708Z 29751 │ const \_require = eval("require");
2025-07-26T06:10:57.874775Z ╵ ~~~~
2025-07-26T06:10:57.874834Z
2025-07-26T06:10:57.87489Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:57.874944Z
2025-07-26T06:10:58.019117Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:58.01947Z
2025-07-26T06:10:58.019597Z <stdin>:29806:25:
2025-07-26T06:10:58.019698Z 29806 │ const \_require = eval("require");
2025-07-26T06:10:58.019804Z ╵ ~~~~
2025-07-26T06:10:58.019902Z
2025-07-26T06:10:58.019996Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:58.020114Z
2025-07-26T06:10:58.020254Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:58.020363Z
2025-07-26T06:10:58.020462Z <stdin>:30009:25:
2025-07-26T06:10:58.020566Z 30009 │ const \_require = eval("require");
2025-07-26T06:10:58.020669Z ╵ ~~~~
2025-07-26T06:10:58.020767Z
2025-07-26T06:10:58.020868Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:58.020969Z
2025-07-26T06:10:58.031414Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:58.031929Z
2025-07-26T06:10:58.032073Z <stdin>:29670:25:
2025-07-26T06:10:58.032748Z 29670 │ const \_require = eval("require");
2025-07-26T06:10:58.032886Z ╵ ~~~~
2025-07-26T06:10:58.032998Z
2025-07-26T06:10:58.033088Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:58.033185Z
2025-07-26T06:10:58.033268Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:58.033333Z
2025-07-26T06:10:58.033389Z <stdin>:29873:25:
2025-07-26T06:10:58.033448Z 29873 │ const \_require = eval("require");
2025-07-26T06:10:58.033508Z ╵ ~~~~
2025-07-26T06:10:58.033565Z
2025-07-26T06:10:58.033621Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:58.033679Z
2025-07-26T06:10:58.384342Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:58.384583Z
2025-07-26T06:10:58.384663Z <stdin>:29593:25:
2025-07-26T06:10:58.384723Z 29593 │ const \_require = eval("require");
2025-07-26T06:10:58.384787Z ╵ ~~~~
2025-07-26T06:10:58.384844Z
2025-07-26T06:10:58.3849Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:58.384955Z
2025-07-26T06:10:58.385008Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:58.385065Z
2025-07-26T06:10:58.385121Z <stdin>:29796:25:
2025-07-26T06:10:58.385207Z 29796 │ const \_require = eval("require");
2025-07-26T06:10:58.3853Z ╵ ~~~~
2025-07-26T06:10:58.385462Z
2025-07-26T06:10:58.3856Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:58.385708Z
2025-07-26T06:10:58.41079Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:58.41148Z
2025-07-26T06:10:58.411876Z <stdin>:29569:25:
2025-07-26T06:10:58.412252Z 29569 │ const \_require = eval("require");
2025-07-26T06:10:58.412603Z ╵ ~~~~
2025-07-26T06:10:58.412745Z
2025-07-26T06:10:58.413731Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:58.414045Z
2025-07-26T06:10:58.414376Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:58.414805Z
2025-07-26T06:10:58.415635Z <stdin>:29772:25:
2025-07-26T06:10:58.415789Z 29772 │ const \_require = eval("require");
2025-07-26T06:10:58.416025Z ╵ ~~~~
2025-07-26T06:10:58.416804Z
2025-07-26T06:10:58.417039Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:58.417653Z
2025-07-26T06:10:58.427379Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:58.427707Z
2025-07-26T06:10:58.428045Z <stdin>:29508:25:
2025-07-26T06:10:58.428276Z 29508 │ const \_require = eval("require");
2025-07-26T06:10:58.428502Z ╵ ~~~~
2025-07-26T06:10:58.428577Z
2025-07-26T06:10:58.428641Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:58.428698Z
2025-07-26T06:10:58.428752Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:58.428806Z
2025-07-26T06:10:58.428869Z <stdin>:29711:25:
2025-07-26T06:10:58.428923Z 29711 │ const \_require = eval("require");
2025-07-26T06:10:58.428977Z ╵ ~~~~
2025-07-26T06:10:58.429032Z
2025-07-26T06:10:58.429085Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:58.429157Z
2025-07-26T06:10:58.598261Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:58.59856Z
2025-07-26T06:10:58.598668Z <stdin>:29455:25:
2025-07-26T06:10:58.598756Z 29455 │ const \_require = eval("require");
2025-07-26T06:10:58.598843Z ╵ ~~~~
2025-07-26T06:10:58.598942Z
2025-07-26T06:10:58.599024Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:58.599101Z
2025-07-26T06:10:58.599199Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:58.599294Z
2025-07-26T06:10:58.599379Z <stdin>:29658:25:
2025-07-26T06:10:58.599464Z 29658 │ const \_require = eval("require");
2025-07-26T06:10:58.599551Z ╵ ~~~~
2025-07-26T06:10:58.599636Z
2025-07-26T06:10:58.599719Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:58.599823Z
2025-07-26T06:10:58.908717Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:58.909339Z
2025-07-26T06:10:58.909526Z <stdin>:29590:25:
2025-07-26T06:10:58.910184Z 29590 │ const \_require = eval("require");
2025-07-26T06:10:58.910344Z ╵ ~~~~
2025-07-26T06:10:58.910452Z
2025-07-26T06:10:58.910558Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:58.910886Z
2025-07-26T06:10:58.910971Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:58.911205Z
2025-07-26T06:10:58.911399Z <stdin>:29793:25:
2025-07-26T06:10:58.911519Z 29793 │ const \_require = eval("require");
2025-07-26T06:10:58.911641Z ╵ ~~~~
2025-07-26T06:10:58.911819Z
2025-07-26T06:10:58.911933Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:58.91203Z
2025-07-26T06:10:58.986848Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:58.987235Z
2025-07-26T06:10:58.987558Z <stdin>:29534:25:
2025-07-26T06:10:58.987841Z 29534 │ const \_require = eval("require");
2025-07-26T06:10:58.987964Z ╵ ~~~~
2025-07-26T06:10:58.988059Z
2025-07-26T06:10:58.988183Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:58.988285Z
2025-07-26T06:10:58.98837Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:58.988457Z
2025-07-26T06:10:58.988544Z <stdin>:29737:25:
2025-07-26T06:10:58.988633Z 29737 │ const \_require = eval("require");
2025-07-26T06:10:58.989401Z ╵ ~~~~
2025-07-26T06:10:58.989605Z
2025-07-26T06:10:58.989828Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:58.989985Z
2025-07-26T06:10:59.030746Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:59.032051Z
2025-07-26T06:10:59.032266Z <stdin>:29427:25:
2025-07-26T06:10:59.032376Z 29427 │ const \_require = eval("require");
2025-07-26T06:10:59.032479Z ╵ ~~~~
2025-07-26T06:10:59.032577Z
2025-07-26T06:10:59.032673Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:59.032746Z
2025-07-26T06:10:59.032805Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:59.032923Z
2025-07-26T06:10:59.03303Z <stdin>:29630:25:
2025-07-26T06:10:59.033117Z 29630 │ const \_require = eval("require");
2025-07-26T06:10:59.033253Z ╵ ~~~~
2025-07-26T06:10:59.033344Z
2025-07-26T06:10:59.033435Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:59.033533Z
2025-07-26T06:10:59.100757Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:59.101103Z
2025-07-26T06:10:59.101275Z <stdin>:29418:25:
2025-07-26T06:10:59.101402Z 29418 │ const \_require = eval("require");
2025-07-26T06:10:59.101502Z ╵ ~~~~
2025-07-26T06:10:59.101591Z
2025-07-26T06:10:59.101673Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:59.101752Z
2025-07-26T06:10:59.101834Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:59.101914Z
2025-07-26T06:10:59.102007Z <stdin>:29621:25:
2025-07-26T06:10:59.102086Z 29621 │ const \_require = eval("require");
2025-07-26T06:10:59.102184Z ╵ ~~~~
2025-07-26T06:10:59.102268Z
2025-07-26T06:10:59.10237Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:59.102455Z
2025-07-26T06:10:59.160969Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:59.161354Z
2025-07-26T06:10:59.161449Z <stdin>:29468:25:
2025-07-26T06:10:59.161587Z 29468 │ const \_require = eval("require");
2025-07-26T06:10:59.161663Z ╵ ~~~~
2025-07-26T06:10:59.161729Z
2025-07-26T06:10:59.161844Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:59.161945Z
2025-07-26T06:10:59.162096Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:59.162342Z
2025-07-26T06:10:59.162501Z <stdin>:29671:25:
2025-07-26T06:10:59.16262Z 29671 │ const \_require = eval("require");
2025-07-26T06:10:59.162711Z ╵ ~~~~
2025-07-26T06:10:59.162809Z
2025-07-26T06:10:59.162975Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:59.163072Z
2025-07-26T06:10:59.201826Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:59.202099Z
2025-07-26T06:10:59.20226Z <stdin>:29446:25:
2025-07-26T06:10:59.202373Z 29446 │ const \_require = eval("require");
2025-07-26T06:10:59.202438Z ╵ ~~~~
2025-07-26T06:10:59.202506Z
2025-07-26T06:10:59.202601Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:59.202682Z
2025-07-26T06:10:59.202779Z ▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]
2025-07-26T06:10:59.2029Z
2025-07-26T06:10:59.203038Z <stdin>:29649:25:
2025-07-26T06:10:59.203193Z 29649 │ const \_require = eval("require");
2025-07-26T06:10:59.203313Z ╵ ~~~~
2025-07-26T06:10:59.203414Z
2025-07-26T06:10:59.203521Z You can read more about direct eval and bundling here: https://esbuild.github.io/link/direct-eval
2025-07-26T06:10:59.203618Z
2025-07-26T06:10:59.257621Z
2025-07-26T06:10:59.257867Z ⚡️ Build Summary (@cloudflare/next-on-pages v1.13.12)
2025-07-26T06:10:59.258142Z ⚡️
2025-07-26T06:10:59.258252Z ⚡️ Middleware Functions (1)
2025-07-26T06:10:59.258475Z ⚡️ - src/middleware
2025-07-26T06:10:59.258743Z ⚡️
2025-07-26T06:10:59.258899Z ⚡️ Edge Function Routes (20)
2025-07-26T06:10:59.259017Z ⚡️ ┌ /api/admin/config
2025-07-26T06:10:59.259115Z ⚡️ ├ /api/admin/reset
2025-07-26T06:10:59.259221Z ⚡️ ├ /api/admin/site
2025-07-26T06:10:59.259292Z ⚡️ ├ /api/admin/source
2025-07-26T06:10:59.259452Z ⚡️ ├ /api/admin/user
2025-07-26T06:10:59.259699Z ⚡️ ├ /api/cron
2025-07-26T06:10:59.260018Z ⚡️ ├ /api/detail
2025-07-26T06:10:59.26012Z ⚡️ ├ /api/douban
2025-07-26T06:10:59.260512Z ⚡️ ├ /api/douban/categories
2025-07-26T06:10:59.2606Z ⚡️ ├ /api/favorites
2025-07-26T06:10:59.26066Z ⚡️ ├ /api/image-proxy
2025-07-26T06:10:59.260743Z ⚡️ ├ /api/login
2025-07-26T06:10:59.260824Z ⚡️ ├ /api/logout
2025-07-26T06:10:59.260922Z ⚡️ ├ /api/playrecords
2025-07-26T06:10:59.261019Z ⚡️ ├ /api/register
2025-07-26T06:10:59.261158Z ⚡️ ├ /api/search
2025-07-26T06:10:59.261257Z ⚡️ ├ /api/search/one
2025-07-26T06:10:59.261323Z ⚡️ ├ /api/search/resources
2025-07-26T06:10:59.261515Z ⚡️ ├ /api/searchhistory
2025-07-26T06:10:59.261622Z ⚡️ └ /api/server-config
2025-07-26T06:10:59.261721Z ⚡️
2025-07-26T06:10:59.261825Z ⚡️ Prerendered Routes (12)
2025-07-26T06:10:59.261927Z ⚡️ ┌ /
2025-07-26T06:10:59.26202Z ⚡️ ├ /admin
2025-07-26T06:10:59.262108Z ⚡️ ├ /admin.rsc
2025-07-26T06:10:59.262319Z ⚡️ ├ /douban
2025-07-26T06:10:59.262508Z ⚡️ ├ /douban.rsc
2025-07-26T06:10:59.262632Z ⚡️ ├ /index.rsc
2025-07-26T06:10:59.262733Z ⚡️ ├ /login
2025-07-26T06:10:59.262836Z ⚡️ ├ /login.rsc
2025-07-26T06:10:59.262926Z ⚡️ ├ /play
2025-07-26T06:10:59.262985Z ⚡️ ├ /play.rsc
2025-07-26T06:10:59.263083Z ⚡️ ├ /search
2025-07-26T06:10:59.263219Z ⚡️ └ /search.rsc
2025-07-26T06:10:59.263327Z ⚡️
2025-07-26T06:10:59.263447Z ⚡️ Other Static Assets (54)
2025-07-26T06:10:59.263558Z ⚡️ ┌ /\_app.rsc.json
2025-07-26T06:10:59.263651Z ⚡️ ├ /\_document.rsc.json
2025-07-26T06:10:59.263758Z ⚡️ ├ /\_error.rsc.json
2025-07-26T06:10:59.263827Z ⚡️ ├ /404.html
2025-07-26T06:10:59.263909Z ⚡️ └ ... 50 more
2025-07-26T06:10:59.263999Z
2025-07-26T06:10:59.306744Z ⚡️ Build log saved to '.vercel/output/static/\_worker.js/nop-build-log.json'
2025-07-26T06:10:59.306972Z ⚡️ Generated '.vercel/output/static/\_worker.js/index.js'.
2025-07-26T06:10:59.307042Z ⚡️ Build completed in 4.76s
2025-07-26T06:10:59.380555Z Finished
2025-07-26T06:11:00.351432Z Checking for configuration in a Wrangler configuration file (BETA)
2025-07-26T06:11:00.35207Z
2025-07-26T06:11:01.455073Z No wrangler.toml file found. Continuing.
2025-07-26T06:11:01.455848Z Note: No functions dir at /functions found. Skipping.
2025-07-26T06:11:01.455989Z Validating asset output directory
2025-07-26T06:11:02.680445Z
2025-07-26T06:11:02.789375Z [31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mError: Pages only supports files up to 25 MiB in size[0m
2025-07-26T06:11:02.789689Z
2025-07-26T06:11:02.789957Z cache/webpack/client-production/0.pack is 38.1 MiB in size
2025-07-26T06:11:02.790225Z
2025-07-26T06:11:02.790441Z
2025-07-26T06:11:03.762335Z 🪵 Logs were written to "/root/.config/.wrangler/logs/wrangler-2025-07-26_06-11-02_306.log"
2025-07-26T06:11:03.776561Z Failed to validate assets in the output directory with code: 1
2025-07-26T06:11:04.907299Z Failed: error occurred while validating assets in your output directory. Check the logs above for more information.
