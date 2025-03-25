import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./index";
import countReducer from "./count";
import corzinaReducer from "./corzina";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import KolReducer from "./kol";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["count"],
};
const corzinaPersistConfig = {
  key: "corzina",
  storage,
  whitelist: ["id", "tovars"],
};
const kolPersistConfig = {
  key: "kol",
  storage,
  whitelist: ["kol"],
};
const persistedCorzinaReducer = persistReducer(
  corzinaPersistConfig,
  corzinaReducer
);
const persistedKolReducer = persistReducer(kolPersistConfig, KolReducer);

const persistedReducer = persistReducer(persistConfig, countReducer);
const store = configureStore({
  reducer: {
    category: categoryReducer,
    count: persistedReducer,
    corzina: persistedCorzinaReducer,
    kol: persistedKolReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
