import { Outlet } from "react-router-dom";
import AdminHeader from "./adminHeader";
import AdminSidebar from "./adminSidebar";

const AdminLayout = () => {
	return (
		<div className='flex relative'>
			<AdminSidebar />
			<div className='flex-1'>
				<AdminHeader />
				<Outlet />
			</div>
		</div>
	);
};

export default AdminLayout;
