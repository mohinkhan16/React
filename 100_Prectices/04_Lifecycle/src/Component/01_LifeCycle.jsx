import React, { useEffect, useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    // Mounting + Unmounting
    useEffect(() => {
        console.log("Component Mounted");

        return () => {
            console.log("Component Unmounted");
        };
    }, []);

    // Updating
    useEffect(() => {
        console.log("Count Updated:", count);
    }, [count]);

    return (
        <>
            <h1>Count: {count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

            <br />
            <br />

            <button onClick={() => setShow(!show)}>
                Show / Hide
            </button>

            {show && <h2>Hello React</h2>}
        </>
    );
};

export default Counter;