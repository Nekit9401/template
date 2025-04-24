import { Link } from 'react-router-dom';
import { TitleTodo } from '../TitleTodo';

import styles from './TodoList.module.css';

export const TodoList = ({ todoData }) => {
	return (
		<ul className={styles.todoList}>
			{todoData.map((todo) => (
				<Link key={todo.id} to={`todos/${todo.id}`}>
					<TitleTodo key={todo.id} {...todo} />
				</Link>
			))}
		</ul>
	);
};
