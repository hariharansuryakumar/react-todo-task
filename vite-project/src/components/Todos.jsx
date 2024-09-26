import React from "react";
import { Button, Card } from "antd";

function Todos({ todo, editTodo, deleteTodo, setStatus }) {
  return (
    <div className="col-md-4 ">
      <Card className="bs">
        <p>Name : {todo.name}</p>
        <p>Description : {todo.description}</p>
        <p>Status : {todo.status}</p>
        <div className="d-flex justify-content-end">
          <Button
            className="m-1"
            type="default"
            onClick={() =>
              setStatus(
                todo.id,
                todo.status === "Completed" ? "Not completed" : "Completed"
              )
            }
          >
            {todo.status === "Completed"
              ? "Mark as Not completed"
              : "Mark as Completed"}
          </Button>
          <Button
            className="m-1"
            type="primary"
            onClick={() =>
              editTodo(todo.id, {
                ...todo,
                name: "Edited Todo",
                description: "Edited Description",
              })
            }
          >
            Edit
          </Button>
          <Button
            className="m-1"
            type="primary"
            onClick={() => deleteTodo(todo.id)}
            danger
          >
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Todos;