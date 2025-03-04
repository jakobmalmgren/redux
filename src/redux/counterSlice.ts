import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}
const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value += 1;
    },
    decrement: (state) => {
      state.value = state.value -= 1;
    },
    incrementByNumber: (state, action) => {
      state.value = state.value + action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
    double: (state) => {
      state.value = state.value * 2;
    },
  },
});
console.log(counterSlice);

export const { double, reset, increment, decrement, incrementByNumber } =
  counterSlice.actions;
export default counterSlice.reducer;
