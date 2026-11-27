import React, { useState } from "react";

const Auth = () => {

    const [authData, setAuthData] = useState({
        email: "",
        password: ""
    });

    const [isSignup, setIsSignup] = useState(false);

    const handleChange = (field, e) => {
        setAuthData((prev) => ({
            ...prev,
            [field]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(authData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{isSignup ? "Sign Up" : "Login"}</h1>

            <input
                type="email"
                placeholder="Enter Email"
                value={authData.email}
                onChange={(e) => handleChange("email", e)}
            />
            <br />
            <br />

            <input
                type="password"
                placeholder="Enter Password"
                value={authData.password}
                onChange={(e) => handleChange("password", e)}
            />
            <br />

            <button type="submit">
                {isSignup ? "Sign Up" : "Login"}
            </button>

        <br />
        <br />
            <button
                type="button"
                onClick={() => setIsSignup(!isSignup)}
            >
                {isSignup ? "Already User? Login" : "New User? Sign Up"}
            </button>
        </form>
    );
};

export default Auth;