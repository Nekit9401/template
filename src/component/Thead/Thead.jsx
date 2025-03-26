import { table } from '../../data/table';

export const Thead = ({ handleSortUsers }) => {
	return (
		<thead>
			<tr>
				{Object.keys(table).map((column) => (
					<th key={column} onClick={() => handleSortUsers(table[column]?.key)}>
						{table[column].title}
					</th>
				))}
			</tr>
		</thead>
	);
};
