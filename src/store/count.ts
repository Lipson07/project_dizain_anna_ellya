import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { count } from "console";

interface CountState {
  count: number;
}

const initialState: CountState = {
  count:0
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    Setcount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
  },
});

export const { Setcount } = countSlice.actions;

export const selectCount = (state: { count: CountState }) =>
  state.count.count;
export default countSlice.reducer;
