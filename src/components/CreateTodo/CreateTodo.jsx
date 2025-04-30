import { useState } from 'react';
import styles from './CreateTodo.module.css';

export const CreateTodo = ({ addTodo }) => {
	const [createValue, setCreateValue] = useState('');

	const handleCreateSubmit = (event) => {
		event.preventDefault();
		if (createValue) {
			addTodo({ title: createValue, complete: false });
			setCreateValue('');
		}
	};

	return (
		<form className={styles.createForm} onSubmit={handleCreateSubmit}>
			<input
				className={styles.createInput}
				name='create'
				type='text'
				value={createValue}
				onChange={(e) => setCreateValue(e.target.value)}
				placeholder='Новая задача'
			/>
			<button className={styles.createTodoButton} type='submit'>
				Создать задачу
			</button>
		</form>
	);
};
