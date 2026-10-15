# 火花守护（DouYinSparkFlow）

抖音火花守护的三端代码已拆分为三个独立仓库：

| 仓库 | 端 | 说明 |
| --- | --- | --- |
| [douyin-spark-panel-web](https://github.com/jkloiu/douyin-spark-panel-web) | 网页面板前端 | `console4.html` + `app_v4.js` + `style4.css`，v4 外壳；安卓 App 以 WebView 同源加载 |
| [douyin-spark-panel](https://github.com/jkloiu/douyin-spark-panel) | 微信小程序 | 五页 + 云函数 `panelApi` 转发面板 API |
| [douyin-sparkflow-app](https://github.com/jkloiu/douyin-sparkflow-app) | 安卓客户端 | 纯 Java WebView 壳 + 通知轮询 + 自更新，自建 aapt2/d8/apksigner 构建链 |

本仓库（`jkloiu/test`）此前用作临时落地库，同样内容也曾以三条分支存在：
`spark-panel-web` / `spark-panel-miniprogram` / `sparkflow-app`。

## 安全说明

- 签名 keystore 与口令**不入库**：`build.py` 读环境变量 `SPARKFLOW_KS_PASS` / `SPARKFLOW_KEY_PASS`，
  keystore 文件本身也已 gitignore。
- 服务器部署脚本（含 SSH 口令）只在本地，不入库。
