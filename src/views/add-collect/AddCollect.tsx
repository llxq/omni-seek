import "./add-collect.scss";
import { useState } from "react";
import { SearchInput } from "../../components/search-input/SearchInput.tsx";
import { UPDATE_COLLECTION_DATA_MESSAGE_KEY } from "../../shared/constants.ts";
import { createNotification } from "../../shared/notice.ts";
import type { IOmniSearchData } from "../../shared/types.ts";
import { closePopup } from "../../shared/utils.ts";

interface IAddCollectProps {
  data: IOmniSearchData;
  back: () => void;
}

export const AddCollect = ({ data, back }: IAddCollectProps) => {
  const [title, setTitle] = useState(data.title || "");

  const baseConfirm = async () => {
    if (!title?.trim()) {
      createNotification("标题不能为空", "error");
      return Promise.reject();
    }
    await chrome.runtime.sendMessage({
      type: UPDATE_COLLECTION_DATA_MESSAGE_KEY,
      data: {
        ...data,
        title: title.trim(),
      },
    });
  };

  const cancel = () => {
    closePopup();
  };

  const confirmAndBack = () => {
    baseConfirm().then(back);
  };

  const confirm = async () => {
    baseConfirm().then(cancel);
  };

  return (
    <div className="add-collect__container">
      <div className="add-collect__header">
        <div className="title">设置标题</div>
        <SearchInput
          value={title}
          setValue={setTitle}
          placeholder="请输入标题"
        />
      </div>
      <div className="add-collect__footer">
        <div className="is-button" onClick={cancel}>
          取消
        </div>
        <div className="is-button" onClick={confirmAndBack}>
          保存并返回搜索页面
        </div>
        <div className="is-button is-primary" onClick={confirm}>
          保存
        </div>
      </div>
    </div>
  );
};
