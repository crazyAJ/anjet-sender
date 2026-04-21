# Contact Specification

## Purpose

定义联系我们页面当前已实现的欢迎文案、电话与邮箱快捷入口、移动端页脚样式覆盖，以及相关生命周期清理行为。

## Requirements

### Requirement: 联系页面主体展示

系统 SHALL 在联系我们页面展示带重复背景图的联系主区域、欢迎文案和两个联系动作按钮。

#### Scenario: 访问联系我们页面

WHEN 用户访问 `/contact`
THEN 页面在固定头部下方显示联系主区域
AND 主区域使用重复背景图
AND 中央显示欢迎标题
AND 在中文模式下显示英文副标题

#### Scenario: 英文模式文本适配

WHEN 当前语言为 `en-US`
THEN 页面根节点带有 `lang-en` 类名
AND 欢迎标题与按钮区域使用英文版字号与布局细化样式

### Requirement: 电话与邮箱快捷入口

系统 SHALL 提供电话和邮箱两个可点击动作按钮，并根据语言显示不同按钮文案。

#### Scenario: 点击电话按钮

WHEN 用户点击电话按钮
THEN 链接使用 `tel:` 协议
AND 电话号码来自共享国际化文案
AND 拨号链接中的号码不包含空格

#### Scenario: 点击邮箱按钮

WHEN 用户点击邮箱按钮
THEN 链接使用 `mailto:` 协议
AND 邮箱地址来自共享国际化文案

#### Scenario: 根据语言显示按钮文案

WHEN 当前语言不是 `en-US`
THEN 电话按钮显示中文文案
AND 邮箱按钮显示中文文案

WHEN 当前语言为 `en-US`
THEN 电话按钮显示英文文案
AND 邮箱按钮显示英文文案

### Requirement: 按钮交互反馈

系统 SHALL 为联系按钮提供悬浮反馈和图标化表达。

#### Scenario: 悬浮电话按钮

WHEN 指针悬浮在电话按钮上
THEN 按钮上移
AND 显示绿色阴影反馈

#### Scenario: 悬浮邮箱按钮

WHEN 指针悬浮在邮箱按钮上
THEN 按钮上移
AND 显示蓝色阴影反馈

### Requirement: 移动端页脚样式覆盖

系统 SHALL 在移动端联系我们页面激活时，通过 `body` 类名覆盖共享页脚的上边距。

#### Scenario: 移动端进入联系我们页面

WHEN 视口宽度小于或等于 `768px`
AND 当前路由名称为 `Contact`
THEN `body` 添加 `contact-page-active` 类名
AND 页脚上边距被覆盖为 `0`

#### Scenario: 离开联系我们页面或停用组件

WHEN 联系我们页面被停用、卸载或切换到其他路由
THEN `body` 上的 `contact-page-active` 类名被移除
AND 页面解绑与该类名更新逻辑相关的窗口尺寸监听

### Requirement: 联系页移动端收敛布局

系统 SHALL 在移动端收敛欢迎区和按钮区的尺寸，以适配窄屏设备。

#### Scenario: 移动端访问联系页

WHEN 视口宽度小于或等于 `768px`
THEN 欢迎标题字号缩小
AND 中文副标题隐藏
AND 英文副标题可显示为较小字号
AND 按钮文字区域隐藏，仅保留更大的按钮图标作为主要识别方式
