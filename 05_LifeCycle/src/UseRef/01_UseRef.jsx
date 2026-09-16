import React  from "react";
import { useRef } from "react";

const UseRef =()=>{
    const inputRef = useRef(null);

    const handleClick = ()=>{
        inputRef.current.focus();
    };

    return(
        <>
        <input type="text"
        ref={inputRef}
        placeholder="Enter your name" />
        <br/>
        <br/>

        <button onClick={handleClick}>Focus</button>
        </>
    );
};

export default UseRef;