import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./index";
import countReducer from "./count";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root", // Ключ для хранения состояния в localStorage
  storage,
  whitelist: ["count"], // Перечислите reducers, которые нужно сохранить (в нашем случае только 'count')
};

const persistedReducer = persistReducer(persistConfig, countReducer);
const store = configureStore({
  reducer: {
    category: categoryReducer,
    count: persistedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
