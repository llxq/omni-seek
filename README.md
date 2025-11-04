# bookmark-search 插件
`Bookmarks Search` 是一个基于 `Chrome` 的书签搜索扩展程序，可帮助用户在浏览器中快速查找并打开已保存的书签 。安装后，只需按下快捷键 `Ctrl+K（Mac 上为 Command+K）`，即可弹出搜索框，在其中输入关键词来实时搜索书签。插件支持使用 `上/下方向键` 选择搜索结果，并按 `回车` 在新标签页打开所选书签。 此外，插件支持按层级搜索文件夹：在查询中使用 `/` 分隔多级文件夹路径，如 `文件夹1/文件夹2/书签名`。插件通过调用 Chrome 提供的 bookmarks 相关 API 来匹配书签节点，实现了对书签 `标题`、`URL` 及 `父文件夹名称` 的模糊搜索 。通过这些功能，`Bookmarks Search` 目标是让大量书签变得易于检索，提高浏览效率。

# 功能介绍
- __快速搜索书签__：在任何网页中按下 `Ctrl/Command + K` 调出搜索框，输入关键词即可高效检索书签。
- __历史记录__：插件自身会记录最近打开过的 `10条记录`。方便下次打开搜索框能快速打开。
- __自定义搜索规则__：点击扩展图标（或者通过快捷键 `Ctrl/Command + K`）可打开插件设置页，对搜索规则、打开方式等进行自定义配置。
- __使用默认搜索引擎__：当搜索框中未找到匹配书签时，可选择启用默认搜索引擎进行网页搜索，以防漏检重要内容。


# 安装与部署说明
1. 下载项目到本地
    ```shell
    git clone https://github.com/llxq/bookmark-search.git
    ```
2. 如果想要自定义内容，可自行打包，如果不想自定义，可直接跳过本步骤到第`5`步。如需要自定义插件内容需要 Nodejs 环境（版本： 18 / 20+），以及 npm 或其他（pnpm、yarn）包管理器。
    ```shelll
    npm run build
    ```
3. 把打包好的 `dist` 文件夹 拖动到 扩展内部
4. 打开地址：[扩展程序](chrome://extensions/)。
5. 将 `dist 文件夹` 拖动到 扩展内部，成功后会出现对应的扩展程序。
![image](https://github.com/user-attachments/assets/54bf5914-fd7c-4019-ac06-00eaad36be81)

# 注意
`第一次安装完之后原来曾经打开过的浏览器标签页使用需要刷新页面才能使用。新打开的正常使用即可。`

# 使用

1. 在非浏览器自定义页面（如：设置页面，扩展程序页面）按下快捷键即可打开搜索。
  - Windows
    - Ctrl + K
  - Mac
    - Command + K

![image](https://github.com/user-attachments/assets/3cf53211-f0a1-491d-9d83-e7c834ef3c07)


# 搜索结果展示
![image](https://github.com/user-attachments/assets/ecf72fb7-4c33-4ed7-b0c4-1987e9ad4bbb)

# 设置
可以切换tab调整搜索的设置
![image](https://github.com/user-attachments/assets/5dbc1e99-07ff-4f60-9a14-ace17202fd07)



# 常见问题解答 （FAQ）
- __Q: 为什么按下了快捷键还是不会生效？__  <br />A: 这是可能因为该插件的快捷键和其他应用或者插件的快捷键冲突导致。您可尝试打开 `chrome://extensions/shortcuts` 地址，将 `激活该扩展程序` 修改为其他快捷键。
- __Q：为什么有时搜索结果不准确？__  <br />A：可能是搜索规则设置导致的。请打开扩展设置，检查“查找规则”选项，确认启用了您需要的匹配字段（标题、父文件夹标题、URL）。如果书签过多也可能排序导致部分匹配项不明显。您可以输入更精准的关键词组合或在结果列表中上下移动查看。

