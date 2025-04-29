import styles from './CreateTodo.module.css';

export const CreateTodo = ({ onSubmit, value, setValue }) => {
	return (
		<form className={styles.createForm} onSubmit={onSubmit}>
			<input
				className={styles.createInput}
				name='create'
				type='text'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button className={styles.createTodoButton} type='submit'>
				Создать задачу
			</button>
		</form>
	);
};
