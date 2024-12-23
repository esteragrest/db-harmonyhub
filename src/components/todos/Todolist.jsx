import styles from './todolist.module.css';
import PropTypes from 'prop-types';

export const Todolist = ({ todos, onDelete, onEdit, onToggle }) => {
	return (
		<div className={styles.todos}>
			{todos.map(({ id, title, completed }) => {
				return (
					<div className={styles.todo} key={id}>
						<p
							style={{
								textDecoration: completed ? 'line-through' : 'none',
							}}
						>
							{title}
						</p>
						<button onClick={() => onToggle(id)}>
							{completed ? 'Не выполнено' : 'Выполнено'}
						</button>
						<button onClick={() => onEdit(id)}>Редактировать</button>
						<button onClick={() => onDelete(id)}>Удалить</button>
					</div>
				);
			})}
		</div>
	);
};

Todolist.propTypes = {
	todos: PropTypes.array.isRequired,
	onDelete: PropTypes.func.isRequired,
	onEdit: PropTypes.func.isRequired,
	onToggle: PropTypes.func.isRequired,
};
