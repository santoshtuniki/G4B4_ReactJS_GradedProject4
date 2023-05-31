import React, { useState, useEffect, useContext } from "react";
import { Alert, Row, Col } from "react-bootstrap";

import { LoadingStatus } from "../../model/type";
import LoadingIndicator from "../common/LoadingIndicator";
import IMovie from "../../model/IMovie";
import MovieListItem from "../movie-items/MovieListItem";
import getUpcomingMovies from "../../service/ComingSoonService";
import { SearchContext } from "../common/SearchContext";

const UpcomingMovies = () => {

	const [status, setStatus] = useState<LoadingStatus>('LOADING');
	const [movies, setMovies] = useState<IMovie[]>([]);
	const [error, setError] = useState<Error | null>(null);
	const [data, setData] = useState<IMovie[]>([]);

	const { searchText } = useContext<any>(SearchContext);

	useEffect(() => {
		const fetchMoviesData = async () => {
			try {
				const data = await getUpcomingMovies();
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
			element = data.length === 0 ? (
				<div className="text-center my-5" >No data Found</div>
			) : (
				<Row xs={1} sm={2} md={3} lg={5}>
					{
						data?.map(
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

export default UpcomingMovies;