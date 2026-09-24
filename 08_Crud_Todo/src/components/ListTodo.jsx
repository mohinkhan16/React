import React from "react";
import "./ListTodo.css"

const ListTodo = ({ todos }) => {
  return (
    <div className="todo-container">
      <h2>My Todo List</h2>

      <table className="todo-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((t, index) => {
            return (
              <tr key={t.id}>
                <td>{index + 1}</td>
                <td>{t.task}</td>
                <td>{t.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;