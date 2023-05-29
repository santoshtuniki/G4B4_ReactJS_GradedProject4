import React, { useState, useEffect, useContext } from "react";
import { Alert, Row, Col } from "react-bootstrap";

import { LoadingStatus } from "../../model/type";
import LoadingIndicator from "../common/LoadingIndicator";
import IMovie from "../../model/IMovie";
import FavouritesListItem from "../movie-items/FavouritesListItem";
import { SearchContext } from "../common/SearchContext";
import { getFavouriteMovies, removeFromFavourites } from "../../service/FavouritesService";

const FavouriteMovies = () => {

	const [status, setStatus] = useState<LoadingStatus>('LOADING');
	const [movies, setMovies] = useState<IMovie[]>([]);
	const [error, setError] = useState<Error | null>(null);
	const [data, setData] = useState<IMovie[]>([]);

	const { searchText } = useContext<any>(SearchContext);

	useEffect(() => {
		const fetchMoviesData = async () => {
			try {
				const data = await getFavouriteMovies();
				setMovies(data);
				setData(data);
				setStatus('LOADED');
			} catch (error: any) {
				setError(error);
				setStatus('ERROR_LOADING');
			}
		}
		fetchMoviesData();
	}, []);

	useEffect(() => {
		const filteredData = searchText ? movies.filter((movie) =>
			movie.title.toLowerCase().includes(searchText.toLowerCase())
		) : movies;
		setData(() => filteredData);
	}, [searchText, movies]);

	const handleDeleteMovie = async (id: string) => {
		try {
			await removeFromFavourites(id);
			setTimeout(() => {
				setMovies(
					(prevMovies) => prevMovies.filter((movie) => movie.id !== id)
				);
				setData(movies);
			}, 800)
		} catch (error: any) {
			setError(error);
			setStatus("ERROR_LOADING");
		}
	};

	let element;

	switch (status) {
		case "LOADING":
			element = (
				<LoadingIndicator
					size="large"
					message="We are fetching the movies. Please wait..."
				/>
			);
			break;
		case "LOADED":
			element = (
				<Row xs={1} sm={2} md={3} lg={5}>
					{
						data?.map(
							movie => (
								<Col key={movie.id} className="d-flex align-items-stretch my-3">
									<FavouritesListItem
										movie={movie}
										onDelete={handleDeleteMovie} // Pass the onDelete callback
									/>
								</Col>
							)
						)
					}
				</Row>
			);
			break;
		case "ERROR_LOADING":
			element = (
				<Alert variant="danger my-3">
					{error?.message}
				</Alert>
			);
			break;
	}

	return element;
};

export default FavouriteMovies;