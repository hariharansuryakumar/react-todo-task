import React, { useState } from "react";
import { Form, Button, Input, message } from "antd";
import TodoList from "./components/TodoList"

function App() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Todo-1",
      description: "Read a book",
      status: "Not completed",
    },
    {
      id: 2,
      name: "Todo-2",
      description: "wake up early",
      status: "Not completed",
    },
    {
      id: 3,
      name: "Todo-3",
      description: "Eat healthy",
      status: "Not completed",
    },
  ]);
  const [tempTodos] = useState(todos);
  const onFinish = (values) => {
    todos.push({
      ...values,
      id: todos.length + 1,
      status: "Not completed",
    });
    setTodos([...todos]);

    message.success("Added Successfully !");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
    message.success("Deleted Successfully !");
  };

  const editTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    message.success("Edited Successfully !");
  };

  const setStatus = (id, updateStatus) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: updateStatus } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (statusFilter === "All") return true;
    return todo.status === statusFilter;
  });

  return (
    <div className="app">
      <h1 className="p-5 text-center"> Todo App </h1>
      <div className="p-3">
        <Form onFinish={onFinish} className="row">
          <Form.Item
            className="col-md-4"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your todo name!",
              },
            ]}
          >
            <Input placeholder="Todo Name" />
          </Form.Item>
          <Form.Item
            className="col-md-4"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your description!",
              },
            ]}
          >
            <Input placeholder="Description" />
          </Form.Item>
          <Form.Item className="col-md-3">
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "green" }}
              block
            >
              Add Todo
            </Button>
          </Form.Item>
        </Form>
      </div>
      <h1 className="p-3 mb-3 ">
        <div className="float-left">My Todos </div>
        <select
          className="float-right"
          style={{
            width: "20%",
          }}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not completed">Not completed</option>
        </select>
      </h1>
      <div className="mt-5">
        <TodoList
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          setStatus={setStatus}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;