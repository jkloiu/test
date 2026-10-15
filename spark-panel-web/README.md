# 火花守护 · 网页面板前端（v4 壳）

抖音火花守护面板的网页端前端（`console4.html` + `app_v4.js` + `style4.css`），
也是安卓 App「火花守护」WebView 加载的同一套页面（App 不打包前端，远端加载）。

## 文件

| 文件 | 说明 |
| --- | --- |
| `console4.html` | 页面外壳：侧栏 / 顶栏 / 各视图容器 / 登录表单 |
| `app_v4.js` | 全部前端逻辑：`Loaders.<视图>` 渲染、`Actions.*`、`data-click` 事件委托 |
| `style4.css` | 样式：Tailwind v3.4.17 预编译包 + 业务增量块（`[v6]`…`[v15.1]`，只增不重编） |
| `icon-map.json` | Material Symbols 图标名 → 码点映射（`msGlyph()` 消费） |
| `fonts/` | Inter / JetBrains Mono / Material Symbols 的 woff2 + fontface.css |

## 约定

- **版本号**：只改前端才升，一版一号。`console4.html` 里
  `app_v4.js?v=<主版本>` / `style4.css?v=<css 修订>`；静态资源由 nginx 按
  `/static/**` 7 天 immutable 缓存，**改版必须升 `?v=`**，纯后端不升。
- **事件**：CSP 无 `unsafe-inline`，一律 `data-click="Actions.x"` 委托
  （`resolveFn()` 只从 `window` 解析，IIFE 内处理器需逐个 `window.X=X`）。
- **样式**：`style4.css` 的 Tailwind 是预编译的，只含编译时出现过的类；
  新类名必须先 grep 确认存在，否则静默无样式。业务样式只往文件尾部 append。
- **口径**：目标标识一律数字抖音号 sid；昵称只是展示名。

## 部署

部署脚本在本地（含服务器口令，不入库）——先幂等备份 `.bak.v15pre`，
再 SFTP 上传三件套到 `/opt/douyin-preview/data/static/`，回读 md5 校验。

预览站：`http://121.36.38.180:16080/static/console4.html`
