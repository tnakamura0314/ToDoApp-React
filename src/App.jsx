import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  //入力値を取得
  const [todoText, setTodoText] = useState("");

  //未完了リストに追加するuseState
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  //完了リストに追加するuseState
  const [completeTodos, setCompleteTodos] = useState([]);

  //inputの入力欄にonChange={onChangeTodoText}で値を取得し、setTodoTextで、value={todoText}に値をセットする
  //これはinputの時に使うもので定型分的な感じだから覚える
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  /**
   * 追加ボタン
   */
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

  /**
   * 　削除ボタン
   */
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];

    //削除機能　　（spliceは第一引数に配列の要素の指定、第二引数に何個削除するかを書く）
    newTodos.splice(index, 1);

    //タスクの追加（更新）
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    // 未完了から削除
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    //未完了から削除した項目を含む、完了リストを新しく生成
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    //未完了と完了リストを更新！！
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  /**
   * 　戻すボタン
   */
  const onClickBack = (index) => {
    //完了から削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    //未完了に追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    //未完了と完了リストの更新
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
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
                  <button onClick={() => onClickComplete(index)}>完了</button>
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
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button
                    className="back-button"
                    onClick={() => onClickBack(index)}
                  >
                    戻す
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
