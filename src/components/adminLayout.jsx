import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import AdminHeader from "./adminHeader";
import AdminSidebar from "./adminSidebar";

const AdminLayout = () => {
	const { sidebar } = useSelector((state) => state.sidebar);
	return (
		<div className='flex relative'>
			<AdminSidebar />
			<div className={sidebar ? "flex-1 ml-16 h-full" : "flex-1 ml-72 h-full"}>
				<AdminHeader />
				<Outlet />
			</div>
		</div>
	);
};

export default AdminLayout;
