import { createSlice } from "@reduxjs/toolkit";

const theme = JSON.parse(localStorage.getItem("theme"));
const initialState = {
	theme: theme ? theme : { mode: "light", color: "theme-cyan" },
};
const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state, action) => {
			state.theme = action.payload;
		},
	},
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
