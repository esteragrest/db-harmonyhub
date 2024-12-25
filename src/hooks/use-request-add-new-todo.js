import { ref, push } from 'firebase/database';
import { todos_db } from '../firebase';
import { useState } from 'react';

export const useRequestAddNewTodo = () => {
	const [isCreating, setIsCreating] = useState(false);
	const requestAddNewTodo = (newTodo) => {
		setIsCreating(true);
		const todosDbRef = ref(todos_db, 'todos');

		push(todosDbRef, newTodo)
			.then((response) => {
				console.log('Новое дело добавлено, ответ сервера: ', response);
			})
			.finally(() => setIsCreating(false));
	};

	return [requestAddNewTodo, isCreating];
};
