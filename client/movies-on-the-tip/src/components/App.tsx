import React from 'react';

import NavigationMenu from './NavigationMenu';
import MovieList from './Movie/MovieList';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

const App = () => {
	return (
		<div className="App mx-3">
			<NavigationMenu />
			<MovieList />
		</div>
	);
}

export default App;
