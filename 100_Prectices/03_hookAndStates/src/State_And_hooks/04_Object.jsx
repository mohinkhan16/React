import React, { useState } from "react";

const UserProfile = () => {

    const [user, setUser] = useState({
        name: "",
        age: "",
        city: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <>
            <input
                type="text"
                name="name"
                value={user.name}
                placeholder="Enter your name"
                onChange={handleChange}
            />

            <br />
            <br />

            <input
                type="number"
                name="age"
                value={user.age}
                placeholder="Enter your age"
                onChange={handleChange}
            />

            <br />
            <br />

            <input
                type="text"
                name="city"
                value={user.city}
                placeholder="Enter your city"
                onChange={handleChange}
            />

            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
            <h3>City: {user.city}</h3>
        </>
    );
};

export default UserProfile;