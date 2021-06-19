import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const res = await axios({
      url: "http://localhost:5000/todos",
    });
    const todoArray = await res.data;
    setTodos(todoArray);
  };
  useEffect(() => {
    getTodos();
  }, [todos]);

  // Delete Todo Function

  const deteteTodo = async (id) => {
    try {
      const res = await axios({
        url: `http://localhost:5000/todos/${id}`,
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id != id));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Discription</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {/* 
        <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
        */}
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deteteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
