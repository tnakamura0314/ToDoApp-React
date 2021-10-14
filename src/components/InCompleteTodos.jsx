import React from "react";

export const InCompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul id="incomplete-list">
        {todos.map((todo, index) => {
          return (
            //何個目の要素かを正確に把握させるために、レンダリングする場合、最初の要素にkeyを設定することが必要
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
