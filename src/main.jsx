import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { TodoItem } from './components/TodoItem';
import { NotFound } from './components/NotFound';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/todos/:id' element={<TodoItem />} />
				<Route path='/404' element={<NotFound />} />
				<Route path='*' element={<Navigate to='/404' />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
