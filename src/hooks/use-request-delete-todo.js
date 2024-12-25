import { ref, remove } from 'firebase/database';
import { todos_db } from '../firebase';
import { useState } from 'react';

export const useRequestDeletetodo = () => {
	const [isDelete, setIsDelete] = useState(false);
	const requestDeleteTodo = (id) => {
		setIsDelete(true);
		const todoDbRef = ref(todos_db, `todos/${id}`);

		remove(todoDbRef)
			.then((response) => {
				console.log('Дело удалено, ответ сервера: ', response);
			})
			.finally(() => setIsDelete(false));
	};

	return [requestDeleteTodo, isDelete];
};
