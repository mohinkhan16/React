
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

const App = () => {
  const Alltodo = [
    {
      id: 1,
      task: "Playing",
      description: "You have playing cricket everyday",
      completed: false,
    },
    {
      id: 2,
      task: "Learn",
      description: "You have learn new things daily",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(Alltodo);
  const [editvalue, setEditvalue] = useState(null);

  // Add / Update Todo
  const handleAdd = (input) => {
    if (!input.task || !input.description) {
      alert("Please enter both details");
      return;
    }

    if (editvalue) {
      setTodos((todos) =>
        todos.map((t) =>
          t.id === editvalue.id
            ? {
                ...t,
                task: input.task,
                description: input.description,
              }
            : t
        )
      );

      setEditvalue(null);
    } else {
      const newTodo = {
        id: new Date().getTime(),
        task: input.task,
        description: input.description,
        completed: false,
      };

      setTodos((prev) => [...prev, newTodo]);
    }
  };

  // Delete Todo
  const handledelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // Edit Todo
  const handleEdit = (id) => {
    const todo = todos.find((t) => t.id === id);
    setEditvalue(todo);
  };

  // Complete / Pending Todo
  const handleComplete = (id) => {
    setTodos((todos) =>
      todos.map((t) =>
        t.id === id
          ? {
              ...t,
              completed: !t.completed,
            }
          : t
      )
    );
  };

  // Statistics
  const totalTasks = todos.length;

  const completedTasks = todos.filter(
    (t) => t.completed
  ).length;

  const pendingTasks = todos.filter(
    (t) => !t.completed
  ).length;

  return (
    <>
      <AddTodo
        handleAdd={handleAdd}
        editValue={editvalue}
      />

      {/* Summary Cards */}
      <div className="container mt-4">
        <div className="row g-3">

          {/* Total */}
          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <h6 className="text-muted">
                  Total Tasks
                </h6>

                <h2 className="fw-bold">
                  {totalTasks}
                </h2>
              </div>
            </div>
          </div>

          {/* Completed */}
          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <h6 className="text-muted">
                  Completed
                </h6>

                <h2 className="fw-bold text-success">
                  {completedTasks}
                </h2>
              </div>
            </div>
          </div>

          {/* Pending */}
          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <h6 className="text-muted">
                  Pending
                </h6>

                <h2 className="fw-bold text-warning">
                  {pendingTasks}
                </h2>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ListTodo
        todos={todos}
        handledelete={handledelete}
        handleEdit={handleEdit}
        handleComplete={handleComplete}
      />
    </>
  );
};

export default App;