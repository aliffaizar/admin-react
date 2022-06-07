import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const data = [
	{
		id: uuid(),
		title: "Requested",
		tasks: [
			{
				id: uuid(),
				title: "Task 9",
			},
			{
				id: uuid(),
				title: "Task 10",
			},
		],
	},
	{
		id: "albfda",
		title: "To Do",
		tasks: [
			{
				id: uuid(),
				title: "Task 1",
			},
			{
				id: "task2",
				title: "Task 2",
			},
		],
	},
	{
		id: "sgbf",
		title: "In Progress",
		tasks: [
			{
				id: uuid(),
				title: "Task 3",
			},
		],
	},
	{
		id: "ytga",
		title: "Done",
		tasks: [
			{
				id: uuid(),
				title: "Task 4",
			},
			{
				id: uuid(),
				title: "Task 5",
			},
			{
				id: uuid(),
				title: "Task 6",
			},
			{
				id: uuid(),
				title: "Task 7",
			},
			{
				id: uuid(),
				title: "Task 8",
			},
		],
	},
];
const initialState = {
	kanbanData: data,
};
const kanbanSlice = createSlice({
	name: "kanban",
	initialState,
	reducers: {
		reset: () => initialState,
		upDate: (state, action) => {
			state.kanbanData = action.payload;
		},
	},
});

export const { reset, upDate } = kanbanSlice.actions;
export default kanbanSlice.reducer;
