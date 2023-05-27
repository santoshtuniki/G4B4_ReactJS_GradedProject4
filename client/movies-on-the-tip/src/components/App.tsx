import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NavigationMenu from './NavigationMenu';
import UpcomingMovies from './movies/UpcomingMovies';
import InTheatersMovies from './movies/InTheaterMovies';
import TopIndianMovies from './movies/TopIndianMovies';
import TopRatedMovies from './movies/TopRatedMovies';
import FavouriteMovies from './movies/FavouriteMovies';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

const App = () => {
	return (
		<div className="App mx-3">
			<NavigationMenu />

			<div className="px-4">
				<Routes>
					<Route path='/' element={<UpcomingMovies />} />
					<Route path='/inTheater' element={<InTheatersMovies />} />
					<Route path='/topIndian' element={<TopIndianMovies />} />
					<Route path='/topRated' element={<TopRatedMovies />} />
					<Route path='/favourites' element={<FavouriteMovies />} />
				</Routes>
			</div>

		</div>
	);
}

export default App;
