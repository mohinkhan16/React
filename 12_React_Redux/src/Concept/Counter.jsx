import { useDispatch, useSelector } from "react-redux"
import { descrement, increment, reset,incrementByNumber } from "../Features/CounterSlice";
import { useState } from "react";

const Counter = ()=>{

    const count = useSelector((state)=>state.Counter.count);
    
    const dispatch = useDispatch();

    const [input,setInput]= useState(0);

    const handleIncrement = ()=>{
        dispatch(incrementByNumber(Number(input)));
    }

    return<>
    <h1>{count}</h1>

    <button onClick={()=>dispatch(increment())}>Increment</button>
    <br />
    <br />
    <button onClick={()=>dispatch(descrement())}>Descriment</button>
    <br /><br />
    <button onClick={()=>dispatch(reset())}>Reset</button>
    <br /><br />
    <input type="text"
    value={input}
    onChange={(e)=>setInput(e.target.value)} />

    <button onClick={handleIncrement}>
        Increment By Number
    </button>
    </>;
} 

export default Counter