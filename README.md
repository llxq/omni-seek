# 🔖 Bookmark Search - Chrome 书签搜索扩展

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`Bookmark Search` 是一款轻量级 `Chrome 扩展`，让您通过 `Ctrl/⌘ + K` 快速搜索和访问书签。它支持模糊搜索、文件夹层级导航、保存搜索历史和高度自定义设置。此外，还提供独特的临时书签管理功能，让您保存网页而不污染主书签列表。

<img width="800" height="600" alt="image" src="https://github.com/user-attachments/assets/34cd2f3b-104b-4221-8095-48dc4059e7b8" />

## ✨ 功能特性

- ⚡ **全局快速搜索** - 在浏览器的任何页面中，使用 `Ctrl/⌘ + K` 快速调出搜索框
- 🔍 **智能匹配** - 支持标题、URL 和父文件夹名称的模糊搜索
- 📂 **文件夹层级** - 使用 `/` 分隔符搜索多级文件夹结构
- ⏱️ **历史记录** - 自动保存最近访问的 10 条记录
- ⚙️ **高度可定制** - 可配置的搜索规则和快捷键
- 🌐 **搜索引擎集成** - 未找到书签时支持使用默认搜索引擎搜索
- 📝 **临时书签管理** - 添加临时书签到独立列表，不污染主书签数据，临时数据会持久保存在插件内部

## 🚀 快速开始

### 安装方法

#### 方法一：从源码安装（推荐开发者）

```bash
# 克隆仓库
git clone https://github.com/llxq/bookmark-search.git
cd bookmark-search

# 安装依赖
npm install

# 构建扩展
npm run build

# 加载扩展
1. 打开 Chrome 扩展页面 (chrome://extensions/)
2. 启用"开发者模式"
3. 点击"加载已解压的扩展程序"
4. 选择项目中的 `dist` 文件夹
```

#### 方法二：直接加载（普通用户）

1. 下载最新的 [Release](https://github.com/llxq/bookmark-search/releases)
2. 解压下载的文件
3. 按照上述步骤 3-4 加载扩展

## 🎯 使用指南

### 基本操作

- **打开搜索**：`Ctrl + K` (Windows/Linux) 或 `⌘ + K` (Mac)
- **导航**：使用 `↑/↓` 方向键选择结果
- **打开**：`Enter` 在新标签页打开选中的书签
- **关闭**：`Esc` 或点击搜索框外部
- **添加快捷书签**：在任意网页上点击右键，选择"添加到书签搜索项"，即可将当前网站加入到书签的搜索列表中，并且不会污染您浏览器的书签数据
- **管理临时书签**：在扩展界面切换到"临时数据"标签页，可查看和删除临时书签

### ⚙️ 设置选项

点击扩展图标打开设置页面，您可以：
- 调整搜索匹配规则
- 自定义快捷键
- 配置搜索引擎集成
- 清除搜索历史

![Settings](https://github.com/user-attachments/assets/5dbc1e99-07ff-4f60-9a14-ace17202fd07)

## 🔧 开发指南

### 项目结构

```
bookmark-search/
├── dist/                  # 构建输出目录
│   └── *                  # 编译后的文件
├── public/                # 静态资源
│   ├── icons/             # 扩展图标
│   ├── manifest.json      # 扩展配置文件
│   └── popup.html         # 弹出窗口HTML
├── src/                   # 源代码
│   ├── shared/            # 共享工具和类型
│   ├── types/             # TypeScript 类型定义
│   └── views/             # React 组件
│       ├── checkbox/      # 复选框组件
│       ├── form-item/     # 表单项组件
│       ├── layout/        # 布局组件
│       ├── popup/         # 弹出窗口组件
│       ├── radio/         # 单选框组件
│       ├── search/        # 搜索功能组件
│       ├── setting/       # 设置页面组件
│       └── temporary-data/ # 临时书签管理
├── .gitignore            # Git 忽略配置
├── package.json          # 项目配置
├── tsconfig.json         # TypeScript 配置
├── tsconfig.node.json    # Node 环境配置
├── tsconfig.app.json     # 应用配置
└── vite.config.ts        # Vite 构建配置
```

## 📌 临时数据功能

### 功能说明

临时数据功能允许您将当前浏览的网页快速保存为临时书签，这些书签会保存在扩展的独立存储中，不会影响您的浏览器书签。并且可以通过搜索打开这些临时书签。

### 使用方法

1. **添加快捷书签**：
   - 在任意网页上点击右键
   - 选择"添加到书签搜索项"
   - 根据自己的需求选择是否需要自定义标题，还是默认用当前网站标题加入到搜索列表中。
   ![添加到书签搜索项](https://github.com/user-attachments/assets/bdf38818-300e-4b03-9cc8-1edcd48dc482)
   - 您还可以自定义名称，点击 `添加到书签搜索项 / 自定义名称添加`，修改为您想要的名称然后保存即可。（注意：搜索时是根据您设置的名称来搜索的）
   ![自定义名称添加](https://github.com/user-attachments/assets/ff743a81-f6ea-44cf-9c33-ba62750de4a4)


2. **管理临时书签**：
   - 点击扩展图标打开主界面
   - 切换到"临时书签"标签页
   - 查看所有已保存的临时书签
   - 点击"删除"可移除不需要的临时书签

3. **搜索临时书签**：
   - 在搜索框中输入关键词
   - 临时书签会与普通书签一起显示在搜索结果中

4. **对于禁用了右键功能的网站**：
   - 您可以通过快捷键 `Ctrl + Shift + K` 打开保存窗口保存即可。 

### 开发命令

```bash
# 开发模式 (热重载)
npm run dev

# 构建生产版本
npm run build

# 代码检查
npm run lint
```

### 贡献指南

欢迎提交 [Issues](https://github.com/llxq/bookmark-search/issues) 和 [Pull Requests](https://github.com/llxq/bookmark-search/pulls)！请确保：

1. 代码符合项目代码风格
2. 提交信息清晰明确
3. 包含相关的测试

## ❓ 常见问题

<details>
  <summary>为什么快捷键不生效？</summary>
  可能是与其他扩展或应用程序的快捷键冲突。请访问 `chrome://extensions/shortcuts` 修改扩展的快捷键。
</details>

<details>
  <summary>为什么有些书签搜索不到？</summary>
  请检查：
  1. 设置中的搜索规则是否包含了相关字段（标题/URL/父文件夹）
  2. 尝试使用更精确的关键词
  3. 确认书签是否存在于当前浏览器的书签中
</details>

## 📝 权限说明

本扩展需要以下权限来提供完整功能：

- `bookmarks` - 读取和管理浏览器书签
- `tabs` - 获取当前标签页信息
- `activeTab` - 与当前活动标签页交互
- `windows` - 管理浏览器窗口
- `history` - 访问浏览历史记录
- `favicon` - 获取网站图标
- `storage` - 保存用户设置和搜索历史
- `search` - 使用默认搜索引擎进行搜索
- `notifications` - 显示操作通知
- `contextMenus` - 添加右键菜单

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE)

---

<p align="center">
  Made with ❤️ by llxq
</p>
