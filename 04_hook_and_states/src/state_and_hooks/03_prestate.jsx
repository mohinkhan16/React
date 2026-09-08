
import React,{useState} from "react";

const PrevState =()=>{
    const [input,setInput]=useState("");

    const [users,setUsers] = useState([]);

    const handleSubmit =(e)=>{
        e.preventDefault();

        setUsers((prev)=>[...prev,input])
    }
    console.log("users",users);
    
    return(
        <>
        <from>
            <input type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)} />

            <button type="submit">add user</button>
        </from>
        
        <ul>
            {users.map((u)=>{
                return<li>{u}</li>
            })}
        </ul>
        </>
    )
}

export default PrevState;