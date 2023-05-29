import React, { useState, useEffect } from "react";
import { Alert, Row, Col } from "react-bootstrap";

import { LoadingStatus } from "../../model/type";
import LoadingIndicator from "../common/LoadingIndicator";
import IMovie from "../../model/IMovie";
import FavouritesListItem from "../movie-items/FavouritesListItem";
import { getFavouriteMovies, removeFromFavourites } from "../../service/FavouritesService";

const FavouriteMovies = () => {

	const [status, setStatus] = useState<LoadingStatus>('LOADING');
	const [movies, setMovies] = useState<IMovie[]>([]);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchMoviesData = async () => {
			try {
				const data = await getFavouriteMovies();
				setMovies(data);
				setStatus('LOADED');
			} catch (error: any) {
				setError(error);
				setStatus('ERROR_LOADING');
			}
		}
		fetchMoviesData();
	}, []);

	const handleDeleteMovie = async (id: string) => {
		try {
			await removeFromFavourites(id);
			setTimeout(() => {
				setMovies((prevMovies) =>
					prevMovies.filter((movie) => movie.id !== id)
				)
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
						movies?.map(
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