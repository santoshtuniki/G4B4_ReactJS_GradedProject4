import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { SearchProvider } from './common/SearchContext';

import NavigationMenu from './NavigationMenu';
import UpcomingMovies from './movies/UpcomingMovies';
import InTheatersMovies from './movies/InTheaterMovies';
import TopIndianMovies from './movies/TopIndianMovies';
import TopRatedMovies from './movies/TopRatedMovies';
import FavouriteMovies from './movies/FavouriteMovies';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import MovieDetails from './movie-details/MovieDetails';

const App = () => {
	return (
		<div className="App mx-3">
			<SearchProvider>
				<NavigationMenu />
				<div className="px-4">
					<Routes>
						<Route path="/" element={<Navigate to="/movies-coming" replace />} />
						<Route path='/movies-coming' >
							<Route index element={<UpcomingMovies />} />
							<Route path=':id' element={<MovieDetails />} />
						</Route>
						<Route path='/movies-in-theaters' >
							<Route index element={<InTheatersMovies />} />
							<Route path=':id' element={<MovieDetails />} />
						</Route>
						<Route path='/top-rated-india' >
							<Route index element={<TopIndianMovies />} />
							<Route path=':id' element={<MovieDetails />} />
						</Route>
						<Route path='/top-rated-movies' >
							<Route index element={<TopRatedMovies />} />
							<Route path=':id' element={<MovieDetails />} />
						</Route>
						<Route path='/favourite' >
							<Route index element={<FavouriteMovies />} />
							<Route path=':id' element={<MovieDetails />} />
						</Route>
					</Routes>
				</div>
			</SearchProvider>
		</div>
	);
}

export default App;
