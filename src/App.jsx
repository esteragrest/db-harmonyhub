import { useEffect } from 'react';
import styles from './app.module.css';
import { useState } from 'react';
import { Todolist } from './components/todos/Todolist';
import { Todoform } from './components/todoform/Todoform';

export const App = () => {
	const [todos, setTodos] = useState([]);
	const [todoValue, setTodoValue] = useState('');
	const [editingTodoId, setEditingTodoId] = useState(null);
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

	useEffect(() => {
		fetch('http://localhost:3000/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedToDos) => {
				setTodos(loadedToDos);
			})
			.catch(() => {
				console.log('Ошибка загрузки дел');
			});
	}, [refreshTodosFlag]);

	const requestAddNewTodo = (newTodo) => {
		fetch('http://localhost:3000/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(newTodo),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Новое дело добавлено, ответ сервера: ', response);
				refreshTodos();
			});
	};

	const requestEditTodo = (id, updatingTodo) => {
		fetch(`http://localhost:3000/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(updatingTodo),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Дело обновлено, ответ сервера: ', response);
				setEditingTodoId(null);
				refreshTodos();
			});
	};

	const requestDeleteTodo = (id) => {
		fetch(`http://localhost:3000/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Дело удалено, ответ сервера: ', response);
				refreshTodos();
			});
	};

	const requestCompletedTodo = (id) => {
		const todoToToggle = todos.find((todo) => todo.id === id);

		fetch(`http://localhost:3000/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ ...todoToToggle, completed: !todoToToggle.completed }),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Дело обновлено, ответ сервера: ', response);
				setEditingTodoId(null);
				refreshTodos();
			});
	};

	const handleEditTodo = (id) => {
		const todoToEdit = todos.find((todo) => todo.id === id);
		setTodoValue(todoToEdit.title);
		setEditingTodoId(id);
	};

	return (
		<div className={styles.app}>
			<div className={styles['to-do-list-container']}>
				<Todoform
					value={todoValue}
					onChange={setTodoValue}
					requestAddNewTodo={requestAddNewTodo}
					editingTodoId={editingTodoId}
					requestEditTodo={requestEditTodo}
				/>
				<Todolist
					todos={todos}
					onDelete={requestDeleteTodo}
					onEdit={handleEditTodo}
					onToggle={requestCompletedTodo}
				/>
			</div>
		</div>
	);
};
