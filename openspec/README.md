# OpenSpec 使用说明

## 目的

本目录用于维护当前项目的行为基线和后续变更记录。主规格描述“系统现在是什么”，变更目录描述“接下来准备改什么”。

## 目录结构

```text
openspec/
├── project.md
├── README.md
├── changes/
│   └── archive/
└── specs/
    ├── shared/
    │   └── spec.md
    ├── home/
    │   └── spec.md
    ├── about/
    │   └── spec.md
    ├── services/
    │   └── spec.md
    └── contact/
        └── spec.md
```

## 当前主规格映射

- `shared`
  - 站点外壳
  - 路由行为
  - 导航与语言切换
  - 页脚联系信息
  - 页面缓存
  - 移动端图片交互限制
  - 构建与部署约束
- `home`
  - 首页首屏、公司介绍、服务摘要、优势说明、移动端布局
- `about`
  - 关于我们首屏、主营业务标题区、图文交错内容区
- `services`
  - 服务项目首屏、四类服务详情、桌面端交错布局、移动端重排
- `contact`
  - 联系主区域、电话与邮箱快捷入口、移动端页脚样式覆盖

## 本项目推荐的 OPSX 节奏

### 1. 理解现状

先读：

- `openspec/project.md`
- `openspec/specs/shared/spec.md`
- 目标能力对应的 `openspec/specs/<capability>/spec.md`

### 2. 创建变更

当需要新增功能、修复行为偏差或修改页面文案结构时：

```bash
/opsx:new <change-name>
```

如果需求还不清楚，先用：

```bash
/opsx:explore
```

### 3. 补齐变更工件

在 `openspec/changes/<change-name>/` 下逐步完成：

- `proposal.md`
- `specs/.../spec.md`
- `design.md`
- `tasks.md`

### 4. 实施与校验

```bash
/opsx:apply <change-name>
/opsx:verify <change-name>
```

### 5. 同步与归档

当变更已成为当前事实后：

```bash
/opsx:sync <change-name>
/opsx:archive <change-name>
```

## 写规格时的项目约束

- 规格以当前代码与可验证配置为准。
- 页面相关改动通常同时涉及中英文文案文件。
- 共享能力改动要额外检查：
  - `src/main.js`
  - `src/router/index.js`
  - `src/App.vue`
  - `src/components/Header.vue`
  - `src/components/Footer.vue`
- 部署相关行为以 `vite.config.js` 和 `nginx.conf` 为准。

## 已完成的基线工作

- 已根据当前项目实现建立主规格。
- 已通过：

```bash
openspec validate --specs
```
