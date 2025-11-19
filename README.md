# 北京安杰信达国际物流有限公司 - 官方网站

基于 Vue 3 + Element Plus 构建的现代化响应式企业官网，支持中英文双语切换。

## 📋 项目简介

这是一个为北京安杰信达国际物流有限公司打造的企业官方网站，采用单页应用（SPA）架构，提供流畅的用户体验和现代化的界面设计。

## ✨ 功能特性

- ✅ **Vue 3 + Composition API** - 使用最新的 Vue 3 组合式 API
- ✅ **Element Plus UI 组件库** - 丰富的 UI 组件和图标
- ✅ **Vue I18n 国际化** - 支持中文/英文双语切换
- ✅ **响应式设计** - 完美适配 PC 端和移动端
- ✅ **单页应用（SPA）** - 流畅的页面切换体验
- ✅ **路由缓存** - 使用 keep-alive 优化性能
- ✅ **移动端优化** - 针对移动设备进行特殊优化

## 🛠️ 技术栈

- **框架**: Vue 3.4.0
- **构建工具**: Vite 5.0
- **UI 库**: Element Plus 2.5.0
- **路由**: Vue Router 4.2.5
- **国际化**: Vue I18n 9.8.0
- **图标**: Element Plus Icons Vue 2.3.1

## 📁 项目结构

```
anjet-sender/
├── public/                    # 静态资源目录
│   └── images/               # 图片资源
│       ├── about/            # 关于我们页面图片
│       ├── contact/          # 联系我们页面图片
│       ├── home/             # 首页图片
│       ├── services/         # 服务项目页面图片
│       └── logo.jpg          # Logo
├── src/
│   ├── components/           # 公共组件
│   │   ├── Header.vue        # 头部导航组件
│   │   └── Footer.vue        # 页脚组件
│   ├── i18n/                # 国际化配置
│   │   ├── index.js          # i18n 初始化
│   │   └── locales/         # 语言包
│   │       ├── zh-CN.json    # 简体中文
│   │       └── en-US.json    # 英文
│   ├── router/              # 路由配置
│   │   └── index.js          # 路由定义
│   ├── views/                # 页面组件
│   │   ├── Home.vue          # 首页
│   │   ├── About.vue         # 关于我们
│   │   ├── Services.vue      # 服务项目
│   │   └── Contact.vue      # 联系我们
│   ├── App.vue               # 根组件
│   ├── main.js               # 入口文件
│   └── style.css             # 全局样式
├── index.html                 # HTML 模板
├── package.json              # 项目配置
├── vite.config.js            # Vite 配置
├── nginx.conf                # Nginx 配置示例
├── DEPLOY.md                 # 部署指南
└── README.md                 # 项目说明
```

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0 或 yarn >= 1.22.0

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

开发服务器将在 `http://localhost:3000` 启动，并自动在浏览器中打开。

### 构建生产版本

```bash
npm run build
```

构建完成后，所有文件将输出到 `dist/` 目录。

### 预览生产构建

```bash
npm run preview
```

用于本地预览生产构建结果。

## 📄 页面说明

### 首页 (Home)
- 公司 Hero 横幅
- 公司介绍
- 三大服务展示（国际快递、清关、运输）
- 企业优势展示

### 关于我们 (About)
- 公司主营业务介绍
- 服务内容详细说明
- 公司理念展示

### 服务项目 (Services)
- 进出口运输服务
- 进出口清关服务
- 国际快递发运服务
- 国内运输服务

### 联系我们 (Contact)
- 联系方式展示
- 电话和邮箱快捷按钮
- 移动端优化布局

## 🌐 国际化

项目支持中英文双语切换，所有文本内容都配置在 `src/i18n/locales/` 目录下：

- `zh-CN.json`: 简体中文语言包
- `en-US.json`: 英文语言包

### 语言切换

用户可以通过页面右上角的语言选择器切换语言，选择会自动保存到 `localStorage`，下次访问时会自动应用。

### 添加新语言

1. 在 `src/i18n/locales/` 目录下创建新的语言文件（如 `ja-JP.json`）
2. 在 `src/i18n/index.js` 中导入并添加到 messages
3. 在 `src/components/Header.vue` 中添加语言选项

## 📱 响应式设计

项目采用移动优先的响应式设计策略：

- **桌面端** (≥768px): 完整布局，多列展示
- **移动端** (<768px): 单列布局，优化触摸交互

## 📦 部署

详细的部署指南请参考 [DEPLOY.md](./DEPLOY.md)

### 快速部署步骤

1. **构建项目**
   ```bash
   npm run build
   ```

2. **上传文件**
   将 `dist/` 目录下的所有文件上传到服务器

3. **配置 Nginx**
   参考 `nginx.conf` 配置文件，确保支持 SPA 路由

4. **配置 HTTPS**（推荐）
   使用 Let's Encrypt 免费证书

## 📝 更新日志

### v1.0.0 (2024)
- ✅ 初始版本发布
- ✅ 支持中英文双语
- ✅ 响应式设计
- ✅ 四个主要页面（首页、关于我们、服务项目、联系我们）

## 📄 许可证

Copyright © 2024 Beijing Anjet-Sender International Logistics Co., Ltd. All Rights Reserved.

## 📞 联系方式

- **公司**: 北京安杰信达国际物流有限公司
- **联系人**: Tony
- **电话**: +86 13141314088
- **邮箱**: admin@anjet-sender.com