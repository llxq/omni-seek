import "./add-collect.scss";
import { useState } from "react";
import { SearchInput } from "../../components/search-input/SearchInput.tsx";
import { collectDb } from "../../shared/Db.ts";
import {
  createNotification,
  createSystemNotification,
} from "../../shared/notice.ts";
import type { IOmniCollectSearchData } from "../../shared/types.ts";
import { closePopup } from "../../shared/utils.ts";

interface IAddCollectProps {
  data: IOmniCollectSearchData;
  back: () => void;
}

export const AddCollect = ({ data, back }: IAddCollectProps) => {
  const [title, setTitle] = useState(data.title || "");

  const baseConfirm = async (isClose = false) => {
    if (!title?.trim()) {
      createNotification("标题不能为空", "error");
      return Promise.reject();
    }
    const updateData: IOmniCollectSearchData = {
      ...data,
      title,
    };
    if (data.updateTime) {
      await collectDb.update(updateData);
    } else {
      await collectDb.add(updateData);
    }
    if (isClose) {
      await createSystemNotification("操作成功");
    } else {
      void createNotification("操作成功");
    }
  };

  const cancel = () => {
    closePopup();
  };

  const confirmAndBack = () => {
    baseConfirm().then(back);
  };

  const confirm = async () => {
    baseConfirm(true).then(cancel);
  };

  return (
    <div className="add-collect__container">
      <div className="add-collect__header">
        <div className="title">设置标题</div>
        <SearchInput
          value={title}
          setValue={setTitle}
          placeholder="请输入标题"
          onEnter={confirm}
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
