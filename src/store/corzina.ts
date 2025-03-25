import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { increment, decrement } from "./kol";
import { cost } from "../assets/card";
interface CorzinaState {
  id: { categ: number; index: number; cost: number };
  prid: string[];
  tovars: { id: { categ: number; index: number }; cossts: number }[];
}

const initialState: CorzinaState = {
  id: { categ: 0, index: 0, cost: 0 },
  prid: [],
  tovars: [],
};

const CorzinaSlice = createSlice({
  name: "corzina",
  initialState,
  reducers: {
    SetId: (
      state: CorzinaState,
      action: PayloadAction<{ categ: number; index: number; cost: number }>
    ) => {
      state.id = action.payload;
    },
    UpdateCost(state: CorzinaState, action: PayloadAction<any>) {
      const { productId, cost } = action.payload;
      const index = state.tovars.findIndex(
        (tovar) =>
          tovar.id.categ === Number(productId.split("-")[0]) &&
          tovar.id.index === Number(productId.split("-")[1])
      );

      if (index !== -1) {
        state.tovars[index].cossts = cost;
      }
    },

    SetTovars: (state: CorzinaState, action: PayloadAction<any>) => {
      state.tovars.push(action.payload);
    },
    SetDelete: (state: CorzinaState, action: PayloadAction<any>) => {
      state.tovars.splice(action.payload, 1);
    },
    SetPrid: (state: CorzinaState, action: PayloadAction<any>) => {
      state.prid.push(action.payload);
    },
  },
});

export const { SetId, SetTovars, SetDelete, SetPrid, UpdateCost } =
  CorzinaSlice.actions;

export const selectId = (state: { corzina: CorzinaState }) => state.corzina.id;

export const selectTovars = (state: { corzina: CorzinaState }) =>
  state.corzina.tovars;
export const selectPrid = (state: { corzina: CorzinaState }) =>
  state.corzina.prid;

export default CorzinaSlice.reducer;
