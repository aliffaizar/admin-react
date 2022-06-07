import { FaCalendarAlt, FaTasks, FaMoneyBillAlt } from "react-icons/fa";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	ArcElement,
	Tooltip,
	Legend,
	BarElement,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	ArcElement,
	Title,
	Tooltip,
	Legend,
	BarElement
);
const Dashboard = () => {
	const { chartData, pieChart } = useSelector((state) => state.chart);
	return (
		<div className='p-5 space-y-3'>
			<h1 className='text-3xl font-bold text-skin-primary-dark dark:text-skin-primary-light'>
				Dashboard
			</h1>
			<div className='grid grid-cols-3 gap-3'>
				<div className='inline-flex justify-between items-center bg-skin-light-main rounded px-5 py-7 border-l-4 border-skin-primary space-x-2'>
					<div className='flex-1 space-y-2'>
						<p className='uppercase text-sm text-skin-primary-dark dark:bg-skin-primary-light'>
							Earning (Monthly)
						</p>
						<p className='text-xl font-semibold text-skin-primary'>$ 30,500</p>
					</div>
					<div>
						<FaCalendarAlt className='w-10 h-10 text-skin-primary-dark dark:bg-skin-primary-light' />
					</div>
				</div>
				<div className='inline-flex justify-between items-center bg-skin-light-main rounded px-5 py-7 border-l-4 border-skin-primary space-x-2'>
					<div className='flex-1 space-y-2'>
						<p className='uppercase text-sm text-skin-primary-dark dark:bg-skin-primary-light'>
							Earning (annual)
						</p>
						<p className='text-xl font-semibold text-skin-primary'>$ 30,500</p>
					</div>
					<div>
						<FaMoneyBillAlt className='w-10 h-10 text-skin-primary-dark dark:bg-skin-primary-light' />
					</div>
				</div>
				<div className='inline-flex justify-between items-center bg-skin-light-main rounded px-5 py-7 border-l-4 border-skin-primary space-x-2'>
					<div className='flex-1 space-y-2'>
						<p className='uppercase text-sm text-skin-primary-dark dark:bg-skin-primary-light'>
							Tasks
						</p>
						<p className='text-xl font-semibold text-skin-primary'>75%</p>
						<div className='relative h-3 rounded shadow'>
							<div className='absolute w-full h-full rounded bg-skin-light-acent dark:bg-skin-dark-acent'></div>
							<div className='absolute w-3/4 h-full rounded bg-skin-primary'></div>
						</div>
					</div>
					<div>
						<FaTasks className='w-10 h-10 text-skin-primary-dark dark:bg-skin-primary-light' />
					</div>
				</div>
			</div>
			<div className='bg-skin-light-main max-w-full rounded p-5'>
				<h3 className='text-center text-2xl mb-2 font-semibold text-skin-primary-dark dark:bg-skin-primary-light'>
					Line Chart
				</h3>
				<div className='max-w-full'>
					<Line
						options={{
							responsive: true,
						}}
						data={{
							labels: chartData.map((data) => data.month),
							datasets: [
								{
									label: "Revenue",
									data: chartData.map((data) => data.revenue),
									borderColor: "rgba(255, 99, 132, 0.5)",
									backgroundColor: "rgba(255, 99, 132, 0.5)",
								},
								{
									label: "Active Users",
									data: chartData.map((data) => data.activeUser),
									borderColor: "rgba(54, 162, 235, 0.5)",
									backgroundColor: "rgba(54, 162, 235, 0.5)",
								},
							],
						}}
					/>
				</div>
			</div>
			<div className='inline-flex space-x-5 w-full'>
				<div className='p-5 bg-skin-light-main dark:bg-skin-dark-main rounded shadow'>
					<h3 className='text-center text-2xl font-semibold text-skin-primary-dark dark:text-skin-primary-light'>
						Pie Chart
					</h3>
					<div className='max-w-full'>
						<Pie
							options={{
								responsive: true,
							}}
							data={{
								labels: pieChart.map((data) => data.source),
								datasets: [
									{
										label: "Revenue",
										data: pieChart.map((data) => data.value),
										backgroundColor: pieChart.map((data) => data.color),
									},
								],
							}}
						/>
					</div>
				</div>
				<div className='flex-1  p-5 rounded shadow bg-skin-light-main dark:bg-skin-dark-main'>
					<h3 className='text-center text-2xl font-semibold text-skin-primary-dark dark:text-skin-primary-light'>
						Bar Cart
					</h3>
					<div className='w-full'>
						<Bar
							data={{
								labels: chartData.map((data) => data.month),
								datasets: [
									{
										label: "Revenue",
										data: chartData.map((data) => data.revenue),
										backgroundColor: "rgba(255, 99, 132, 0.5)",
									},
									{
										label: "Active Users",
										data: chartData.map((data) => data.activeUser),
										backgroundColor: "rgba(54, 162, 235, 0.5)",
									},
								],
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
