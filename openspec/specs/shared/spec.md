# Shared Specification

## Purpose

定义官网的共享站点外壳、路由行为、国际化、通用联系信息、移动端图片交互限制，以及静态构建与部署约束。

## Requirements

### Requirement: 应用外壳与路由结构

系统 SHALL 作为单页应用提供固定头部、页面内容区和固定页脚，并支持首页、关于我们、服务项目、联系我们四个路由页面。

#### Scenario: 访问站点任一路由

WHEN 用户访问 `/`、`/about`、`/services` 或 `/contact`
THEN 页面顶部显示统一头部导航
AND 当前路由对应的页面组件显示在头部与页脚之间
AND 页面底部显示统一页脚

#### Scenario: 浏览器前进或后退

WHEN 用户通过浏览器历史记录前进或后退
THEN 路由滚动位置使用浏览器保存的位置

#### Scenario: 常规路由切换

WHEN 用户通过站内导航切换页面
THEN 页面滚动位置回到顶部

### Requirement: 共享导航与语言切换

系统 SHALL 在头部提供四个站内导航入口、桌面与移动端两套导航呈现方式，以及中英文语言切换能力。

#### Scenario: 桌面端显示导航

WHEN 视口宽度大于 `768px`
THEN 头部显示桌面导航
AND 导航项包含首页、关于我们、服务项目、联系我们
AND 当前路由对应的导航项显示激活态

#### Scenario: 移动端显示折叠菜单

WHEN 视口宽度小于或等于 `768px`
THEN 桌面导航隐藏
AND 头部显示菜单切换按钮
AND 用户点击按钮后可展开或收起移动端导航菜单
AND 用户点击移动端导航项后菜单关闭

#### Scenario: 切换站点语言

WHEN 用户在语言下拉菜单中选择 `zh-CN` 或 `en-US`
THEN 站点文案切换到对应语言
AND 选中的语言代码写入 `localStorage.locale`
AND 页面刷新后沿用已保存的语言设置

### Requirement: 共享页脚联系信息

系统 SHALL 在所有页面底部展示联系人、电话和邮箱，并为电话和邮箱提供可点击链接。

#### Scenario: 渲染页脚联系信息

WHEN 任意页面加载完成
THEN 页脚显示联系人标签与联系人名称
AND 显示电话标签与电话链接
AND 显示邮箱标签与邮箱链接
AND 显示版权文案

#### Scenario: 生成电话拨号链接

WHEN 页脚渲染电话链接
THEN 系统从国际化文案中读取电话号码
AND 去除号码中的空格后生成 `tel:` 链接

### Requirement: 页面缓存与联系我们页面清理

系统 SHALL 缓存四个一级页面组件，以减少重复切换时的重新创建，并在离开联系我们页面时清理其对 `body` 的样式标记。

#### Scenario: 缓存一级页面

WHEN 用户在首页、关于我们、服务项目、联系我们之间切换
THEN `Home`、`About`、`Services`、`Contact` 组件通过 `keep-alive` 保持缓存

#### Scenario: 离开联系我们页面

WHEN 当前路由从 `Contact` 切换到其他页面
THEN `body` 上的 `contact-page-active` 类名被移除

### Requirement: 移动端图片交互限制

系统 SHALL 在移动端环境限制站内图片的点击、长按、触摸与选择交互，包括动态插入的图片节点。

#### Scenario: 移动端访问站点

WHEN 视口宽度小于或等于 `768px`
OR 用户代理匹配移动设备
THEN 系统对图片元素拦截 `click`、`contextmenu`、`touchstart`、`touchmove`、`touchend`、`touchcancel` 和 `selectstart`
AND 图片默认不响应点击或长按查看行为

#### Scenario: 动态新增图片

WHEN 页面运行期间有新的图片节点被插入到文档中
THEN 系统通过 `MutationObserver` 为新增图片补充禁用交互的内联样式

### Requirement: 静态构建与部署约束

系统 SHALL 支持基于 Vite 的静态构建和基于 Nginx 的单页应用部署。

#### Scenario: 本地开发启动

WHEN 开发者执行 `npm run dev`
THEN Vite 开发服务器监听 `3000` 端口
AND 浏览器自动打开站点

#### Scenario: 生产构建输出

WHEN 开发者执行 `npm run build`
THEN 产物输出到 `dist/`
AND 静态资源输出到 `dist/assets/`
AND 站点资源路径基于根路径 `/`

#### Scenario: Nginx 提供前端路由回退

WHEN 用户直接访问 `/about`、`/services` 或 `/contact`
THEN Nginx 通过 `try_files $uri $uri/ /index.html;` 回退到 `index.html`
AND 前端路由接管页面渲染

#### Scenario: Nginx 缓存静态资源

WHEN Nginx 提供 `.js`、`.css`、图片或字体资源
THEN 为这些资源设置长期缓存头
AND 对 `/images/` 资源额外开放跨域访问响应头
