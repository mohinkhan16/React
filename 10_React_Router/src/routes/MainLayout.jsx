

import React from "react";

import Home from "../components/About"
import Navbar from "../components/Navbar"
import Header from "../components/Header";


const MainLayout =()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Home/>        
        </>
    )
}