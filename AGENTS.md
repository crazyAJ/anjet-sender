# 项目协作说明

## 语言与编码

- 全程使用中文。
- 修改文档与源码时避免乱码，优先保持 UTF-8 编码。

## 项目定位

- 本项目是北京安杰信达国际物流有限公司官网前端。
- 技术栈：Vue 3、Vue Router、Vue I18n、Element Plus、Vite、Nginx 静态部署。
- 当前系统以静态内容展示为主，不包含后端接口、登录态或表单提交流程。

## OpenSpec 基线

- 主规格位于 `openspec/specs/`。
- 当前已落地的主规格：
  - `shared`
  - `home`
  - `about`
  - `services`
  - `contact`
- 在讨论、实现或评审功能时，以上主规格是当前行为基线。

## 当前实现约束

- 站点为单页应用，一级路由包括 `/`、`/about`、`/services`、`/contact`。
- 共享头部、页脚、语言切换和 `keep-alive` 页面缓存属于跨页面能力。
- 移动端存在全局图片交互限制逻辑，不要在未评估影响前随意移除。
- 联系我们页面在移动端依赖 `body.contact-page-active` 覆盖页脚样式。
- 部署依赖 Vite 构建产物与 Nginx 的 SPA 路由回退。

## 推荐工作流

### 1. 只做现状理解

- 优先阅读：
  - `openspec/project.md`
  - `openspec/specs/shared/spec.md`
  - 目标页面对应的 `openspec/specs/<capability>/spec.md`

### 2. 新需求或行为修改

- 先用 OPSX 创建变更，不要直接改主规格：
  - `/opsx:new <change-name>`
  - 或 `/opsx:explore`
- 在 `openspec/changes/<change-name>/` 中完成 proposal、specs、design、tasks。

### 3. 实施变更

- 按任务清单实现：
  - `/opsx:apply <change-name>`
- 实施时必须同时检查：
  - 目标页面组件
  - `src/i18n/locales/zh-CN.json`
  - `src/i18n/locales/en-US.json`
  - 如涉及共享行为，再检查 `src/main.js`、`src/router/index.js`、`src/App.vue`

### 4. 实施后核对

- 先验证实现与变更一致：
  - `/opsx:verify <change-name>`
- 如变更中的 spec 已成为当前事实，再同步到主规格：
  - `/opsx:sync <change-name>`
- 确认完成后归档：
  - `/opsx:archive <change-name>`

## 文档更新规则

- 当前行为变化时，优先更新变更中的增量 spec，再决定是否同步到主规格。
- 不要把 README 的宣传性表述直接当成事实来源。
- 主规格只记录当前代码和可验证配置已经实现的能力。

## 本项目常见改动点

- 页面结构：`src/views/*.vue`
- 共享头尾：`src/components/Header.vue`、`src/components/Footer.vue`
- 路由：`src/router/index.js`
- 国际化：`src/i18n/index.js`、`src/i18n/locales/*.json`
- 入口与移动端图片限制：`src/main.js`
- 构建：`vite.config.js`
- 部署：`nginx.conf`
