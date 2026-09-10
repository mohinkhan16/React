
import React, { useEffect, useState } from "react";

const LifeCycle =()=>{

    const [formdata,setFromData] = useState({name: "", email: "", password: ""});

    const handlechange = (e)=>{
        const {name,value}= e.target;


    // This use for refresh data like a you can add name they remove a password and other details
        // setFromData({
        //     ...FormData,
        //     [name]:value
        // });

        setFromData((prevData)=>({
            ...prevData,
            [name]:value
        }))
    };

    useEffect(()=>{
        return()=>{
        }
    },[]);

    return(
        <>
        <input type="text"
        name="name"
        value={formdata.name}
        placeholder="Enter your name"
        onChange={handlechange}/>
        
        <br/>
        <br/>
        <br/>

        <input type="email"
        name="email"
        value={formdata.email}
        placeholder="enter your email"
         onChange={handlechange}
         />
           <br/>
        <br/>
        <br/>
        
        <input type="password"
        name="password"
        value={formdata.password}
        placeholder="enter your password"
         onChange={handlechange}
         />

         <h3>Name: {formdata.name}</h3>
          <h3>Email: {formdata.email}</h3> 
          <h3>Password: {formdata.password}</h3>
        </>
    )
}

export default LifeCycle