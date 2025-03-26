import { useState } from 'react';
import { users } from './data/users';
import { Thead } from './component/Thead';
import { Tbody } from './component/Tbody';
import { Table } from './component/Table';
// import styles from 'App.module.css';

export const App = () => {
	const [dataUsers, setDataUsers] = useState(users);
	const [sortBy, setSortBy] = useState({ key: 'name', order: 'asc' });

	const handleSortUsers = (key) => {
		if (sortBy.key === key) {
			setSortBy({
				...sortBy,
				order: sortBy.order === 'asc' ? 'desc' : 'asc',
			});
		} else if (key) {
			setSortBy({
				...sortBy,
				key: key,
				order: sortBy.order === 'asc' ? 'desc' : 'asc',
			});
		}
	};

	const sortedUsers = [...dataUsers].sort((a, b) => {
		const valueA = a[sortBy.key];
		const valueB = b[sortBy.key];

		if (typeof valueA === 'number') {
			return sortBy.order === 'asc' ? valueA - valueB : valueB - valueA;
		} else {
			return sortBy.order === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
		}
	});

	return (
		<>
			<Table>
				<Thead handleSortUsers={handleSortUsers} />
				<Tbody sortedUsers={sortedUsers} dataUsers={dataUsers} setDataUsers={setDataUsers} />
			</Table>
		</>
	);
};
