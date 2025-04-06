import styles from './TodoForm.module.css';

export const TodoForm = ({ onSubmit, inputValue, setInputValue }) => {
	return (
		<form onSubmit={onSubmit} className={styles.form}>
			<input
				name='create'
				type='text'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder='Новая задача'
				className={styles.input}
			/>
			<button className={styles.button} type='submit'>
				Создать задачу
			</button>
		</form>
	);
};
