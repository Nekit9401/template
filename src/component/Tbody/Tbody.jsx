import { table } from '../../data/table';
import { DeleteButton } from '../DeleteButton';

export const Tbody = ({ sortedUsers, ...rest }) => {
	const renderContent = (id, user, column) => {
		if (column === 'delete') {
			return <DeleteButton id={id} {...rest} />;
		} else return user[column];
	};

	return (
		<tbody>
			{sortedUsers.map((user) => (
				<tr key={user._id}>
					{Object.keys(table).map((column) => (
						<td key={column}>{renderContent(user._id, user, column)}</td>
					))}
				</tr>
			))}
		</tbody>
	);
};
