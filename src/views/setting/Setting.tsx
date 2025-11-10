import "./setting.scss";
import { useEffect, useState } from "react";
import type { ISearchBookmarkSetting } from "../../shared/types.ts";
import { Checkbox } from "../checkbox/Checkbox.tsx";
import { FormItem } from "../form-item/FormItem.tsx";
import { Radio, RadioGroup } from "../radio/Radio.tsx";

export const Setting = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<ISearchBookmarkSetting>({
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"],
    useDefaultSearch: "0",
  });

  const [saveLoading, setSaveLoading] = useState(false);
  const submit = async () => {
    if (saveLoading) {
      return;
    }
    setSaveLoading(true);
    try {
      await chrome.storage.local.set({ searchBookmarkSetting: formData });
      // 提示
      await chrome.notifications.create({
        type: "basic",
        iconUrl: "icons/icon.png",
        title: "提示",
        message: "设置已保存",
      });
    } finally {
      setSaveLoading(false);
    }
  };

  const updateFormData = (data: Partial<ISearchBookmarkSetting>) => {
    setFormData({ ...formData, ...data });
  };

  useEffect(() => {
    chrome.storage.local.get("searchBookmarkSetting", (result) => {
      if (result.searchBookmarkSetting) {
        setFormData({ ...formData, ...result.searchBookmarkSetting });
      }
      // 组件内部没有做响应式所以等待数据更新后渲染。
      setLoading(false);
    });
  }, []);

  return (
    !loading && (
      <div className="setting__container">
        <div className="setting__content">
          <FormItem
            label="是否打开已存在匹配的标签页"
            tips="按住 Ctrl/Command 键可以强制新窗口打开"
          >
            <RadioGroup
              name="openNewTab"
              value={formData.openNewTab}
              onChange={(value) => updateFormData({ openNewTab: value })}
            >
              <Radio value="1">是（通过匹配域名查找已打开页面）</Radio>
              <Radio value="0">否</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="搜索规则">
            <Checkbox
              name="searchRule"
              value={formData.searchRule}
              onChange={(value) =>
                updateFormData({
                  searchRule: value as ISearchBookmarkSetting["searchRule"],
                })
              }
              options={[
                { name: "标题", value: "title" },
                { name: "父文件夹标题", value: "parentTitle" },
                { name: "URL", value: "url" },
              ]}
            />
          </FormItem>
          <FormItem label="书签不存在时是否使用默认搜索引擎搜索关键字">
            <RadioGroup
              name="useDefaultSearch"
              value={formData.useDefaultSearch}
              onChange={(value) => updateFormData({ useDefaultSearch: value })}
            >
              <Radio value="0">否</Radio>
              <Radio value="1">是</Radio>
            </RadioGroup>
          </FormItem>
        </div>
        <div className="setting__footer">
          <div className="submit-button" onClick={submit}>
            保存设置
          </div>
        </div>
      </div>
    )
  );
};
