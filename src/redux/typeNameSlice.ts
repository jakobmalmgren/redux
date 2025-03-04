import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  value: "",
};

const nameSlice = createSlice({
  name: "changingName",
  initialState: initialValue,
  reducers: {
    changeName: (state, action) => {
      state.value = action.payload;
      console.log(action.payload);
    },
  },
});

export const { changeName } = nameSlice.actions;
export default nameSlice.reducer;
