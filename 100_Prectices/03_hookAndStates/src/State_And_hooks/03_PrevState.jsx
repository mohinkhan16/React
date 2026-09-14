import React, { useState } from "react";

const Cart = ()=>{
    const [input,setInput]=useState("");

    const [cart,setcart]= useState([]);

    const handleSubmit =(e)=>{
        e.preventDefault();

        setcart((prev)=>[...prev,input]);
        setInput("");
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder="Enter your Product" />

            <button type="submit">Add Product</button>
        </form>
        
        <ul>
            {cart.map((product,index)=>{
                return <li key={index}>{product}</li>
            })}
        </ul>
        </>
    )
}

export default Cart