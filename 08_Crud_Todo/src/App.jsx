import { useState } from "react"
import AddTodo from "./components/AddTodo"



const App =()=>{
  const Alltodo =[
    {
      id:1,
      task:"Playing",
      description:"you have playing cricket everyday"
    },
    {
      id:2,
      task:"Learn",
      description:"you have learn new new things daily"
    }
  ];

  const [todos,setTodos]=useState(Alltodo);

  return(
    <>
    <AddTodo setTodos={setTodos}/>
    </>
  )
  
}


export default App