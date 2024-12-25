import styles from './todoform.module.css';
import PropTypes from 'prop-types';

export const Todoform = ({
	value,
	onChange,
	requestAddNewTodo,
	editingTodoId,
	requestEditTodo,
	isSorted,
	toggleSorted,
	isCreating,
	isUpdatingTitle,
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
			<form className={styles.form} onSubmit={handleOnSubmit}>
				<input
					type="text"
					name="todo"
					id="todo"
					value={value}
					onChange={({ target }) => onChange(target.value)}
					placeholder="Заполнить список дел..."
				/>
				<div className={styles.buttonContainer}>
					<button
						className={styles.newtodo}
						disabled={isCreating && isUpdatingTitle}
					>
						{editingTodoId ? 'Обновить запись' : 'Записать'}
					</button>
					<button
						className={isSorted ? styles.sortButtonOff : styles.sortButtonOn}
						onClick={toggleSorted}
					>
						Дела по алфавиту
					</button>
				</div>
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
	isSorted: PropTypes.bool,
	toggleSorted: PropTypes.func,
	isCreating: PropTypes.bool,
	isUpdatingTitle: PropTypes.bool,
};
