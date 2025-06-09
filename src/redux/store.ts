import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import themeSlice from "./theme/slice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
