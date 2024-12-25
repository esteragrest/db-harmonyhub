import { ref, set } from 'firebase/database';
import { todos_db } from '../firebase';
import { useState } from 'react';

export const useRequestEditingTodo = (setEditingTodoId) => {
	const [isUpdatingTitle, setIsUpdatingTitle] = useState(false);
	const requestEditTodo = (id, updatingTodo) => {
		setIsUpdatingTitle(true);
		const todoDbRef = ref(todos_db, `todos/${id}`);

		set(todoDbRef, updatingTodo)
			.then((response) => {
				console.log('Дело обновлено, ответ сервера: ', response);
				setEditingTodoId(null);
			})
			.finally(() => setIsUpdatingTitle(false));
	};

	return [requestEditTodo, isUpdatingTitle];
};
