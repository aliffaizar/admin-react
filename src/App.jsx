import { AdminLayout, ThemeSetting } from "./components";
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
} from "./pages";

function App() {
	const { theme } = useSelector((state) => state.theme);

	return (
		<BrowserRouter>
			<div className={theme ? `${theme.mode} ${theme.color}` : ""}>
				<div className='relative flex h-screen dark:bg-skin-dark-acent'>
					<div className='flex-1'>
						<Routes>
							<Route path='/' element={<AdminLayout />}>
								<Route index element={<Dashboard />} />
								<Route path='hotels' element={<AdminHotel />} />
								<Route path='booking' element={<AdminBooking />} />
								<Route path='configs' element={<AdminConfig />} />
								<Route path='restaurants' element={<AdminRestaurant />} />
								<Route path='travel' element={<AdminTravel />} />
							</Route>
							<Route path='/login' element={<Login />} />
						</Routes>
					</div>
					<ThemeSetting />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
