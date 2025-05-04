import { useSelector } from 'react-redux';
import { TodoItem } from '../TodoItem';
import { selectFilteredTodos } from '../../redux/selectors/todosSelectors';
import styles from './TodoList.module.css';

export const TodoList = () => {
	const todos = useSelector(selectFilteredTodos);

	return (
		<ul className={styles.todoList}>
			{todos.map((todo) => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</ul>
	);
};
