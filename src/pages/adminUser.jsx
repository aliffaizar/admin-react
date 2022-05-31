import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/userSlice";

const AdminUser = () => {
	const { users, isLoading, error } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);
	return (
		<>
			<div className='p-5 space-y-3'>
				{isLoading && <div>Loading...</div>}
				{error && <div>{error}</div>}
				<h1 className='text-3xl font-bold text-skin-primary-dark dark:text-skin-primary-light'>
					All Users
				</h1>
				<div className='bg-skin-light-main dark:bg-skin-dark-main shadow-lg rounded px-4 py-2 w-full overflow-y-auto '>
					<div className='inline-flex items-center justify-between w-full'></div>
					<table className='min-w-fit w-full table-auto'>
						<thead>
							<tr>
								<th className='px-2 py-1 text-left'>Name</th>
								<th className='px-2 py-1 text-left'>Position</th>
								<th className='px-2 py-1 text-left'>Status</th>
								<th className='px-2 py-1 text-left'>Address</th>
								<th className='px-2 py-1 text-left'>Action</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr>
									<td className='px-2'>John Doe</td>
									<td className='px-2'>CEO</td>
									<td className='px-2'>Active</td>
									<td className='px-2'>Active</td>
									<td className='px-2'>Action</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default AdminUser;
