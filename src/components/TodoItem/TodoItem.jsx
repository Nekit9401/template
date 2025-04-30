import { use, useState } from 'react';
import styles from './TodoItem.module.css';
import { TodoContext } from '../../context';

export const TodoItem = ({ id, title }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [text, setText] = useState(title);

	const { deleteTodo, updateTodo } = use(TodoContext);

	const handleEdit = () => {
		setIsEditing(!isEditing);
	};

	const handleSave = (event) => {
		event.preventDefault();
		updateTodo(id, { title: text });
	};

	return (
		<div className={styles.container}>
			{isEditing ? (
				<form onSubmit={handleSave} className={styles.editForm}>
					<input
						className={styles.editInput}
						name='edit'
						type='text'
						value={text}
						onChange={(e) => setText(e.target.value)}
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
