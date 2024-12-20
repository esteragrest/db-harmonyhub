import { useEffect } from 'react';
import styles from './app.module.css';
import { useState } from 'react';
import { Todolist } from './components/todos/Todolist';
import { Todoform } from './components/todoform/Todoform';

export const App = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedToDos) => {
				setTodos(loadedToDos);
				console.log(loadedToDos);
			})
			.catch(() => {
				console.log('Ошибка загрузки дел');
			});
	}, []);

	return (
		<div className={styles.app}>
			<div className={styles['to-do-list-container']}>
				<Todoform />
				<Todolist todos={todos} />
			</div>
		</div>
	);
};
