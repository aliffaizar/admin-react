import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import sidebarReducer from "./sidebarSlice";
import userReducer from "./userSlice";

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		sidebar: sidebarReducer,
		user: userReducer,
	},
});
