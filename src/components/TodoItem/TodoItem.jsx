import { useState } from 'react';
import styles from './TodoItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../redux/thunks';

export const TodoItem = ({ id, title }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editingText, setEditingText] = useState(title);

	const dispatch = useDispatch();

	const handleEdit = () => {
		setIsEditing(!isEditing);
	};

	const handleSave = (event) => {
		event.preventDefault();
		dispatch(updateTodo(id, { title: editingText }));
	};

	const handleDelete = (id) => {
		dispatch(deleteTodo(id));
	};

	return (
		<div className={styles.container}>
			{isEditing ? (
				<form onSubmit={handleSave} className={styles.editForm}>
					<input
						className={styles.editInput}
						name='edit'
						type='text'
						value={editingText}
						onChange={(e) => setEditingText(e.target.value)}
					/>
					<button className={styles.saveButton} type='submit'>
						Сохранить
					</button>
					<button type='button' className={styles.cancelButton} onClick={handleEdit}>
						Отменить
					</button>
				</form>
			) : (
				<div className={styles.todoItem}>
					<h1>{title}</h1>
					<div className={styles.actionButton}>
						<button className={styles.deleteButton} onClick={() => handleDelete(id)}>
							Удалить
						</button>
						<button className={styles.editButton} onClick={handleEdit}>
							Редактировать
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
