import styles from './TodoList.module.css';
import { TodoItem } from '../TodoItem';

export const TodoList = ({ isSorted, sortedTodos, filteredTodos, deleteTodo, updateTodo }) => (
	<ul className={styles.list}>
		{isSorted
			? sortedTodos.map(([id, { ...props }]) => (
					<TodoItem key={id} {...props} id={id} deleteTodo={deleteTodo} updateTodo={updateTodo} />
				))
			: Object.entries(filteredTodos).map(([id, { ...props }]) => (
					<TodoItem key={id} {...props} id={id} deleteTodo={deleteTodo} updateTodo={updateTodo} />
				))}
	</ul>
);
