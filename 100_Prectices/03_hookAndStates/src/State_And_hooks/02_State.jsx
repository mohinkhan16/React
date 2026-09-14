import React, { useState } from "react";

const State_02 =()=>{
    const [conuter,setCounter]=useState(0);

    const handleClick =()=>{
        setCounter(conuter+1)
    }

    return(
        <>
        <h1>{conuter}</h1>

        {/* inline  */}
        {/* <button onClick={()=>setCounter(conuter+1)}>increse</button> */}

        {/* function refresh */}
        {/* <button onClick={()=>setCounter(conuter+1)}>incress</button> */}

        <button onClick={(e)=>handleClick(e)}>increse</button>
        </>
    )
}

export default State_02;