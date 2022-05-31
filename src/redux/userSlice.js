import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	users: [],
	isLoading: false,
	error: null,
};

export const getUsers = createAsyncThunk(
	"user/getUsers",
	async (_, thunkAPI) => {
		try {
			const response = await fetch("/data/user.json", {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			});
			const data = await response.json();
			return data;
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: {
		[getUsers.pending]: (state, action) => {
			state.isLoading = true;
		},
		[getUsers.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.users = action.payload;
		},
		[getUsers.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.error.message;
		},
	},
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
