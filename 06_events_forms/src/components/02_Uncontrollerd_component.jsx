import React, { useRef } from "react";

const Uncontrolled = ()=>{
    const inputRef = useRef("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log("input",inputRef.current.value);
        
    };

    return(
        <>
        <form action="">
            <input type="text" placeholder="enter something here" ref={inputRef} />

              <br/>
        <br/>

        <button type="submit">add</button>  
        </form>
        </>
    )
}

export default Uncontrolled;