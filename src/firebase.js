import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyD5omcwUATOcWCE-M8GBM7tkUwNhW_pmRI',
	authDomain: 'todolist-78802.firebaseapp.com',
	projectId: 'todolist-78802',
	storageBucket: 'todolist-78802.firebasestorage.app',
	messagingSenderId: '821772025821',
	appId: '1:821772025821:web:fc7971da3eeb03a6928034',
	databaseURL: 'https://todolist-78802-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const todos_db = getDatabase(app);
