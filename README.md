# 北京安杰信达国际物流有限公司 - 官方网站

基于 Vue 3 + Element Plus 构建的响应式企业官网（单页应用）。

## 功能特性

- ✅ Vue 3 + Composition API
- ✅ Element Plus UI 组件库
- ✅ Vue I18n 国际化（中文/英文）
- ✅ 响应式设计（PC + 移动端）
- ✅ 单页应用，简洁高效

## 技术栈

- **框架**: Vue 3
- **构建工具**: Vite
- **UI 库**: Element Plus
- **路由**: Vue Router（单页）
- **国际化**: Vue I18n
- **图标**: Element Plus Icons

## 项目结构

```
anjet-sender/
├── public/
│   └── images/          # 静态图片资源
├── src/
│   ├── components/      # 公共组件
│   │   ├── Header.vue
│   │   └── Footer.vue
│   ├── i18n/           # 国际化配置
│   │   ├── index.js
│   │   └── locales/
│   │       ├── zh-CN.json
│   │       └── en-US.json
│   ├── router/         # 路由配置
│   │   └── index.js
│   ├── views/          # 页面组件
│   │   └── Home.vue
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
└── vite.config.js
```

## 安装和运行

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 国际化

项目支持中英文切换，所有文字内容都配置在 `src/i18n/locales/` 目录下：

- `zh-CN.json`: 简体中文
- `en-US.json`: 英文

语言选择会自动保存到 localStorage。

## 响应式设计

项目采用响应式设计，支持：

- **PC 端**: 桌面浏览器（≥768px）
- **移动端**: 手机和平板（<768px）

## 图片资源

静态图片存放在 `public/images/` 目录下。

## 许可证

Copyright © 2022, NetEase Zhuyou(and its affiliates as applicable). All Rights Reserved.