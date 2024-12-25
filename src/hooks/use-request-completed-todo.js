export const useRequestCompletedTodo = (todos, refreshTodos, setEditingTodoId) => {
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

	return requestCompletedTodo;
};
