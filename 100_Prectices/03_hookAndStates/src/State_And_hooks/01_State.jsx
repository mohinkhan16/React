import { useState } from "react"


const State_01=()=>{
    const [name,setName]=useState("Mohin")

    const handleClick =()=>{
        setName("Khan")
    }

    console.log("current name is :",name);
    
    return(
        <>
        <button onClick={handleClick}>Change Name</button>
        </>
    );
};

export default State_01;