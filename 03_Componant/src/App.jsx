import JSX from "./components/01_JSX";
import Fragments from "./components/02_Fragments";
import Functional from "./components/03_Functional";
import ClassComponent from "./components/04_Class";
import React from "react";

const App =()=>{
    return(
        <>
        <h1>hello</h1>
        <JSX/>
        <Fragments/>
        <Functional/>
        <ClassComponent/>
        </>
    );
};

export default App;