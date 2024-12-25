import { useState } from 'react';

export const useRequestEditingTodo = (refreshTodos, setEditingTodoId) => {
	const [isUpdatingTitle, setIsUpdatingTitle] = useState(false);
	const requestEditTodo = (id, updatingTodo) => {
		setIsUpdatingTitle(true);

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
			})
			.finally(() => setIsUpdatingTitle(false));
	};

	return [requestEditTodo, isUpdatingTitle];
};
