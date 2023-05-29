import React, { useState, useEffect } from "react";
import { Alert, Row, Col } from "react-bootstrap";

import { LoadingStatus } from "../../model/type";
import LoadingIndicator from "../common/LoadingIndicator";
import IMovie from "../../model/IMovie";
import MovieListItem from "../movie-items/MovieListItem";
import getTopRatedMovies from "../../service/TopRated";

const TopRatedMovies = () => {

	const [status, setStatus] = useState<LoadingStatus>('LOADING');
	const [movies, setMovies] = useState<IMovie[]>([]);
	const [error, setError] = useState<Error | null>(null);

	useEffect(
		() => {
			const fetchMoviesData = async () => {
				try {
					const data = await getTopRatedMovies();
					setMovies(data);
					setStatus('LOADED');
				} catch (error: any) {
					setError(error);
					setStatus('ERROR_LOADING');
				}
			}
			fetchMoviesData();
		}, []
	)

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
									<MovieListItem movie={movie} />
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

export default TopRatedMovies;