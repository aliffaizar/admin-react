import { Link } from "react-router-dom";

const Error404 = () => {
	return (
		<div className='relative w-full h-screen'>
			<div className='bg-skin-light-main h-1/2 dark:bg-skin-dark-acent'>
				<div className='h-full bg-skin-primary rounded-bl-[30%]'></div>
			</div>
			<div className=' bg-skin-primary h-1/2'>
				<div className='h-full dark:bg-skin-dark-acent bg-skin-light-main rounded-tr-[30%]'></div>
			</div>
			<div className='absolute top-1/2 left-1/2 bg-skin-light-acent rounded-lg dark:bg-skin-dark-main shadow-lg shadow-grey-100 dark:shadow-black/80 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-10/12 md:w-8/12 lg:w-6/12 h-3/4'>
				<h1 className='uppercase text-center text-9xl mb-3 text-skin-primary font-bold mt-3'>
					404
				</h1>
				<p className='text-2xl dark:text-skin-primary-light text-skin-primary-dark'>
					Ooops, page not found !!!
				</p>
				<Link
					to='/'
					className='text-skin-primary underline mt-5 hover:scale-110'
				>
					back to Dashboard
				</Link>
			</div>
		</div>
	);
};

export default Error404;
