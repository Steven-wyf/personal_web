# 个人网站项目框架

这个目录结构模仿现代 React + Vite 的个人作品站点，将页面模块、可复用组件、样式与配置拆分成独立文件，方便后续填充内容与扩展功能。

## 目录速览

```
.
├── index.html              # Vite 入口模板
├── package.json            # 项目依赖与脚本
├── public/                 # 静态资源（部署时直接拷贝）
│   └── favicon.svg
├── src/
│   ├── App.jsx             # 页面路由与模块拼装
│   ├── main.jsx            # React 入口
│   ├── components/         # 可复用组件
│   │   ├── common/
│   │   └── layout/
│   ├── data/               # 导航、项目等结构化数据
│   ├── hooks/              # 自定义 Hook
│   ├── sections/           # 页面各主题区块
│   └── styles/             # 全局样式与设计变量
└── vite.config.js          # 构建配置
```

填充内容时可以从 `src/data` 开始准备数据，再在 `src/sections` 中实现具体展示逻辑。若需要新增模块，保持同样的分区方式即可。

## 本地开发环境

推荐使用 `nvm` 管理 Node 版本，仓库自带 `.nvmrc` 指定 `18.20.5`：

```bash
nvm install
nvm use
```

随后安装依赖：

```bash
npm install
```

### 启动前端 + 短信服务

联系表单会调用后端将信息通过短信转发到你的手机。先复制环境变量模板并填写 Twilio 与收件号码：

```bash
cp .env.example .env
# 按照注释填写 TWILIO_* 与 TARGET_PHONE_NUMBER
```

开发阶段可以使用以下命令同时启动 Vite 与短信服务端：

```bash
npm run dev:full
```

如只需运行前端，可执行：

```bash
npm run dev
```

短信服务单独运行的脚本：

```bash
npm run server
```

> **提示**：短信转发依赖 Twilio 账号，请确保在 `.env` 中配置了 `TWILIO_ACCOUNT_SID`、`TWILIO_AUTH_TOKEN`、`TWILIO_PHONE_NUMBER` 和 `TARGET_PHONE_NUMBER`。生产部署时请自行保护这些敏感变量，并为 API 配置 HTTPS 与访问控制。
