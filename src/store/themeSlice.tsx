import { createSlice } from "@reduxjs/toolkit";

export type ThemeType = "light" | "dark";

interface ThemeState {
  mode: ThemeType;
}

const initialState: ThemeState = {
  mode: "light", //기본값 라이트
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setTheme(state, action) {
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
