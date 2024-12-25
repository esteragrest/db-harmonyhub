import { ref, set } from 'firebase/database';
import { todos_db } from '../firebase';
import { useState } from 'react';

export const useRequestCompletedTodo = (todos, setEditingTodoId) => {
	const [isUpdatingCompleted, setIsUpdatingCompleted] = useState(false);
	const requestCompletedTodo = (id) => {
		setIsUpdatingCompleted(true);
		const todoToToggle = todos.find((todo) => todo.id === id);
		const tododbRef = ref(todos_db, `todos/${id}`);

		set(tododbRef, { ...todoToToggle, completed: !todoToToggle.completed })
			.then((response) => {
				console.log('Дело обновлено, ответ сервера: ', response);
				setEditingTodoId(null);
			})
			.finally(() => setIsUpdatingCompleted(false));
	};

	return [requestCompletedTodo, isUpdatingCompleted];
};
