import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface KolState {
  [productId: string]: number;
}

const initialState: KolState = {};

const KolSlice = createSlice({
  name: "kol",
  initialState,
  reducers: {
    setKolCount(
      state,
      action: PayloadAction<{ productId: string; count: number }>
    ) {
      const { productId, count } = action.payload;
      state[productId] = count;
    },
    increment(state, action: PayloadAction<string>) {
      const productId = action.payload;
      state[productId] =
        state[productId] === undefined ? 1 : state[productId] + 1;
    },
    decrement: (state, action: PayloadAction<string>) => {
      const productId = action.payload;

      if (state[productId] === undefined) {
        return;
      }

      if (state[productId] <= 1) {
        // Если счетчик меньше или равен 1, удаляем свойство из состояния
        delete state[productId];
      } else {
        // Иначе уменьшаем счетчик
        state[productId] -= 1;
      }
    },
  },
});

export const { setKolCount, increment, decrement } = KolSlice.actions;
export const selectCount = (productId: string) => (state: { kol: KolState }) =>
  state.kol[productId] === undefined ? 1 : state.kol[productId];
export default KolSlice.reducer;
