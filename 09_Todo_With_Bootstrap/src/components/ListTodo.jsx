
import React from "react";

const ListTodo = ({
  todos,
  handledelete,
  handleEdit,
  handleComplete,
}) => {
  return (
    <div className="container mt-4 mb-5">
      <div className="card shadow">

        <div className="card-header">
          <h4 className="mb-0">My Todo List</h4>
        </div>

        <div className="card-body">
          <div className="table-responsive">

            <table className="table table-bordered table-hover align-middle mb-0">

              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Complete</th>
                  <th>Task</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {todos.map((t, index) => (
                  <tr key={t.id}>

                    <td>{index + 1}</td>

                    {/* Checkbox */}
                    <td className="text-center">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={t.completed}
                        onChange={() =>
                          handleComplete(t.id)
                        }
                        style={{
                          width: "20px",
                          height: "20px",
                          cursor: "pointer",
                        }}
                      />
                    </td>

                    <td
                      style={{
                        textDecoration: t.completed
                          ? "line-through"
                          : "none",
                        color: t.completed
                          ? "#6c757d"
                          : "inherit",
                      }}
                    >
                      {t.task}
                    </td>

                    <td
                      style={{
                        textDecoration: t.completed
                          ? "line-through"
                          : "none",
                        color: t.completed
                          ? "#6c757d"
                          : "inherit",
                      }}
                    >
                      {t.description}
                    </td>

                    <td>
                      <button
                        className="btn btn-danger btn-sm me-2"
                        onClick={() =>
                          handledelete(t.id)
                        }
                      >
                        Delete
                      </button>

                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() =>
                          handleEdit(t.id)
                        }
                      >
                        Edit
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ListTodo;