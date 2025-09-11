export interface IBookmark {
  url: string,
  title: string,
  id: string,
  parentId?: string,
  parentTitle: string
  faviconURL: string
}

/**
 * 0: false
 * 1: true
 */
export type TBooleanValue = "0" | "1"

export interface ISearchBookmarkSetting {
  /**
   * 是否在打开的时候查询是否有对应的tab，如果开启了则会优先切换到已打开的tab
   * @default 1
   */
  openNewTab: TBooleanValue
  /**
   * 搜索需要匹配的类型
   * @default ["url", "title", "parentTitle"]
   */
  searchRule: (keyof IBookmark)[]
  /**
   * 查询结果为空的时候是否用默认搜索引擎搜索
   * @default 0
   */
  useDefaultSearch: TBooleanValue
}
