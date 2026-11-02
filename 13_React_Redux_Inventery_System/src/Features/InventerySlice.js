
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id:1,
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

        handleDetele:(state,action)=>{
            state.products=state.products.filter((p)=>p.id !== action.payload)
        },

        setEditval :(state,action)=>{
                state.editvalue=action.payload
        }
    },
});

export const { add,handleDetele,setEditval } = inventrySlice.actions;

export default inventrySlice.reducer;
