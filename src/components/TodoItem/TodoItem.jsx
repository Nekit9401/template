import { useState, useEffect } from 'react';
import styles from './TodoItem.module.css';
import { useNavigate, useParams } from 'react-router-dom';

export const TodoItem = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [todo, setTodo] = useState({});
	const [text, setText] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchTodo = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(`http://localhost:3000/todos/${id}`);
				if (!response.ok) {
					if (response.status === 404) {
						navigate('/404');
						return;
					}
				}
				const loadedTodo = await response.json();
				setTodo(loadedTodo);
				setText(loadedTodo.title);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchTodo();
	}, [id, navigate]);

	const updateTodo = async (id, payLoad) => {
		setIsLoading(true);
		try {
			const response = await fetch(`http://localhost:3000/todos/${id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payLoad),
			});
			const updatedTodo = await response.json();
			setTodo(updatedTodo);
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const deleteTodo = async (id) => {
		setIsLoading(true);
		try {
			fetch(`http://localhost:3000/todos/${id}`, {
				method: 'DELETE',
			});
			navigate('/');
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const handleEdit = () => {
		setIsEditing(!isEditing);
	};

	const handleSave = (event) => {
		event.preventDefault();
		updateTodo(todo.id, { title: text });
		setIsEditing(!isEditing);
	};

	if (isLoading) {
		return <h1>Загрузка...</h1>;
	}
	if (error) {
		return <h2>{error}</h2>;
	}

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
					<button className={styles.backButton} onClick={() => navigate(-1)}>
						Назад
					</button>
					<h1>{todo.title}</h1>
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
