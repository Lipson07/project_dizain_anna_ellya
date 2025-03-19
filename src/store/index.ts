import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  category: number;
}

const initialState: CategoryState = {
  category: 0,
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state: CategoryState, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export const selectCategory = (state: { category: CategoryState }) =>
  state.category.category;

export default categorySlice.reducer;
