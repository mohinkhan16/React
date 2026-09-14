
import axios from "axios";
import React, { useEffect, useState } from "react";

const Axious = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchApi() {
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );

            setUsers(res.data);
        }

        fetchApi();
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((u) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.title}</td>
                            <td>{u.completed.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Axious;