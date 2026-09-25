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

  const [editvalue,setEditvalue] = useState(null);

  const handleAdd = (input) => {
    if (!input.task || !input.description) {
      alert("Please enter both details");
      return;
    }else if(editvalue){
      setTodos((todo)=>
        todo.map((t)=>
          t.id === editvalue.id
          ? {task:input.task , description:input.description}
          :t,
        )
      );
      setEditvalue(null)

    }else{ 
    const newTodo = {
      id: new Date().getTime(),
      task: input.task,
      description: input.description,
    };

    setTodos((prev) => [...prev, newTodo]);
    }  };

  const handledelete =(id)=>{
    setTodos(todos.filter((t)=>t.id !==id));
  }

  const handleEdit =(id)=>{
    const todo = todos.find((t)=>t.id === id);

    setEditvalue(todo)
  }
  return (
    <>
      <AddTodo handleAdd={handleAdd}   editValue={editvalue}/>

      <ListTodo todos={todos} 
      handledelete={handledelete}
      handleEdit={handleEdit}/>
    </>
  );
};

export default App;