# 🔖 Omni 搜 - 您的浏览器第二大脑

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🚀 **Omni 搜** 旨在重塑你的浏览体验。只需按下 `Ctrl/⌘ + K`，即可瞬间唤起强大的命令面板。利用 `Fuse.js` 驱动的本地模糊检索，毫秒级直达你的 书签、标签页。
我们深知 `书签洁癖` 用户的痛苦，因此独创了 **收藏** 功能——你可以随意保存临时网页，而 **绝不污染** 你精心整理的原生书签库。

## ✨ 功能特性

- ⚡ **极速启动** - 在浏览器的任何页面中，通过 `Ctrl/⌘ + K` 一键唤起，键盘流操作，双手不离键盘。或者点击扩展图标唤起。（如遇到快捷键失效的情况，请查看 [为什么快捷键不生效？](https://github.com/llxq/omni-search-chrome?tab=readme-ov-file#-%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)）
- 🛡️ **隐私至上** - **零数据收集**。所有搜索、索引、存储完全在本地离线运行。
- 🔍 **智能匹配** - 基于 `Fuse.js`，支持`标题`、`URL`、`书签文件夹路径`的模糊匹配与正则搜索。
- 🧩 **多源聚合** - 同时搜索 `书签`、`已打开标签页`、未命中时自动回退至默认搜索引擎。
- 📂 **文件夹层级** - 使用 `/` 分隔符搜索多级文件夹结构。（如：`/js/` 会搜索书签 `js` 目录下的所有书签。）
- ⏱️ **历史记录** - 自动保存最近访问的 10 条记录
- ⚙️ **高度可定制** - 可配置的搜索规则和快捷键
- 📝 **收藏管理** - 添加任何网站到收藏列表，不污染主书签数据，收藏数据会持久保存在插件内部

## 🚀 快速开始

### 安装方法

#### 方法一：从源码安装（推荐开发者）

```bash
# 克隆仓库，当然您也可以使用 ssh 下载。[git@github.com:llxq/omni-search-chrome.git]
git clone https://github.com/llxq/omni-search-chrome.git
cd omni-search-chrome

# 安装依赖
npm install

# 构建扩展
npm run build

# 加载扩展
1. 打开 Chrome 扩展页面 (chrome://extensions/)
2. 启用"开发者模式"
3. 点击"加载已解压的扩展程序"
4. 选择项目中的 `dist` 文件夹，（或者直接将 `dist` 目录拖动到浏览器中即可）
```

#### 方法二：直接加载（普通用户）

1. 下载最新的 [Release](https://github.com/llxq/omni-search-chrome/releases)
2. 解压下载的文件
3. 按照上述步骤 3-4 加载扩展

#### 🔔 安装参考

<img width="1920" height="934" alt="image" src="https://github.com/user-attachments/assets/a00a2cc8-75f9-4501-8125-fca9444baa97" />
- 点击固定，可以将插件固定在扩展部分，方便使用，可以直接点击插件图标唤起搜索界面。
<img width="320" height="110" alt="image" src="https://github.com/user-attachments/assets/60261aa6-fd74-41e3-ad68-ebfb824adde9" />

## 🎯 使用指南

### 基本操作

- **打开搜索**：`Ctrl + K` (Windows/Linux) 或 `⌘ + K` (Mac)，或者直接点击插件图标
- **导航**：使用 `↑/↓` 方向键选择结果
- **打开**：`Enter` 在新标签页打开选中的书签
- **关闭**：`Esc` 或点击搜索框外部
- **添加到 Omni收藏**：在任意网页上点击右键，选择"添加到 Omni收藏"，即可将当前网站加入到搜索列表中，并且不会污染您浏览器的书签数据

### ⚙️ 设置选项

点击扩展图标打开设置页面，您可以：

- 自定义调整搜索匹配规则
- 修改主题
- 自定义搜索功能

### 📌 收藏管理

收藏功能允许您将当前浏览的网页快速保存为收藏数据，这些收藏数据会保存在扩展的独立存储中，**不会影响您的浏览器书签**。并且可以通过搜索打开这些收藏数据。

#### 使用方法

1. **添加收藏**：
    - 在任意网页上点击右键
    - 选择"添加到 Omni收藏"
    - 根据自己的需求选择是否需要自定义标题，还是默认用当前网站标题加入到搜索列表中。
      ![添加到 Omni收藏](https://github.com/user-attachments/assets/bdf38818-300e-4b03-9cc8-1edcd48dc482)
    - 您还可以自定义名称，点击 `添加到 Omni收藏 / 自定义名称添加`，修改为您想要的名称然后保存即可。（注意：搜索时是根据您设置的名称来搜索的）
      <img width="280" height="176" alt="image" src="https://github.com/user-attachments/assets/68bb4200-c6f8-422f-a31c-bd2edb146389" />

2. **管理收藏**：
    - 点击扩展图标打开主界面 或者通过快捷键：`Ctrl + K` (Windows/Linux) 或 `⌘ + K` (Mac)
    - 切换到"收藏管理"标签页
    - 查看所有已保存的收藏数据
    - 点击"删除"可移除不需要的收藏数据
    - 点击"编辑"可重新编辑收藏数据名称
      <img width="600" height="161" alt="image" src="https://github.com/user-attachments/assets/7371be68-5d61-4c88-abfb-e62eb40bb036" />

3. **搜索收藏**：
    - 在搜索框中输入关键词
    - 收藏会与普通书签一起显示在搜索结果中，收藏会有tag标识
      <img width="600" height="241" alt="image" src="https://github.com/user-attachments/assets/548f5b2c-749a-4b43-96ee-224b22aa8d1e" />

4. **对于禁用了右键功能的网站**：
    - 您可以通过快捷键 `Ctrl + Shift + K` 打开保存窗口保存即可。

## 🔧 开发指南

### 项目结构

```
omni-seek/
├── dist/                    # 构建输出目录
│   └── *                    # 编译后的文件
├── public/                  # 静态资源
│   ├── icons/               # 扩展图标
│   ├── manifest.json        # 扩展配置文件
│   └── popup.html           # 弹出窗口 HTML
├── src/                     # 源代码
│   ├── assets/              # 静态资源与样式
│   │   └── styles/          # 全局样式
│   ├── components/          # 通用 React 组件
│   │   ├── checkbox/        # 复选框组件
│   │   ├── form-item/       # 表单项组件
│   │   ├── radio/           # 单选框组件
│   │   └── search-input/    # 搜索输入组件
│   ├── shared/              # 共享工具、存储与配置
│   ├── types/               # TypeScript 类型定义
│   └── views/               # 业务视图
│       ├── layout/          # 公共布局
│       ├── search/          # 搜索主界面
│       │   └── hooks/       # 搜索相关 Hooks
│       ├── setting/         # 设置页面
│       ├── add-collect/     # 添加收藏弹窗
│       └── collect-management/ # 收藏管理页面
├── .gitignore                # Git 忽略配置
├── package.json              # 项目配置
├── tsconfig.json             # TypeScript 配置
├── tsconfig.node.json        # Node 环境配置
├── tsconfig.app.json         # 应用配置
└── vite.config.ts            # Vite 构建配置
```

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

欢迎提交 [Issues](https://github.com/llxq/omni-seek/issues) 和 [Pull Requests](https://github.com/llxq/omni-seek/pulls)！请确保：

1. 代码符合项目代码风格
2. 提交信息清晰明确
3. 包含相关的测试

## ❓ 常见问题

<details>
  <summary>为什么快捷键不生效？</summary>
  可能是与其他扩展或应用程序的快捷键冲突。请访问 `chrome://extensions/shortcuts` 修改扩展的快捷键。可以重新设置快捷键，重新设置为 `Ctrl/⌘ + K` 或者您想要的快捷键即可激活。
 <img width="1920" height="335" alt="image" src="https://github.com/user-attachments/assets/3f7fab17-3bd8-4a93-aa35-3ea39059dd97" />

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
- `notifications` - 消息通知
- `contextMenus` - 添加右键菜单

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE)

---

<p align="center">
  Made with ❤️ by llxq
</p>
