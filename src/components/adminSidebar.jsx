import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard, MdTravelExplore } from "react-icons/md";
import { RiHotelLine, RiRestaurantLine } from "react-icons/ri";
import { FaUsers, FaCartArrowDown, FaCogs } from "react-icons/fa";
import { useSelector } from "react-redux";
import { SiYourtraveldottv } from "react-icons/si";

const AdminSidebar = () => {
	const { sidebar } = useSelector((state) => state.sidebar);
	const sideNav = [
		{
			title: "dashboard",
			icon: <MdDashboard className='w-5 h-5' />,
			link: "/",
		},
		{
			title: "hotels",
			icon: <RiHotelLine className='w-5 h-5' />,
			link: "hotels",
		},
		{
			title: "restaurants",
			icon: <RiRestaurantLine className='w-5 h-5' />,
			link: "restaurants",
		},
		{
			title: "travels",
			icon: <MdTravelExplore className='w-5 h-5' />,
			link: "travels",
		},
		{ title: "users", icon: <FaUsers className='w-5 h-5' />, link: "/users" },
		{
			title: "booking",
			icon: <FaCartArrowDown className='w-5 h-5' />,
			link: "booking",
		},
		{
			title: "configs",
			icon: <FaCogs className='w-5 h-5' />,
			link: "configs",
		},
	];
	return (
		<>
			{sidebar ? (
				<aside className='w-16 fixed h-screen overflow-hidden hover:overflow-y-auto shadow-lg bg-skin-light-main dark:bg-skin-dark-main px-2 py-1'>
					<div className='w-full py-2 border-b-2 dark:border-b-skin-dark-acent'>
						<Link to='/'>
							<h3 className='text-2xl flex justify-center items-center font-mono font-bold text-skin-primary'>
								<SiYourtraveldottv />
							</h3>
						</Link>
					</div>
					<nav className='flex flex-col mt-5'>
						{sideNav.map((item, index) => (
							<NavLink to={item.link} key={index}>
								<div className='inline-flex items-center text-skin-primary-dark dark:text-skin-primary-light w-full rounded px-4 py-2 hover:bg-skin-light-acent dark:hover:bg-skin-dark-acent font-medium space-x-2'>
									{item.icon}
								</div>
							</NavLink>
						))}
					</nav>
				</aside>
			) : (
				<aside className='w-72 fixed h-screen overflow-hidden hover:overflow-y-auto shadow-lg bg-skin-light-main dark:bg-skin-dark-main px-2 py-1'>
					<div className='w-full py-2 border-b-2 dark:border-b-skin-dark-acent'>
						<Link to='/'>
							<h3 className='text-2xl flex justify-center items-center font-mono font-bold text-skin-primary'>
								<SiYourtraveldottv />
								<p className='ml-3'>Admin</p>
								<span className='text-skin-primary-dark dark:text-skin-primary-light'>
									.Id
								</span>
							</h3>
						</Link>
					</div>
					<nav className='flex flex-col mt-5'>
						{sideNav.map((item, index) => (
							<NavLink to={item.link} key={index}>
								<div className='inline-flex items-center text-skin-primary-dark dark:text-skin-primary-light w-full rounded px-4 py-2 hover:bg-skin-light-acent dark:hover:bg-skin-dark-acent font-medium space-x-2'>
									{item.icon}
									<p>{item.title}</p>
								</div>
							</NavLink>
						))}
					</nav>
				</aside>
			)}
		</>
	);
};

export default AdminSidebar;
