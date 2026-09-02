import { useState } from "react"


const State =()=>{
    const[count,setCount]=useState(0);

    const Increment = ()=>{
        setCount(count+1);
    };

    const decrs = ()=>{
        setCount(count-1)
    }

    return(
        <>
            <h1>{count}</h1>
            <br/>
            <button onClick={()=>{Increment()}}>Increment</button>
               <button  onClick={()=>{decrs()}}>decrs</button>
        </>
    )
}

export default State;