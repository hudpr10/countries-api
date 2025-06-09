import { createSlice } from "@reduxjs/toolkit";
const localStorageValue: string = JSON.parse(
  localStorage.getItem("darkMode") ?? "false"
);

const initialState = {
  darkMode: Boolean(localStorageValue),
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    changeTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
