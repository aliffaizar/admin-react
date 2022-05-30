import { createSlice } from "@reduxjs/toolkit";

const sidebar = JSON.parse(localStorage.getItem("sidebar"));

const initialState = {
	sidebar: sidebar ? sidebar : false,
};
const sidebarSlice = createSlice({
	name: "sidebar",
	initialState,
	reducers: {
		setSidebar: (state, action) => {
			state.sidebar = action.payload;
		},
	},
});
export const { setSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
