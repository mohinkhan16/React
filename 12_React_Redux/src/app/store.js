
import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../Features/CounterSlice"

 const store = configureStore({
    reducer:{
        Counter:CounterSlice,

    }
 })

 export default store;