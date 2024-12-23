import styles from './todoform.module.css';
import PropTypes from 'prop-types';

export const Todoform = ({
	value,
	onChange,
	requestAddNewTodo,
	editingTodoId,
	requestEditTodo,
}) => {
	const handleOnSubmit = (event) => {
		event.preventDefault();
		if (editingTodoId) {
			requestEditTodo(editingTodoId, { title: value, completed: false });
			onChange('');
		} else if (value) {
			requestAddNewTodo({ title: value, completed: false });
			onChange('');
		}
	};

	return (
		<>
			<h1>TO DO LIST</h1>
			<form onSubmit={handleOnSubmit}>
				<input
					type="text"
					name="todo"
					id="todo"
					value={value}
					onChange={({ target }) => onChange(target.value)} // Используем onChange
					placeholder="Заполнить список дел..."
				/>
				<button className={styles.newtodo}>
					{editingTodoId ? 'Обновить запись' : 'Записать'}
				</button>
			</form>
		</>
	);
};

Todoform.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	requestAddNewTodo: PropTypes.func,
	editingTodoId: PropTypes.string,
	requestEditTodo: PropTypes.func,
};
