# 火花守护（DouYinSparkFlow）代码库

三个前端项目。**本仓库是临时落地库**——GitHub 连接器没有建库权限（403），只能推进已有仓库；
后续建议拆成三个独立私有仓库。

| 目录 | 项目 | 说明 |
| --- | --- | --- |
| `spark-panel-web/` | 网页面板前端 | console4.html + app_v4.js + style4.css，v4 壳；安卓 App WebView 同源加载 |
| `spark-panel-miniprogram/` | 微信小程序 | 五页 + 云函数 panelApi 转发面板 |
| `sparkflow-app/` | 安卓客户端 | 纯 Java WebView 壳 + 通知轮询 + 自更新 |

## 为什么有 .gz.b64 / .b64 文件

GitHub 连接器（MCP）只能内联推送文本：推不了二进制，单文件大小也受限。所以：

- `app_v4.js`（376KB）/ `style4.css`（171KB）→ `*.gz.b64`（gzip + base64）
- 字体 woff2、tabBar 图标 png → `assets-b64/*.b64`
- 安卓 mipmap 图标可由 `sparkflow-app/tools/gen_icons.py` 重新生成，未收录

还原真实文件：在仓库根目录执行 `python tools/restore_binaries.py`
（会把所有 `.b64` / `.gz.b64` 解回原路径）。

## 安全说明

- 签名 keystore 与口令**不在仓库里**：`build.py` 已改为读环境变量
  `SPARKFLOW_KS_PASS` / `SPARKFLOW_KEY_PASS`，keystore 文件本身也已 gitignore。
- 服务器部署脚本（含 SSH 口令）只在本地，不入库。
