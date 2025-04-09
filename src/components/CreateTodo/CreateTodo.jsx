import styles from './CreateTodo.module.css';

export const CreateTodo = ({ onSubmit, createValue, setCreateValue }) => {
	return (
		<form className={styles.createForm} onSubmit={onSubmit}>
			<input
				className={styles.createInput}
				name='create'
				type='text'
				value={createValue}
				onChange={(e) => setCreateValue(e.target.value)}
			/>
			<button className={styles.createTodoButton} type='submit'>
				Создать задачу
			</button>
		</form>
	);
};
