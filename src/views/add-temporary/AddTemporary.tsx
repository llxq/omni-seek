import { useState } from "react";
import { SET_USER_TEMPORARY_DATA } from "../../shared/event.ts";
import { createNotification } from "../../shared/notice.ts";
import type { IBookmark } from "../../shared/types.ts";
import "./add-temporary.scss";

export const AddTemporary = ({
  data,
  setTemporaryData,
}: {
  data: IBookmark;
  setTemporaryData: (data: TUndefinable<IBookmark>) => void;
}) => {
  const [title, setTitle] = useState(data.title || "");
  const [isComposition, setIsComposition] = useState(false);

  const back = () => {
    setTemporaryData(void 0);
  };

  const baseConfirm = async () => {
    if (!title) {
      createNotification("标题不能为空");
      return;
    }
    await chrome.runtime.sendMessage({
      type: SET_USER_TEMPORARY_DATA,
      data: {
        ...data,
        title: title.trim(),
      },
    });
  };

  const confirmAndBack = async () => {
    await baseConfirm();
    back();
  };

  const confirm = async () => {
    await baseConfirm();
    window.close();
  };

  return (
    <div className="add-temporary__container">
      <div className="add-temporary__set-title">
        <div className="title">设置标题</div>
        <input
          placeholder="请输入标题"
          type="text"
          autoFocus
          autoComplete="off"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onCompositionStart={() => setIsComposition(true)}
          onCompositionEnd={() => setIsComposition(false)}
          className="add-temporary__input"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !isComposition) {
              confirm();
            }
          }}
        />
      </div>
      <div className="add-temporary__operation">
        <div className="is-button" onClick={back}>
          返回搜索页面
        </div>
        <div className="is-button" onClick={confirmAndBack}>
          保存并返回搜索页面
        </div>
        <div className="is-button" onClick={confirm}>
          保存
        </div>
      </div>
    </div>
  );
};
