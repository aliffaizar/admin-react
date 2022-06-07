import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import sidebarReducer from "./sidebarSlice";
import userReducer from "./userSlice";
import kanbanReducer from "./kanbanSlice";
import chartReducer from "./chartSlice";

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		sidebar: sidebarReducer,
		user: userReducer,
		kanban: kanbanReducer,
		chart: chartReducer,
	},
});
