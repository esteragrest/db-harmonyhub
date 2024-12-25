export const useRequestEditingTodo = (refreshTodos, setEditingTodoId) => {
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

	return requestEditTodo;
};
