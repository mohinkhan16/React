import React, { useEffect, useState } from "react";

const AddTodo = ({ handleAdd ,editValue }) => {
    const [input, setInput] = useState({
        task: "",
        description: ""
    });

    useEffect(()=>{
        editValue ? setInput(editValue) :null;
    },[editValue])

    const handleChange = (field, e) => {
        setInput((prev) => {
            return {
                ...prev,
                [field]: e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Final Input:", input);

        handleAdd(input);

        setInput({
            task: "",
            description: ""
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your task"
                    value={input.task}
                    onChange={(e) => handleChange("task", e)}
                />

                <br />
                <br />

                <input
                    type="text"
                    placeholder="Enter your description"
                    value={input.description}
                    onChange={(e) => handleChange("description", e)}
                />

                <br />
                <br />

                <button type="submit">{editValue ? "update" : "Add"}</button>
            </form>
        </>
    );
};

export default AddTodo;