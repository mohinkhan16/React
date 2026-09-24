import { useState } from "react";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

const App = () => {
  const Alltodo = [
    {
      id: 1,
      task: "Playing",
      description: "you have playing cricket everyday",
    },
    {
      id: 2,
      task: "Learn",
      description: "you have learn new new things daily",
    },
  ];

  const [todos, setTodos] = useState(Alltodo);

  const handleAdd = (input) => {
    if (!input.task || !input.description) {
      alert("Please enter both details");
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      task: input.task,
      description: input.description,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <>
      <AddTodo handleAdd={handleAdd} />

      <ListTodo todos={todos} />
    </>
  );
};

export default App;