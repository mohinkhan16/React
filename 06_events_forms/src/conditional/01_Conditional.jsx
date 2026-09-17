

import React, { useState } from "react";

const Conditional = ()=>{
    const [login,setlogin]=useState(false)

    const [user,setUser]=useState(false)

    return(
        <>
        <h1>{login ? "welcome":"Click to login"}</h1>

         <button onClick={()=>setlogin(!login)}>{login ? "logOut":"login"}</button>

        {user && <h3>Welcome User</h3>}
        </>
    )
};

export default Conditional