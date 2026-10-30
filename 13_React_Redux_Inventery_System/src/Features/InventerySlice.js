
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            name: "phone",
            qty: 1,
            price: 2000,
            category: "electronic",
        },
    ],
};

const inventrySlice = createSlice({
    name: "inventory",
    initialState,

    reducers: {
        add: (state, action) => {
            const newProduct = {
                id: new Date().getTime(),
                ...action.payload,
            };

            state.products.push(newProduct);

            console.log("Product List", [...state.products]);
        },
    },
});

export const { add } = inventrySlice.actions;

export default inventrySlice.reducer;
