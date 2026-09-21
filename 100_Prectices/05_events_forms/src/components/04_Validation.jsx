
import React, { useState } from "react";

const Validation =()=>{
    const[input,setInput]=useState({
        name:"",
        Email:"",
        Password:""
    });

    const [user,setUser]=useState([]);

    const [error,setError]= useState([]);

    const Validation=()=>{
        const newError ={};


        if(input.name===""){
            newError.name="name is requried"
        }
        if(input.Email===""){
            newError.Email ="Email is requried"
        }

        if(input.Password===""){
            newError.Password="Password is requried"
        }
        return newError;
    }

    const handleChange = (feild,e)=>{
        setInput((prev)=>{
            return{
                ...prev,
                [feild]:e.target.value,
            };
        });
    };

    const handleSubmit =(e)=>{
        e.preventDefaullt();

        const validate = validate();

        if(Object.keys(validate).length>0){
            setError(validate);
        }else{
            setUser((prev)=>[...prev,input]);
            alert("user data saved")
        }
    };

    console.log("users list ",user);
    
    return(
        <>
              <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          value={input.name}
          onChange={(e) => handleChange("name", e)}
        />

        {error.name ? <p style={{ color: "red" }}>{error.name}</p> : null}
        <br />
        <br />
        <input
          type="email"
          placeholder="enter your email"
          value={input.email}
          onChange={(e) => handleChange("email", e)}
        />

        {error.email ? <p style={{ color: "red" }}>{error.email}</p> : null}
        <br />
        <br />

        <input
          type="password"
          placeholder="enter your password"
          value={input.password}
          onChange={(e) => handleChange("password", e)}
        />

        {error.password ? (
          <p style={{ color: "red" }}>{error.password}</p>
        ) : null}
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
        </>
    )

}

export default Validation;