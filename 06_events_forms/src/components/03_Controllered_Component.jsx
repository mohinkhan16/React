import React, { useState } from "react";

const Controllered =()=>{
    const[input,setInput]=useState({
        name:"",
        Email:"",
        Password:"",
    });

    const [users,SetUser]=useState([]);

    const handleChanges = (feild,e)=>{
        setInput((prev)=>{
            return{
                ...prev,
                [feild]:e.target.value,
            };
        });
    }
    console.log("input",input);

   const handleSubmit =(e)=>{
        e.preventDefault();

        if(!input.name||!input.Email||!input.Password){
            alert("all field are requried");
        }else{
            SetUser((prev)=>[...prev,input])
        }
   }

    return(
        <>
        <form onSubmit={handleChanges}>
            <input type="text"
            placeholder="Enter your name"
            value={input.name}
            onChange={(e)=>handleChanges("name",e)} />
        </form>

         <br />
        <br />

        <input
          type="email"
          placeholder="enter email"
          value={input.email}
          onChange={(e) => handleChange("email", e)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="enter password"
          value={input.password}
          onChange={(e) => handleChange("password", e)}
        />
        <br />
        <br />
        <button type="submit">submit</button>
        </>
    )
}

export default Controllered;