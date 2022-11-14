import './App.css';

import {ThemeProvider} from '@mui/material';
import React from 'react';
import {RouterProvider} from 'react-router-dom';

import {browserRouter} from './router';
import {theme} from './theme';

function App() {
	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<RouterProvider router={browserRouter} />
			</ThemeProvider>
		</div>
	);
}

export default App;
