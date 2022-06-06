import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import {
	FaUsers,
	FaFileAlt,
	FaChevronDown,
	FaSignInAlt,
	FaUnlink,
	FaUserPlus,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { SiYourtraveldottv } from "react-icons/si";
import { Disclosure } from "@headlessui/react";
import { BsKanbanFill } from "react-icons/bs";

const AdminSidebar = () => {
	const { sidebar } = useSelector((state) => state.sidebar);

	const sideNav = [
		{
			title: "dashboard",
			icon: <MdDashboard className='w-5 h-5' />,
			link: "/",
		},

		{ title: "users", icon: <FaUsers className='w-5 h-5' />, link: "/users" },
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
						<NavLink to='kanban'>
							<div className='inline-flex items-center text-skin-primary-dark dark:text-skin-primary-light w-full rounded px-4 py-2 hover:bg-skin-light-acent dark:hover:bg-skin-dark-acent font-medium space-x-2'>
								<BsKanbanFill className='w-5 h-5' />
							</div>
						</NavLink>
						<Disclosure>
							<>
								<Disclosure.Button className='inline-flex items-center justify-center text-skin-primary-dark dark:text-skin-primary-light w-full rounded px-4 py-2 hover:bg-skin-light-acent dark:hover:bg-skin-dark-acent font-medium space-x-2'>
									<div className='inline-flex items-center space-x-2'>
										<FaFileAlt className='w-5 h-5' />
									</div>
								</Disclosure.Button>
								<Disclosure.Panel className='flex flex-col px-2 items-center justify-center  rounded'>
									<NavLink
										className='dark:text-skin-primary-light rounded w-full px-2 mx-2 py-1 hover:bg-skin-light-acent dark:hover:bg-skin-dark-acent font-medium'
										to='register'
									>
										<FaUserPlus className='h-4 w-4' />
									</NavLink>
									<NavLink
										className='dark:text-skin-primary-light rounded w-full px-2 mx-2 py-1 hover:bg-skin-light-acent dark:hover:bg-skin-dark-acent font-medium'
										to='login'
									>
										<FaSignInAlt className='h-4 w-4' />
									</NavLink>
									<NavLink
										className='dark:text-skin-primary-light rounded w-full px-2 mx-2 py-1 hover:bg-skin-light-acent dark:hover:bg-skin-dark-acent font-medium'
										to='404'
									>
										<FaUnlink className='h-4 w-4' />
									</NavLink>
								</Disclosure.Panel>
							</>
						</Disclosure>
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
						<NavLink to='kanban'>
							<div className='inline-flex items-center text-skin-primary-dark dark:text-skin-primary-light w-full rounded px-4 py-2 hover:bg-skin-light-acent dark:hover:bg-skin-dark-acent font-medium space-x-2'>
								<BsKanbanFill className='w-5 h-5' />
								<p>kanban</p>
							</div>
						</NavLink>
						<Disclosure>
							{({ open }) => (
								<>
									<Disclosure.Button className='inline-flex items-center justify-between text-skin-primary-dark dark:text-skin-primary-light w-full rounded px-4 py-2 hover:bg-skin-light-acent dark:hover:bg-skin-dark-acent font-medium space-x-2'>
										<div className='inline-flex items-center space-x-2'>
											<FaFileAlt className='w-5 h-5' />
											<p>pages</p>
										</div>
										<FaChevronDown
											className={`${
												open ? "rotate-180 transform" : ""
											} w-3 h-3`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className='px-5 flex flex-col'>
										<NavLink
											className='border-l-2 border-l-skin-primary-dark dark:border-l-skin-primary-light rounded-r text-skin-primary-dark dark:text-skin-primary-light w-full px-4 py-1 hover:bg-skin-light-acent dark:hover:bg-skin-dark-acent font-medium'
											to='register'
										>
											register
										</NavLink>
										<NavLink
											className='border-l-2 border-l-skin-primary-dark dark:border-l-skin-primary-light rounded-r text-skin-primary-dark dark:text-skin-primary-light w-full px-4 py-1 hover:bg-skin-light-acent dark:hover:bg-skin-dark-acent font-medium'
											to='login'
										>
											login
										</NavLink>
										<NavLink
											className='border-l-2 border-l-skin-primary-dark dark:border-l-skin-primary-light rounded-r text-skin-primary-dark dark:text-skin-primary-light w-full px-4 py-1 hover:bg-skin-light-acent dark:hover:bg-skin-dark-acent font-medium'
											to='404'
										>
											404
										</NavLink>
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</nav>
				</aside>
			)}
		</>
	);
};

export default AdminSidebar;
