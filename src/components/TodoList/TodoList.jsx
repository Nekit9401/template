import { TitleTodo } from '../TitleTodo';

import styles from './TodoList.module.css';

export const TodoList = ({ todoData }) => {
	return (
		<ul className={styles.todoList}>
			{todoData.map((todo) => (
				<TitleTodo key={todo.id} {...todo} />
			))}
		</ul>
	);
};
