import { useState, useEffect } from 'react';

export const useRequestGetTodos = (refreshTodosFlag) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch('http://localhost:3000/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedToDos) => {
				setTodos(loadedToDos);
			})
			.catch(() => {
				console.log('Ошибка загрузки дел');
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [refreshTodosFlag]);

	return [todos, isLoading];
};
