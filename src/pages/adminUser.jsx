import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/userSlice";

const AdminUser = () => {
	const [entries, setEntries] = useState(10);
	const { users, isLoading, error } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const [index, setIndex] = useState(0);
	const [newUsers, setNewUsers] = useState([]);
	const [newUsersOffset, setNewUsersOffset] = useState(0);
	const handleChange = (e) => {
		setEntries(parseInt(e.target.value));
	};

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);
	useEffect(() => {
		const endOffset = newUsersOffset + entries;
		setNewUsers(users.slice(newUsersOffset, endOffset));
		setIndex(Math.ceil(users.length / entries));
	}, [users, entries, newUsersOffset]);
	const handleClick = (e) => {
		const newOffset = (e.selected * index) % users.length;
		setNewUsersOffset(newOffset);
	};
	return (
		<>
			<div className='p-5 space-y-3'>
				{isLoading && <div>Loading...</div>}
				{error && <div>{error}</div>}
				<h1 className='text-3xl font-bold text-skin-primary-dark dark:text-skin-primary-light'>
					All Users
				</h1>
				<div className='bg-skin-light-main dark:bg-skin-dark-main shadow-lg rounded px-4 py-2 w-full overflow-y-auto space-y-2'>
					<div className='inline-flex items-center justify-between w-full'>
						<div className='inline-flex items-center space-x-1'>
							<p>Show</p>
							<select
								className='ring-0 border-0 focus:ring-0 focus:border-0'
								onChange={handleChange}
							>
								<option value={10}>10</option>
								<option value={25}>25</option>
								<option value={50}>50</option>
								<option value={100}>100</option>
							</select>
							<p>entries</p>
						</div>
						<div className='inline-flex space-x-2 items-center'>
							<p>Search:</p>
							<input type='search' className='px-3 py-1' placeholder='Search' />
						</div>
					</div>

					<table className='min-w-fit w-full table-auto text-skin-primary-dark dark:text-skin-primary-light border border-collapse border-skin-light-acent dark:border-skin-dark-acent '>
						<thead>
							<tr>
								<th className='px-2 py-1 text-left text-skin-primary border-collapse border-skin-light-acent dark:border-skin-dark-acent border'>
									Name
								</th>

								<th className='px-2 py-1 text-left text-skin-primary border-collapse border-skin-light-acent dark:border-skin-dark-acent border'>
									Address
								</th>
								<th className='px-2 py-1 text-left text-skin-primary border-collapse border-skin-light-acent dark:border-skin-dark-acent border'>
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{newUsers.map((user, index) => (
								<tr key={index}>
									<td className='px-2 py-1 border-collapse border-skin-light-acent dark:border-skin-dark-acent border'>
										<div className='inline-flex space-x-2 items-center'>
											<img
												className='w-14 h-14 rounded-full object-cover object-center'
												src={user.picture.medium}
												alt={user.name.first}
											/>
											<div className='flex-1'>
												<p>{`${user.name.first} ${user.name.last}`}</p>
												<p>{user.email}</p>
											</div>
										</div>
									</td>
									<td className='px-2 py-1 border-collapse border-skin-light-acent dark:border-skin-dark-acent border'>
										<div>
											<p>{`${user.location.street.name} ${user.location.street.number}, ${user.location.city}`}</p>
											<p>{`${user.location.state}, ${user.location.country}`}</p>
										</div>
									</td>
									<td className='px-2 py-1 border-collapse border-skin-light-acent dark:border-skin-dark-acent border'>
										Action
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<ReactPaginate
						breakLabel='...'
						nextLabel='>'
						onPageChange={handleClick}
						pageRangeDisplayed={3}
						marginPagesDisplayed={3}
						previousLabel='<'
						pageCount={index}
						containerClassName='pagination'
						pageClassName='page-item'
						pageLinkClassName='page-link'
						previousClassName='page-item'
						previousLinkClassName='page-link'
						nextClassName='page-item'
						nextLinkClassName='page-link'
						breakClassName='page-item'
						breakLinkClassName='page-link'
						activeClassName='active'
					/>
				</div>
			</div>
		</>
	);
};

export default AdminUser;
