import React from "react";

export const CompleteTodos = (props) => {
  const { todos, conClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button onClick={() => conClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
