import { useState } from 'react';
import styles from './TodoItem.module.css';

export const TodoItem = ({ id, title, deleteTodo, updateTodo }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [text, setText] = useState(title);

	const handleEdit = () => {
		setIsEditing(!isEditing);
	};

	const handleSave = (event) => {
		event.preventDefault();
		updateTodo(id, { title: text });
		setIsEditing(!isEditing);
	};

	return (
		<div>
			{isEditing ? (
				<form onSubmit={handleSave}>
					<input name='edit' type='text' value={text} onChange={(e) => setText(e.target.value)} />
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
						<button className={styles.deleteButton} onClick={() => deleteTodo(id)}>
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
