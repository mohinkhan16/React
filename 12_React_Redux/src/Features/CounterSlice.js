
import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "Counter",

  initialState: {
    count: 0,
  },

  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },

    descrement: (state) => {
      state.count = state.count - 1;
    },

    reset: (state) => {
      state.count = 0;
    },
    incrementByNumber:(state,action)=>{
        state.count += action.payload
    }
  },
});

export const { increment, descrement, reset,incrementByNumber } = CounterSlice.actions;

export default CounterSlice.reducer;
