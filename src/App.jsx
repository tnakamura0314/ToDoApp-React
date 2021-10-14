import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  //入力値を取得
  const [todoText, setTodoText] = useState("");

  //未完了リストに追加するuseState
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい"
  ]);

  //完了リストに追加するuseState
  const [completeTodos, setCompleteTodos] = useState(["ううううう"]);

  //inputの入力欄にonChange={onChangeTodoText}で値を取得し、setTodoTextで、value={todoText}に値をセットする
  //これはinputの時に使うもので定型分的な感じだから覚える
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    //入力欄を空で追加ボタンを押した場合、投稿できないようにする
    if (todoText === "") return;

    //　...incompleteTodos現在の要素数を取得して、今入力された新しい要素をtodoTextで配列に追加
    const newTodos = [...incompleteTodos, todoText];

    //タスクの追加（更新）
    setIncompleteTodos(newTodos);

    //タスク追加後に、入力欄の入力内容を削除する
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];

    //削除機能　　（spliceは第一引数に配列の要素の指定、第二引数に何個削除するかを書く）
    newTodos.splice(index, 1);

    //タスクの追加（更新）
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul id="incomplete-list">
          {incompleteTodos.map((todo, index) => {
            return (
              //何個目の要素かを正確に把握させるために、レンダリングする場合、最初の要素にkeyを設定することが必要
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul id="complete-list">
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button className="back-button">戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
