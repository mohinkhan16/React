import React, { useRef } from "react";

const UseRef_02 = ()=>{
    const name =useRef("");

    const handleClick = (e) =>{
        e.preventDefault();

        console.log("name",name.current.value);
    }

    console.log("it will requried not again");
    
    return(
        <>
        <form onSubmit={handleClick}>
            <input type="text"
            placeholder="Enter your name"
            ref={name} />
            <button type="Submit">add</button>
        </form>

        </>
    )
}

export default UseRef_02