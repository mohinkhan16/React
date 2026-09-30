

import React  from "react";
import {Link,NavLink} from "react-router-dom"

const Header =()=>{
    return(
       <>
        <Link to ="/">Home</Link>
        <Link to ="/About">About</Link>
         <Link to ="/Navbar">Navbar</Link>
       </>
    )
}

export default Header