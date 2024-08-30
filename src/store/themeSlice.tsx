import { createSlice } from "@reduxjs/toolkit";

type themeProps = {
  theme: string;
};

const initialState: themeProps = {
  theme: localStorage.getItem("theme") || " ",
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setDarkTheme(state) {
      state.theme = "dark";
      localStorage.setItem("theme", state.theme);
    },
    setLightTheme(state) {
      state.theme = "light";
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const themeSliceAction = ThemeSlice.actions;
export default ThemeSlice;
