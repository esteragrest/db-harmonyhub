export const useRequestDeletetodo = (refreshTodos) => {
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

	return requestDeleteTodo;
};
