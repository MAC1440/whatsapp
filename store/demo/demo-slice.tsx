import { createSlice } from "@reduxjs/toolkit";

const demoSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});
export default demoSlice.reducer;
export const { incremented, decremented } = demoSlice.actions;
