import React from "react";

const Onclick = ()=>{
    const handelClick =()=>{
        alert("Button Clicked")
    };
    return(
        <>
        <button onClick={handelClick}>Click</button>
        </>
    );
};

export default Onclick