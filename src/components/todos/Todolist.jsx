import styles from './todolist.module.css';
import PropTypes from 'prop-types';

export const Todolist = ({ todos }) => {
	return (
		<div className={styles.todos}>
			{todos.map(({ id, title }) => {
				return (
					<div className={styles.todo} key={id}>
						<p>{title}</p>
					</div>
				);
			})}
		</div>
	);
};

Todolist.propTypes = {
	todos: PropTypes.array,
};
