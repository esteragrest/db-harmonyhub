export const useRequestAddNewTodo = (refreshTodos) => {
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

	return requestAddNewTodo;
};
