import { useState } from 'react';
import { users } from './data/users';
import { table } from './data/table';
import { DeleteButton } from './component/DeleteButton';
// import styles from 'App.module.css';

export const App = () => {
	const [dataUsers, setDataUsers] = useState(users);

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
							<th key={column}>{table[column].title}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{dataUsers.map((user) => (
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
