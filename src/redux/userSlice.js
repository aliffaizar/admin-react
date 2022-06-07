import { createSlice } from "@reduxjs/toolkit";
import { usersData } from "../data/users";

const initialState = {
	users: usersData,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		reset: () => initialState,
	},
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
