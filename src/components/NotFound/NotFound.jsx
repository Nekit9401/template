import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export const NotFound = () => {
	return (
		<div className={styles.container}>
			<h1>404 - Страница не найдена</h1>
			<p>Запрошенная вами страница не существует.</p>
			<Link to='/' className={styles.link}>
				Вернуться на главную
			</Link>
		</div>
	);
};
