import React, { useEffect, useState } from "react";
import axios from "axios";

const Axious = ()=>{
    const [Users,setUsers]= useState([]);

    useEffect(()=>{
        async function featchApi() {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");

            setUsers(res.data);
        }
        featchApi();
    },[]);

    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>

            <tbody>
                {Users.map((u)=>(<tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.phone}</td>
                </tr>))}
            </tbody>
        </table>
        </>
    )
}

export default Axious;