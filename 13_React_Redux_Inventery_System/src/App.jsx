
import React from "react";
import { useSelector } from "react-redux";
import Add from "./Components/Add";
import ProductList from "./Components/ProductList";

const App=()=>{

  return(
    <>
    <Add/>
    <br />
    <hr />
    <ProductList/>
    </>
  )
}


export default App;