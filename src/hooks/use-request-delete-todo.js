import { useState } from 'react';

export const useRequestDeletetodo = (refreshTodos) => {
	const [isDelete, setIsDelete] = useState(false);
	const requestDeleteTodo = (id) => {
		setIsDelete(true);

		fetch(`http://localhost:3000/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Дело удалено, ответ сервера: ', response);
				refreshTodos();
			})
			.finally(() => setIsDelete(false));
	};

	return [requestDeleteTodo, isDelete];
};
