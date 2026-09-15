
import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiousExample = ()=>{
    const [user,setUsers]= useState([]);

    useEffect(()=>{
        async function FeatchApi() {
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/photos"
            );
            setUsers(res.data)
        }
        FeatchApi();
    },[]);

    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>Url</th>
                </tr>
            </thead>
            <tbody>
                {user.map((u)=>(
                    <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.title}</td>
                        <td>{u.url}</td>

                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
};

export default AxiousExample