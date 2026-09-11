import React, { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
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
            <th>Name</th>
            <th>Email</th>
            <th>phone</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default User;