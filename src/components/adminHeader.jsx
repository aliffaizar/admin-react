import { useEffect, useState } from "react";
import { FaBars, FaBell, FaEnvelope } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setSidebar } from "../redux/sidebarSlice";
import { Menu, Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import ThemeSetting from "./themeSetting";

const AdminHeader = () => {
	const { sidebar } = useSelector((state) => state.sidebar);
	const [isOpen, setIsOpen] = useState(sidebar);
	const dispatch = useDispatch();
	const openSidebar = () => {
		setIsOpen(!isOpen);
	};
	useEffect(() => {
		dispatch(setSidebar(isOpen));
		localStorage.setItem("sidebar", JSON.stringify(isOpen));
	});

	return (
		<div className='flex justify-between bg-skin-light-main shadow dark:bg-skin-dark-main items-center px-5 py-3'>
			<button
				onClick={openSidebar}
				className='text-skin-primary-dark dark:text-skin-primary-light'
			>
				<FaBars className='w-5 h-5' />
			</button>
			<nav className='inline-flex space-x-3 items-center'>
				<button className='text-skin-primary-dark dark:text-skin-primary-light'>
					<FaBell className='w-5 h-5' />
				</button>
				<ThemeSetting />
				<Popover className='relative'>
					<Popover.Button className='text-skin-primary-dark dark:text-skin-primary-light'>
						<FaEnvelope className='w-5 h-5' />
					</Popover.Button>
					<Popover.Panel className='absolute left-1/4 -translate-x-3/4 w-48 -bottom-1'>
						<div className='absolute bg-skin-light-acent shadow-xl dark:bg-skin-dark-acent text-skin-primary-dark dark:text-skin-primary-light p-3 rounded-md'>
							this is for message components
						</div>
					</Popover.Panel>
				</Popover>

				<Menu as='div' className='relative inline-block'>
					<Menu.Button>
						<img
							src='http://localhost:3000/img/avatar.jpg'
							alt='avatar'
							className='w-8 h-8 rounded-full object-center object-cover'
						/>
					</Menu.Button>
					<Menu.Items
						as='div'
						className='absolute left-1/4 -translate-x-3/4 bg-skin-light-acent rounded-lg dark:bg-skin-dark-main w-32 px-3 shadow-lg  py-2 flex flex-col'
					>
						<Menu.Item>
							<Link
								to='#'
								className='text-skin-primary-dark dark:text-skin-primary-light'
							>
								Profile
							</Link>
						</Menu.Item>
						<Menu.Item>
							<Link
								to='#'
								className='text-skin-primary-dark dark:text-skin-primary-light'
							>
								Edit Profile
							</Link>
						</Menu.Item>
						<Menu.Item>
							<Link
								to='#'
								className='text-skin-primary-dark dark:text-skin-primary-light'
							>
								Logout
							</Link>
						</Menu.Item>
					</Menu.Items>
				</Menu>
			</nav>
		</div>
	);
};

export default AdminHeader;
