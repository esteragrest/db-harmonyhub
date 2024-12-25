import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { todos_db } from '../firebase';

export const useRequestGetTodos = () => {
	const [todos, setTodos] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const todosDbRef = ref(todos_db, 'todos');

		return onValue(todosDbRef, (snapshot) => {
			const loadedToDos = snapshot.val() || {};
			setTodos(loadedToDos);

			setIsLoading(false);
		});
	}, []);

	return [todos, isLoading];
};
