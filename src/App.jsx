import { AdminLayout } from "./components";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	AdminBooking,
	AdminConfig,
	AdminHotel,
	AdminRestaurant,
	AdminTravel,
	Dashboard,
	Login,
	AdminUser,
	Register,
	Error404,
	Kanban,
} from "./pages";

function App() {
	const { theme } = useSelector((state) => state.theme);

	return (
		<BrowserRouter>
			<div className={theme ? `${theme.mode} ${theme.color}` : ""}>
				<div className='relative flex bg-skin-light-acent dark:bg-skin-dark-acent'>
					<div className='flex-1'>
						<Routes>
							<Route path='/' element={<AdminLayout />}>
								<Route index element={<Dashboard />} />
								<Route path='kanban' element={<Kanban />} />
								<Route path='hotels' element={<AdminHotel />} />
								<Route path='booking' element={<AdminBooking />} />
								<Route path='configs' element={<AdminConfig />} />
								<Route path='restaurants' element={<AdminRestaurant />} />
								<Route path='travel' element={<AdminTravel />} />
								<Route path='users' element={<AdminUser />} />
								<Route path='travels' element={<AdminTravel />} />
							</Route>
							<Route path='/login' element={<Login />} />
							<Route path='/register' element={<Register />} />
							<Route path='/*' element={<Error404 />} />
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
