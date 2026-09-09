
import React, { useState } from "react";

const State_04 =()=>{
    const [count,setCount]= useState(0);

    const [input,setInput]=useState("");

    const handleChange=(e)=>{
        setInput(e.target.value);
    };


    return(
        <>
        <h1>State-2</h1>
        <h1>{count}</h1>

        <input type="text" value={input} onChange={handleChange} />

        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />

        <input type="text " value={input} onChange={(e)=>handleChange(e)} />
        
        </>
    )
}

export default State_04