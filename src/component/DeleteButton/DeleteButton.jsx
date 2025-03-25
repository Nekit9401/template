export const DeleteButton = ({ id, dataUSers, setDataUsers }) => {
	const handleDeleteUser = (id) => {
		const updateDataUsers = dataUSers.filter((user) => {
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
