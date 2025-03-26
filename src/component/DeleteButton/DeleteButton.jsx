export const DeleteButton = ({ id, dataUsers, setDataUsers }) => {
	const handleDeleteUser = (id) => {
		const updateDataUsers = dataUsers.filter((user) => {
			return user._id !== id;
		});
		setDataUsers(updateDataUsers);
	};

	return (
		<>
			<button onClick={() => handleDeleteUser(id)}>Удалить</button>
		</>
	);
};
