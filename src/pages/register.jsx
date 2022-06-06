import {
	FaRegUserCircle,
	FaAt,
	FaLock,
	FaUserAlt,
	FaAddressCard,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div className='relative w-full h-screen overflow-hidden'>
			<div className='bg-skin-light-main h-1/2 dark:bg-skin-dark-acent'>
				<div className='h-full bg-skin-primary rounded-bl-[30%]'></div>
			</div>
			<div className=' bg-skin-primary h-1/2'>
				<div className='h-full dark:bg-skin-dark-acent bg-skin-light-main rounded-tr-[30%]'></div>
			</div>
			<div className='absolute top-1/2 left-1/2 bg-skin-light-acent rounded-lg dark:bg-skin-dark-main shadow-lg shadow-grey-100 dark:shadow-black/80 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-10/12 md:w-8/12 lg:w-6/12 min-h-[75%] max-h-fit py-9'>
				<h3 className='inline-flex w-full items-center justify-center '>
					<FaRegUserCircle className='w-24 h-24 text-skin-primary' />
				</h3>
				<h1 className='uppercase text-center text-3xl mb-5 text-skin-primary font-bold mt-3'>
					Register
				</h1>

				<form
					className='w-full flex flex-col items-center justify-center'
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<div className='inline-flex items-center justify-center my-1 w-10/12 md:w-8/12 space-x-3'>
						<div className='relative'>
							<FaAddressCard className='w-5 h-5 absolute top-2 border-0 left-2 text-skin-primary-dark dark:text-skin-primary-light' />
							<input
								type='text'
								className='w-full py-2 pl-10 ring-0 border-b-2 border-skin-primary-dark bg-transparent focus:border-b-skin-primary focus:ring-0 focus:border-b-4 focus:outline-none focus:bg-transparent focus:text-skin-primary-dark text-skin-primary-dark dark:focus:text-skin-primary-light dark:text-skin-primary-light'
								placeholder='First name'
							/>
						</div>
						<div className='relative '>
							<FaAddressCard className='w-5 h-5 absolute top-2 border-0 left-2 text-skin-primary-dark dark:text-skin-primary-light' />
							<input
								type='text'
								className='w-full py-2 pl-10 ring-0 border-b-2 border-skin-primary-dark bg-transparent focus:border-b-skin-primary focus:ring-0 focus:border-b-4 focus:outline-none focus:bg-transparent focus:text-skin-primary-dark text-skin-primary-dark dark:focus:text-skin-primary-light dark:text-skin-primary-light'
								placeholder='Last name'
							/>
						</div>
					</div>
					<div className='relative my-1 w-10/12 md:w-8/12 '>
						<FaUserAlt className='w-5 h-5 absolute top-2 border-0 left-2 text-skin-primary-dark dark:text-skin-primary-light' />
						<input
							type='text'
							className='w-full py-2 pl-10 ring-0 border-b-2 border-skin-primary-dark bg-transparent focus:border-b-skin-primary focus:ring-0 focus:border-b-4 focus:outline-none focus:bg-transparent focus:text-skin-primary-dark text-skin-primary-dark dark:focus:text-skin-primary-light dark:text-skin-primary-light'
							placeholder='Username'
						/>
					</div>
					<div className='relative my-1 w-10/12 md:w-8/12 '>
						<FaAt className='w-5 h-5 absolute top-2 border-0 left-2 text-skin-primary-dark dark:text-skin-primary-light' />
						<input
							type='email'
							className='w-full py-2 pl-10 ring-0 border-b-2 border-skin-primary-dark bg-transparent focus:border-b-skin-primary focus:ring-0 focus:border-b-4 focus:outline-none focus:bg-transparent focus:text-skin-primary-dark text-skin-primary-dark dark:focus:text-skin-primary-light dark:text-skin-primary-light'
							placeholder='Email'
						/>
					</div>
					<div className='relative w-10/12 md:w-8/12'>
						<FaLock className='w-5 h-5 absolute top-2 border-0 left-2 text-skin-primary-dark dark:text-skin-primary-light' />
						<input
							type='password'
							className='w-full py-2 pl-10 ring-0 border-b-2 border-skin-primary-dark bg-transparent focus:border-b-skin-primary focus:ring-0 focus:border-b-4 focus:outline-none focus:bg-transparent focus:text-skin-primary-dark text-skin-primary-dark dark:focus:text-skin-primary-light dark:text-skin-primary-light'
							placeholder='Password'
						/>
					</div>
					<div className='inline-flex justify-end mt-2  w-10/12 md:w-8/12'>
						<Link className='text-skin-primary hover:scale-110' to='#'>
							have an account?
						</Link>
					</div>
					<div className='mt-5 w-10/12 md:w-8/12'>
						<button className='uppercase bg-skin-primary w-full rounded mx-auto py-1 text-skin-primary-dark dark:text-skin-primary-light'>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
