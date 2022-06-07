import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const data = [
	{
		id: uuid(),
		month: "january",
		activeUser: 1100,
		revenue: 5000,
		color: "#5eead4",
	},
	{
		id: uuid(),
		month: "february",
		activeUser: 1200,
		revenue: 6400,
		color: "#7dd3fc",
	},
	{
		id: uuid(),
		month: "march",
		activeUser: 1300,
		color: "#c084fc",
		revenue: 7200,
	},
	{
		id: uuid(),
		month: "april",
		activeUser: 900,
		color: "#f472b6",
		revenue: 5500,
	},
	{
		id: uuid(),
		month: "may",
		activeUser: 710,
		color: "#facc15",
		revenue: 7800,
	},
	{
		id: uuid(),
		month: "june",
		activeUser: 1230,
		color: "#fb923c",
		revenue: 8300,
	},
	{
		id: uuid(),
		month: "july",
		activeUser: 1010,
		color: "#60a5fa",
		revenue: 6500,
	},
	{
		id: uuid(),
		month: "august",
		activeUser: 850,
		color: "#65a30d",
		revenue: 5200,
	},
	{
		id: uuid(),
		month: "september",
		activeUser: 900,
		color: "#6d28d9",
		revenue: 5500,
	},
	{
		id: uuid(),
		month: "october",
		activeUser: 1000,
		color: "#be185d",
		revenue: 6700,
	},
	{
		id: uuid(),
		month: "november",
		activeUser: 1100,
		color: "#bae6fd",
		revenue: 9100,
	},
	{
		id: uuid(),
		month: "december",
		activeUser: 1200,
		color: "#4d7c0f",
		revenue: 8200,
	},
];
const piechart = [
	{
		id: uuid(),
		source: "social media",
		value: "20",
		color: "#5eead4",
	},
	{
		id: uuid(),
		source: "referal",
		color: "#36A2EB",
		value: "30",
	},
	{
		id: uuid(),
		source: "Ads",
		color: "#FFCE56",
		value: "10",
	},
	{
		id: uuid(),
		source: "direct",
		color: "#FF6384",
		value: "40",
	},
];

const initialState = {
	chartData: data,
	pieChart: piechart,
};
const chartSlice = createSlice({
	name: "chart",
	initialState,
	reducers: {
		reset: () => initialState,
	},
});

export const { reset } = chartSlice.actions;

export default chartSlice.reducer;
