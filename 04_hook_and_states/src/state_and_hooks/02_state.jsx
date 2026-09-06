import { useState } from "react"

const state2 = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(preventCount => preventCount + 1)
    }

    return (
        <>
            <h1>count value:{count}</h1>

            <button onClick={() => {
                handleIncrement();
                handleIncrement();
                handleIncrement();
                handleIncrement();
                handleIncrement();
            }}></button>
        </>
    )
}

export default state2