import React, { useState } from "react";

const OnChange =()=>{
    const [input,setInput]=useState("")

    return(
        <>
        <input type="text"
        placeholder="Enter your name"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <br/>
        <h1>You have typed:-{input}</h1>
        </>
    )
};

export default OnChange