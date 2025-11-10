import { useState } from "react";
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

  const back = () => {
    setTemporaryData(void 0);
  };

  const confirm = () => {
    chrome.runtime.sendMessage({
      type: "SET_USER_TEMPORARY_DATA",
      data: {
        ...data,
        title,
      },
    });
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
          className="add-temporary__input"
        />
      </div>
      <div className="add-temporary__operation">
        <div className="is-button" onClick={back}>
          返回搜索页面
        </div>
        <div className="is-button" onClick={confirm}>
          确定
        </div>
      </div>
    </div>
  );
};
