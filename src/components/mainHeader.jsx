import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Popover } from "@headlessui/react";

const MainHeader = () => {
	const navLink = [
		{ title: "home", link: "/" },
		{ title: "hotels", link: "/hotels" },
		{ title: "restaurants", link: "/restaurants" },
		{ title: "travels", link: "/travels" },
	];
	const activeLink =
		"border-b-2 border-skin-primary uppercase text-sm font-medium hover:border-b-2 hover:border-skin-primary py-1";
	const inactiveLink =
		"uppercase text-sm font-medium hover:border-b-2 hover:border-skin-primary py-1";
	return (
		<header className='realative bg-skin-light-main dark:bg-skin-dark-main text-skin-primary py-2 shadow-lg px-3'>
			<div className='container mx-auto inline-flex py-2 justify-between items-center'>
				<Link className='text-2xl sm:text-3xl font-mono font-bold' to='/'>
					Jelajah
					<span className='text-skin-primary-dark dark:text-skin-primary-light'>
						.Id
					</span>
				</Link>
				<div className='hidden sm:inline-flex items-center text-skin-primary-dark dark:text-skin-primary-light'>
					<nav className='sm:inline-flex space-x-3'>
						{navLink.map((link, index) => (
							<NavLink
								key={index}
								className={({ isActive }) =>
									isActive ? activeLink : inactiveLink
								}
								to={link.link}
							>
								{link.title}
							</NavLink>
						))}
						<Link
							className='uppercase px-5 py-1 text-sm bg-skin-primary text-skin-primary-light rounded-md'
							to='/login'
						>
							login
						</Link>
					</nav>
				</div>
				<Popover className='block sm:hidden text-skin-primary-dark dark:text-skin-primary-light'>
					<Popover.Button className='text-xl p-1 text-skin-primary-dark dark:text-skin-primary-light'>
						<FaBars />
					</Popover.Button>
					<Popover.Panel className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50'>
						<div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-skin-light-main dark:bg-skin-dark-main divide-y-2 divide-skin-dark-acent dark:divide-skin-light-acent'>
							<div className='pt-5 pb-6 px-3'>
								<div className='flex items-center justify-between px-2'>
									<h1 className='text-2xl text-skin-primary font-mono font-bold'>
										Jelajah
										<span className='text-skin-primary-dark dark:text-skin-primary-light'>
											.Id
										</span>
									</h1>
									<Popover.Button aria-hidden='true'>
										<FaTimes className='w-5 h-5' />
									</Popover.Button>
								</div>
								<div className='flex mt-2 flex-col'>
									{navLink.map((link, index) => (
										<NavLink
											key={index}
											to={link.link}
											className='uppercase px-2 py-2 rounded text-sm hover:bg-skin-light-acent dark:hover:bg-skin-dark-acent'
										>
											{link.title}
										</NavLink>
									))}
									<NavLink
										className='bg-skin-primary  text-center rounded-md py-1 mt-3'
										to='login'
									>
										Login
									</NavLink>
								</div>
							</div>
						</div>
					</Popover.Panel>
				</Popover>
			</div>
		</header>
	);
};

export default MainHeader;
