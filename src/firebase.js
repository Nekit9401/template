import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyA8I5RwcKX4CUMEmKkrxSNo5E_MSlL616w',
	authDomain: 'todosproject-cb275.firebaseapp.com',
	projectId: 'todosproject-cb275',
	storageBucket: 'todosproject-cb275.firebasestorage.app',
	messagingSenderId: '458895623459',
	appId: '1:458895623459:web:7cfff7db9f985761743896',
	databaseURL: 'https://todosproject-cb275-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
