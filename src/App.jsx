import {
	useRequestGetTodos,
	useRequestAddNewTodo,
	useRequestEditingTodo,
	useRequestDeletetodo,
	useRequestCompletedTodo,
} from './hooks';
import styles from './app.module.css';
import { useState } from 'react';
import { Todolist } from './components/todos/Todolist';
import { Todoform } from './components/todoform/Todoform';
import { SearchForm } from './components/searchform/Searchform';

export const App = () => {
	const [todoValue, setTodoValue] = useState('');
	const [editingTodoId, setEditingTodoId] = useState(null);
	const [isSorted, setIsSorted] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const toggleSorted = () => {
		setIsSorted(!isSorted);
	};

	const [todosObject, isLoading] = useRequestGetTodos();
	const todos = Object.entries(todosObject).map(([id, todo]) => ({ id, ...todo }));
	const [requestAddNewTodo, isCreating] = useRequestAddNewTodo();
	const [requestEditTodo, isUpdatingTitle] = useRequestEditingTodo(setEditingTodoId);
	const [requestDeleteTodo, isDelete] = useRequestDeletetodo();
	const [requestCompletedTodo, isUpdatingCompleted] = useRequestCompletedTodo(
		todos,
		setEditingTodoId,
	);

	const handleEditTodo = (id) => {
		const todoToEdit = todos.find((todo) => todo.id === id);
		setTodoValue(todoToEdit.title);
		setEditingTodoId(id);
	};

	const sortedTodos = isSorted
		? [...todos].sort((a, b) => a.title.localeCompare(b.title))
		: todos;

	const filteredTodos = sortedTodos.filter((todo) =>
		todo.title.toLowerCase().includes(searchValue),
	);
	return (
		<div className={styles.app}>
			<div className={styles['to-do-list-container']}>
				{isLoading ? (
					<div className="loader">Loading...</div>
				) : (
					<>
						<Todoform
							value={todoValue}
							onChange={setTodoValue}
							requestAddNewTodo={requestAddNewTodo}
							editingTodoId={editingTodoId}
							requestEditTodo={requestEditTodo}
							isSorted={isSorted}
							toggleSorted={toggleSorted}
							isCreating={isCreating}
							isUpdatingTitle={isUpdatingTitle}
						/>
						<SearchForm value={searchValue} setSearchValue={setSearchValue} />
						<Todolist
							todos={filteredTodos}
							onDelete={requestDeleteTodo}
							onEdit={handleEditTodo}
							onToggle={requestCompletedTodo}
							isUpdatingTitle={isUpdatingTitle}
							isUpdatingCompleted={isUpdatingCompleted}
							isDelete={isDelete}
						/>
					</>
				)}
			</div>
		</div>
	);
};
