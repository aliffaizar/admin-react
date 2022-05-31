import { FaPalette, FaTimes } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import { Popover } from "@headlessui/react";
import { setTheme } from "../redux/themeSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
const ThemeSetting = () => {
	const thmeModes = [
		{
			name: "light",
			color: "#f3f4f6",
		},
		{
			name: "dark",
			color: "#2c2f33",
		},
	];
	const themeColors = [
		{
			name: "theme-cyan",
			color: "#0891b2",
		},
		{
			name: "theme-red",
			color: "#dc2626",
		},
		{
			name: "theme-green",
			color: "#16a34a",
		},
		{
			name: "theme-sky",
			color: "#0284c7",
		},
		{
			name: "theme-violet",
			color: "#7c3aed",
		},
		{
			name: "theme-fuchsia",
			color: "#c026d3",
		},
		{
			name: "theme-yellow",
			color: "#ca8a04",
		},
		{
			color: "#ea580c",
			name: "theme-orange",
		},
	];
	const dispatch = useDispatch();
	const { theme } = useSelector((state) => state.theme);
	const [themeSetting, setThemeSetting] = useState(theme);
	const themeChange = (e) => {
		setThemeSetting((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};
	useEffect(() => {
		dispatch(setTheme(themeSetting));
		localStorage.setItem("theme", JSON.stringify(themeSetting));
	});
	return (
		<Popover>
			{({ open }) => (
				<>
					<Popover.Button
						className={`text-skin-primary-dark dark:text-skin-primary-light ${
							open ? "hidden" : "flex"
						}`}
					>
						<FaPalette className='w-5 h-5' />
					</Popover.Button>
					<Popover.Panel
						className={`absolute z-20 h-screen inset-y-0 right-0 bg-skin-light-acent dark:bg-skin-dark-main shadow-lg w-72`}
					>
						<div className='flex justify-between items-center p-3'>
							<h3 className='font-semibold text-xl text-skin-primary-dark dark:text-skin-primary-light'>
								Theme Setting
							</h3>
							<Popover.Button className='p-2 rounded-full bg-skin-light-main text-skin-primary dark:bg-skin-dark-acent dark:text-skin-primary'>
								<FaTimes className='h-5 w-5 ' />
							</Popover.Button>
						</div>
						<div className='flex-col border-t-1 border-color p-3'>
							<p className='font-semibold text-skin-primary-dark dark:text-skin-primary-light'>
								Theme:
							</p>

							<div className='flex gap-3' onChange={themeChange}>
								{thmeModes.map((mode, index) => (
									<div className='mt-2' key={index}>
										<input
											type='radio'
											id={mode.name}
											name='mode'
											value={mode.name}
											className='hidden w-0'
										/>

										<label
											htmlFor={mode.name}
											className='w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'
											style={{ backgroundColor: mode.color }}
										>
											<div
												className={`text-2xl text-skin-primary ${
													mode.name === theme.mode ? "block" : "hidden"
												}`}
											>
												<BsCheck />
											</div>
										</label>
									</div>
								))}
							</div>
						</div>
						<div className='p-4 border-t-1 border-color'>
							<p className='font-semibold mb-3 text-skin-primary-dark dark:text-skin-primary-light'>
								Colors:
							</p>
							<div className='grid grid-cols-5 gap-3' onChange={themeChange}>
								{themeColors.map((color, index) => (
									<div key={index}>
										<input
											type='radio'
											id={color.name}
											name='color'
											value={color.name}
											className='hidden w-0'
										/>
										{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
										<label
											htmlFor={color.name}
											className='bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'
											style={{ backgroundColor: color.color }}
										>
											<div
												className={`text-2xl text-skin-primary-light ${
													color.name === theme.color ? "block" : "hidden"
												}`}
											>
												<BsCheck />
											</div>
										</label>
									</div>
								))}
							</div>
						</div>
					</Popover.Panel>
				</>
			)}
		</Popover>
	);
};

export default ThemeSetting;
