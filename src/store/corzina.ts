import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { increment, decrement } from "./kol";
import { cost } from "../assets/card";
interface CorzinaState {
  id: { categ: number; index: number; cost: number };
  prid: string[];
  tovars: {
    id: { categ: number; index: number; cost: number };
    cossts: number;
  }[];
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
        state.tovars[index].id.cost = cost;
      }
    },

    SetTovars: (
      state: CorzinaState,
      action: PayloadAction<{
        id: { categ: number; index: number; cost: number };
        cossts: number;

        initialCost: number;
      }>
    ) => {
      const existingTovarIndex = state.tovars.findIndex(
        (tovar) =>
          tovar.id.categ === action.payload.id.categ &&
          tovar.id.index === action.payload.id.index
      );

      if (existingTovarIndex !== -1) {
        state.tovars[existingTovarIndex].cossts += action.payload.cossts;
      } else {
        state.tovars.push(action.payload);
      }
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
export const selectCost = (state: { corzina: CorzinaState }) =>
  state.corzina.tovars.reduce((acc, tovar) => acc + tovar.id.cost, 0);
export default CorzinaSlice.reducer;
