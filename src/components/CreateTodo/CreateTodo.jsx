import { useState } from 'react';
import styles from './CreateTodo.module.css';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../redux/thunks';

export const CreateTodo = () => {
	const [createValue, setCreateValue] = useState('');

	const dispatch = useDispatch();

	const handleCreateSubmit = (event) => {
		event.preventDefault();
		if (createValue.trim()) {
			dispatch(createTodo({ title: createValue, complete: false }));
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
