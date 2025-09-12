# bookmark-search
这是一个 `Chroma` 插件，可以按住 `Ctrl/Command + B` 进行搜索您的书签，并且点击/回车打开您的书签。支持书签名称/URL/文件夹搜索。多层级文件夹使用 `/` 分割。如：`文件夹1/文件夹2/标签1`

# 设置
1. 点击扩展程序图标即可打开设置页面。您可根据自己的搜索习惯设置搜索规则
![image](https://github.com/user-attachments/assets/95c71f4b-6058-4e09-a3b0-93bd32c9b645)
2. 通过快捷键 `Ctrl/Command + K` 可快速打开设置页面


# 使用
1. 下载项目到本地
    ```shell
    git clone https://github.com/llxq/bookmark-search.git
    ```
2. 如果想要自定义内容，可自行打包，如果不想自定义，可直接跳过本步骤
    ```shelll
    npm run build
    # 把打包好的 dist 文件夹 拖动到 扩展内部
    ```
3. 打开地址：[扩展程序](chrome://extensions/)。
4. 将 `dist 文件夹` 拖动到 扩展内部，类似如图
![image](https://github.com/user-attachments/assets/37e3c920-8ba5-4df6-9f64-00955dfffeb5)
- 在非浏览器自定义页面（如：设置页面，扩展程序页面）按下快捷键即可打开搜索。
  - Windows
    - Ctrl + B
  - Mac
    - Command + B
   [
![image](https://github.com/user-attachments/assets/1934a555-8123-4ad5-a72e-e303c156d108)


# 搜索结果展示
![image](https://github.com/user-attachments/assets/5e29e896-48a7-4d4b-9e43-365fbf3a0257)

# 注意
`第一次安装完之后原来曾经打开过的浏览器标签页使用需要刷新页面才能使用。新打开的正常使用即可。`
