
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
products: [
    {
        id: "product-1",
        name: "phone",
        qty: 10,
        price: 20000,
        category: "electronic",
    },
    {
        id: "product-2",
        name: "laptop",
        qty: 5,
        price: 55000,
        category: "electronic",
    },
    {
        id: "product-3",
        name: "keyboard",
        qty: 15,
        price: 1200,
        category: "accessories",
    },
    {
        id: "product-4",
        name: "mouse",
        qty: 20,
        price: 500,
        category: "accessories",
    },
    {
        id: "product-5",
        name: "monitor",
        qty: 8,
        price: 12000,
        category: "electronic",
    },
    {
        id: "product-6",
        name: "headphones",
        qty: 12,
        price: 2500,
        category: "accessories",
    },
    {
        id: "product-7",
        name: "chair",
        qty: 7,
        price: 4500,
        category: "furniture",
    },
    {
        id: "product-8",
        name: "table",
        qty: 4,
        price: 8000,
        category: "furniture",
    },
    {
        id: "product-9",
        name: "printer",
        qty: 6,
        price: 15000,
        category: "electronic",
    },
    {
        id: "product-10",
        name: "webcam",
        qty: 9,
        price: 3500,
        category: "accessories",
    },
    ],
    editValue: null,
};

const inventrySlice = createSlice({
    name: "inventory",
    initialState,

    reducers: {
        // Add Product
        add: (state, action) => {
            const newProduct = {
                id: nanoid(),
                ...action.payload,
            };

            state.products.push(newProduct);
        },

        // Delete Product
        handleDetele: (state, action) => {
            state.products = state.products.filter(
                (p) => p.id !== action.payload
            );
        },

        // Set Edit Value
        setEditval: (state, action) => {
            state.editValue = action.payload;
        },

        // Update Product
        handleEdit: (state, action) => {
            const index = state.products.findIndex(
                (p) => p.id === action.payload.id
            );

            if (index !== -1) {
                state.products[index] = action.payload;
            }

            state.editValue = null;
        },
    },
});

export const {
    add,
    handleDetele,
    setEditval,
    handleEdit,
} = inventrySlice.actions;

export default inventrySlice.reducer;
