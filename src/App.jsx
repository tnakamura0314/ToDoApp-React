import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul id="incomplete-list">
          <li>
            <div className="list-row">
              <p>TODO1</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li>
            <div>
              <p>TODO2</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul id="complete-list">
          <li>
            <div className="list-row">
              <p>TODOだったよ</p>
              <button className="back-button">戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
