import React from "react";
import Counter from "./Concept/Counter";
import { useSelector } from "react-redux";

const App = ()=>{

    const count = useSelector((state)=>state.Counter.count);
    return(
        <>
              <h1>Redux Toolkit Counter</h1>
              <h1>Counter:{count}</h1>
      <Counter />

        </>
    )
}

export default App