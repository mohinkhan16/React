import React from "react";

const JSX = ()=>{

    //without JSX
    let Word = React.createElement("h1",null,"This word is without jsx");

    //with JSX
    // Word = <h1>This word is With JSX</h1>

    return(
    <>
    {Word}
    </>
    );
}

export default JSX