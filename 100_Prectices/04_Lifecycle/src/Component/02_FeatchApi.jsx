
import React, { useEffect, useState } from "react";

const Todos = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchApi() {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/todos"
            );

            const data = await res.json();

            setUsers(data);
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

export default Todos;
