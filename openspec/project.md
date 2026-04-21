# 项目上下文

## 概览

本项目是北京安杰信达国际物流有限公司官网，使用 Vue 3 单页应用实现，面向桌面端和移动端提供企业介绍、服务说明与联系方式展示。

当前线上能力以静态站点为主，不包含后端接口、表单提交或用户登录流程。页面内容主要来自本地组件和国际化文案文件，静态图片资源存放在 `public/images/`。

## 技术栈

- Vue 3
- Vue Router 4
- Vue I18n 9
- Element Plus
- Vite 5
- Nginx 静态部署

## 运行方式

- 开发：`npm run dev`
- 构建：`npm run build`
- 预览：`npm run preview`

开发服务器监听 `3000` 端口，并配置为自动打开浏览器。生产构建输出到 `dist/`，静态资源输出到 `dist/assets/`。

## 当前信息架构

- `/`：首页
- `/about`：关于我们
- `/services`：服务项目
- `/contact`：联系我们

所有页面共享固定头部导航和底部页脚，页面内容通过路由切换渲染。

## 内容与国际化

- 默认语言优先读取 `localStorage.locale`
- 当前支持 `zh-CN` 与 `en-US`
- 页面文案来自 `src/i18n/locales/zh-CN.json` 和 `src/i18n/locales/en-US.json`

## 部署约束

- Vite `base` 配置为 `/`
- Nginx 需要将站点根目录指向构建后的 `dist/`
- 由于站点使用前端路由，Nginx 需要通过 `try_files $uri $uri/ /index.html;` 支持 SPA 路由回退
- Nginx 配置中对 JS、CSS、字体和图片启用了静态资源缓存

## 当前已知实现特征

- 顶层应用通过 `keep-alive` 缓存四个页面组件
- 移动端会全局禁用图片点击、长按和触摸交互
- 联系我们页面在移动端通过 `body.contact-page-active` 覆盖页脚上边距
