import { TodoItem } from '../TodoItem';
import styles from './TodoList.module.css';

export const TodoList = ({ todoData, deleteTodo, updateTodo }) => {
	return (
		<ul className={styles.todoList}>
			{todoData.map((todo) => (
				<TodoItem key={todo.id} {...todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
			))}
		</ul>
	);
};
