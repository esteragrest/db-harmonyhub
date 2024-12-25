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
						<div className={styles.buttons}>
							<button onClick={() => onToggle(id)}>
								<img src="../../../img/completed-icon.png" />
							</button>
							<button onClick={() => onEdit(id)}>
								<img src="../../../img/edit-icon.png" />
							</button>
							<button onClick={() => onDelete(id)}>
								<img src="../../../img/delete-icon.png" />
							</button>
						</div>
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
