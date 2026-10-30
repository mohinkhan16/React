
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Features/InventerySlice";

const Add = () => {
    const [input, setInput] = useState({
        name: "",
        qty: "",
        price: "",
        category: "",
    });

    const dispatch = useDispatch();

    const handleChange = (field, e) => {
        setInput((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!input.name || !input.qty || !input.price || !input.category) {
            alert("Please fill all fields");
            return;
        }

        dispatch(add({
            ...input,
            qty: Number(input.qty),
            price: Number(input.price),
        }));

        setInput({
            name: "",
            qty: "",
            price: "",
            category: "",
        });
    };

    return (
        <>
            <h1>Inventory Form</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={input.name}
                    onChange={(e) => handleChange("name", e)}
                />

                <br />
                <br />

                <label htmlFor="qty">Qty</label>
                <input
                    id="qty"
                    type="number"
                    placeholder="Enter your Qty"
                    value={input.qty}
                    onChange={(e) => handleChange("qty", e)}
                />

                <br />
                <br />

                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    type="number"
                    placeholder="Enter your Price"
                    value={input.price}
                    onChange={(e) => handleChange("price", e)}
                />

                <br />
                <br />

                <label htmlFor="category">Category</label>
                <input
                    id="category"
                    type="text"
                    placeholder="Enter your Category"
                    value={input.category}
                    onChange={(e) => handleChange("category", e)}
                />

                <br />
                <br />

                <button type="submit">Add Product</button>
            </form>
        </>
    );
};

export default Add;
