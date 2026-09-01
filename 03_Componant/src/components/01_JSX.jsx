import React from "react";

const JSX =()=>{

    //without jsx
    let element = React.createElement("h1",null,"WithOut Jsx");

    //with jsx
    element = <h1>Hello from JSX </h1>

    return <>{element}</>
};

export default JSX;