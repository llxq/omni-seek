import { useEffect, useState } from "react";
import { db } from "../../shared/Db.ts";
import { sendGetTemporaryDataEvent } from "../../shared/event.ts";
import { createNotification } from "../../shared/notice.ts";
import type { ITemporaryData } from "../../shared/types.ts";
import "./temporary-data.scss";

export const TemporaryData = ({
  setTemporaryData,
}: {
  setTemporaryData: (data: ITemporaryData) => void;
}) => {
  const [temporaryList, setTemporaryList] = useState<ITemporaryData[]>([]);

  useEffect(() => {
    sendGetTemporaryDataEvent().then((data) => {
      setTemporaryList(data);
    });
  }, []);

  const deleteTemporaryData = (data: ITemporaryData) => {
    db.delete(data.id).then(() => {
      createNotification("删除成功");
    });
    setTemporaryList(temporaryList.filter((item) => item.id !== data.id));
  };

  const formatTime = (time: number) => {
    if (!time) {
      return "";
    }
    // 补0
    const padZero = (num: number) => {
      return num < 10 ? `0${num}` : `${num}`;
    };
    const date = new Date(time);
    return `${date.getFullYear()}-${padZero(
      date.getMonth() + 1,
    )}-${padZero(date.getDate())} ${padZero(date.getHours())}:${padZero(
      date.getMinutes(),
    )}:${padZero(date.getSeconds())}`;
  };

  const editData = (data: ITemporaryData) => {
    setTemporaryData(data);
  };

  return temporaryList.length ? (
    <div className="temporary-data__container">
      <div className="temporary-data__list">
        {temporaryList.map((item) => {
          return (
            <div className="temporary-data__list-item-wrapper">
              <div
                className="temporary-data__list-item"
                key={item.id}
                title={item.title}
                onClick={() => {
                  chrome.tabs.create({
                    url: item.url,
                  });
                }}
              >
                {item.faviconURL && (
                  <img
                    className="temporary-data__list-item-favicon"
                    src={item.faviconURL}
                    alt={item.title}
                  />
                )}
                {item.title}
              </div>
              <div className="create-time">{formatTime(item.createdTime)}</div>
              <div className="temporary-data__item-operation">
                <div
                  className="edit-btn is-button"
                  onClick={() => editData(item)}
                >
                  编辑
                </div>
                <div
                  className="delete-btn is-button"
                  onClick={() => deleteTemporaryData(item)}
                >
                  删除
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="temporary-data__is-empty">暂无数据</div>
  );
};
