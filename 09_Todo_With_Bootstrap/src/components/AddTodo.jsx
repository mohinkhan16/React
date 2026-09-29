import React, { useEffect, useState } from "react";

const AddTodo = ({ handleAdd, editValue }) => {
  const [input, setInput] = useState({
    task: "",
    description: "",
  });

  useEffect(() => {
    if (editValue) {
      setInput(editValue);
    }
  }, [editValue]);

  const handleChange = (field, e) => {
    setInput((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAdd(input);

    setInput({
      task: "",
      description: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">
            {editValue ? "Update Todo" : "Add Todo"}
          </h4>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Task</label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter your task"
                value={input.task}
                onChange={(e) => handleChange("task", e)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter your description"
                value={input.description}
                onChange={(e) => handleChange("description", e)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              {editValue ? "Update" : "Add Todo"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;