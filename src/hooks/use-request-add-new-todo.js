import { useState } from 'react';

export const useRequestAddNewTodo = (refreshTodos) => {
	const [isCreating, setIsCreating] = useState(false);
	const requestAddNewTodo = (newTodo) => {
		setIsCreating(true);
		fetch('http://localhost:3000/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(newTodo),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Новое дело добавлено, ответ сервера: ', response);
				refreshTodos();
			})
			.finally(() => setIsCreating(false));
	};

	return [requestAddNewTodo, isCreating];
};
