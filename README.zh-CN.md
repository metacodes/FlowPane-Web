# FlowPane

> 在窗口之间，自由流动。

FlowPane 是一款简单、快速、优雅的 macOS 窗口切换工具。它把打开的窗口整理成紧凑列表或预览网格，让你不用在多个应用和桌面之间寻找窗口。

[English](README.md) · [访问官网](https://metacodes.github.io/FlowPane-Web/) · [下载最新版本](https://github.com/metacodes/FlowPane-Web/releases/latest) · [查看所有版本](https://github.com/metacodes/FlowPane-Web/releases)

![FlowPane 预览网格](assets/images/preview-grid.webp)

## 核心特点

### 紧凑列表

用窗口标题和应用图标快速浏览所有窗口。列表信息密度高，适合键盘操作，也不会遮挡太多桌面内容。

![FlowPane 紧凑列表](assets/images/compact-list.webp)

### 预览网格

需要识别画面时，直接打开预览网格。窗口缩略图在本地生成，适合从多个相似窗口中快速找到目标。

![FlowPane 预览网格](assets/images/preview-grid.webp)

### 三种进入方式

| 快捷键 | 模式 |
| --- | --- |
| <kbd>⌘ Tab</kbd> | 紧凑列表 |
| <kbd>⌥ Tab</kbd> | 预览网格 |
| <kbd>⌘</kbd> + 反引号 | 当前应用的所有窗口 |

选择最适合当前任务的节奏：快速确认标题，或直接识别窗口画面。

### 清晰的权限边界

FlowPane 只请求切换体验真正需要的 macOS 权限：

- 辅助功能：仅用于将你选中的真实窗口聚焦并置前。
- 屏幕录制：仅用于在本地创建预览网格缩略图。
- 窗口预览不会上传，紧凑列表无需屏幕录制权限。

![FlowPane 权限设置](assets/images/settings.jpg)

## 系统要求

- macOS 14 或更高版本
- Apple Silicon 或 Intel Mac

## 下载与更新

- [下载最新 DMG/ZIP](https://github.com/metacodes/FlowPane-Web/releases/latest)
- [浏览所有版本](https://github.com/metacodes/FlowPane-Web/releases)
- [Sparkle 更新源](https://metacodes.github.io/FlowPane-Web/appcast.xml)

## 隐私

FlowPane 是本地优先的 macOS 工具。窗口预览只在你的 Mac 上处理，官网也不使用分析统计、广告、Cookie、账户或远程翻译服务。

完整说明：[隐私页面](https://metacodes.github.io/FlowPane-Web/privacy.html)

## 关于这个仓库

这是 FlowPane 的产品官网与公开版本下载仓库，不包含 FlowPane 应用源代码。FlowPane 是专有软件，DMG/ZIP 版本通过 GitHub Releases 发布。

## 许可

FlowPane 应用及其品牌、图标和产品素材归作者所有。除非另有说明，本仓库中的网站内容仅用于展示 FlowPane 产品，不授予再分发应用或素材的许可。
