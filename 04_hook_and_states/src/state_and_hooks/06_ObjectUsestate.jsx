import React, { useState } from "react";

const ObjectState = ()=>{
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:""
    });


    const handlechange = (feild,e)=>{
        setUser((prev)=>{
            return{
                ...prev,
                [feild]:e.target.value
            }
        });
    };

    return(
        <>
        <input type="text"
        value={user.name}
        placeholder="enter your name"
        onChange={(e)=>handlechange("name",e)} />
        
        <br/>
        <br/>
          <input
        type="email"
        value={user.email}
        placeholder="email"
        onChange={(e) => handlechange("email", e)}
      />

      <br />
      <br />

      <input
        type="password"
        value={user.password}
        placeholder="password"
        onChange={(e) => handlechange("password", e)}
      />

      <br />
      <br />

      <h1>Name :- {user.name}</h1>

      <h1>Email :- {user.email}</h1>

      <h1>Password :- {user.password}</h1>

        </>
    );
};


export default ObjectState;