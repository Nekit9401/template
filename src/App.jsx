import { useState } from 'react';
import { users } from './data/users';
import { table } from './data/table';
import { DeleteButton } from './component/DeleteButton';
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
		} else {
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

	const renderContent = (id, user, column) => {
		if (column === 'delete') {
			return <DeleteButton id={id} dataUSers={dataUsers} setDataUsers={setDataUsers} />;
		} else return user[column];
	};

	return (
		<>
			<table>
				<thead>
					<tr>
						{Object.keys(table).map((column) => (
							<th key={column} onClick={() => handleSortUsers(table[column].key)}>
								{table[column].title}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{sortedUsers.map((user) => (
						<tr key={user._id}>
							{Object.keys(table).map((column) => (
								<td key={column}>{renderContent(user._id, user, column)}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};
