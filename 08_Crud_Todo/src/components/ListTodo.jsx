import React from "react";
import "./ListTodo.css"

const ListTodo = ({ todos,handledelete,handleEdit }) => {
  return (
    <div className="todo-container">
      <h2>My Todo List</h2>

      <table className="todo-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Description</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((t, index) => {
            return (
              <tr key={t.id}>
                <td>{index + 1}</td>
                <td>{t.task}</td>
                <td>{t.description}</td>
                <td><button onClick={()=>handledelete(t.id)}>delete </button>
                <button onClick={()=>handleEdit (t.id)}>Edit</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;