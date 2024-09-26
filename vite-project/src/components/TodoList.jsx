import { Card } from "antd";
import React from "react";
import Todos from "./Todos";

function TodoList({ todos, deleteTodo, editTodo, setStatus }) {
  return (
    <div className="row">
      {todos.map((todo) => (
        (<Todos
        key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          setStatus={setStatus}
        />)
      ))}
    </div>
  );
}

export default TodoList;