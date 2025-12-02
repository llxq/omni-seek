/**
 * 已经打开的标签页
 */
export interface IOpenTabData {
  /**
   * 是否为已经打开的标签页
   */
  isOpenTab?: boolean;
  /**
   * 对应的window下的tab的索引
   */
  tabIndex?: number;
  /**
   * 为已经打开的tab的时候的窗口id
   */
  windowId?: number;
  /**
   * 打开的window的索引
   */
  windowIndex?: number;
}

/**
 * 收藏的数据
 */
export interface ICollectData {
  /**
   * 是否为收藏数据
   */
  isCollect?: boolean;
}

/**
 * 搜索的数据
 */
export interface IOmniSearchData extends ICollectData, IOpenTabData {
  /**
   * 搜索的 URL
   */
  url: string;
  /**
   * 搜索的标题
   */
  title: string;
  /**
   * 数据 ID
   * @description 可能是书签的ID，也可能是 tabId 之类的
   */
  id: string;
  /**
   * 书签的目录ID
   */
  parentId?: string;
  /**
   * 书签的父级标题
   */
  parentTitle?: string;
  /**
   * 网站的图标
   */
  faviconURL: string;
}

/**
 * 收藏的搜索数据
 */
export interface IOmniCollectSearchData extends IOmniSearchData {
  /**
   * 创建时间
   */
  updateTime: number;
}

/**
 * 搜索规则
 */
export type TOmniSearchRule = keyof IOmniSearchData;

/**
 * 0: false
 * 1: true
 */
export type TBooleanValue = "0" | "1";

export type TTheme = "auto" | "light" | "dark";

/**
 * 搜索设置
 */
export interface IOmniSearchSetting {
  /**
   * 搜索需要匹配的类型
   * @default ["url", "title", "parentTitle"]
   */
  searchRules: TOmniSearchRule[];
  /**
   * 是否搜索打开的标签页
   * @default 1
   */
  searchOpenedTab: TBooleanValue;
  /**
   * 查询结果为空的时候是否用默认搜索引擎搜索
   * @default 1
   */
  useDefaultSE: TBooleanValue;
  /**
   * 是否启用高级搜索
   * @default 0
   */
  useAdvancedSearch: TBooleanValue;
  /**
   * 主题颜色
   * @default "auto"
   */
  theme: TTheme;
}

export interface IOmniSeekTabParams {
  editCollect?: (data: IOmniCollectSearchData) => void;
  updateTheme?: (theme: TTheme) => void;
}
