import React, { useState, useEffect } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import LoadingIndicator from '../common/LoadingIndicator';
import { LoadingStatus } from '../../model/type';
import IMovie from '../../model/IMovie';
import getMovieDetails from '../../service/MovieDetailsService';
import { useLocation } from 'react-router-dom';

import './movie-details.css';

const MovieDetails = () => {
	const [status, setStatus] = useState<LoadingStatus>('LOADING');
	const [movie, setMovie] = useState<IMovie | null>(null);
	const [error, setError] = useState<Error | null>(null);

	const location = useLocation();

	useEffect(() => {
		const fetchData = async () => {
			try {
				let data = await getMovieDetails(`${location.pathname}`)
				setMovie(data);
				setStatus('LOADED');
			} catch (error: any) {
				setError(error);
				setStatus('ERROR_LOADING');
			}
		}
		fetchData();
	}, [location]);

	let element;

	switch (status) {
		case 'LOADING':
			element = (
				<LoadingIndicator
					size="large"
					message="We are fetching the details of the restaurant. Please wait..."
				/>
			);
			break;
		case 'LOADED':
			const {
				title,
				genres,
				contentRating,
				averageRating,
				imdbRating,
				releaseDate,
				actors,
				storyline,
				posterurl
			} = movie as IMovie;

			element = (
				<>
					<Row>
						<Col xs={12} lg={4} className="my-2">
							<img src={`${posterurl}`} alt={title} className='w-100' />
						</Col>
						<Col xs={12} lg={8} className="my-2">
							<Row className='mt-2'>
								<Col><h3>{title}</h3></Col>
							</Row>
							<Row className='mt-2'>
								<Col xs={3} className='bold'>Imdb Rating</Col>
								<Col xs={9}>{imdbRating}</Col>
							</Row>
							<Row className='mt-2'>
								<Col xs={3} className='bold'>Content Rating</Col>
								<Col xs={9}>{contentRating}</Col>
							</Row>
							<Row className='mt-2'>
								<Col xs={3} className='bold'>Average Rating</Col>
								<Col xs={9}>{averageRating}</Col>
							</Row>
							<Row className='mt-2'>
								<Col xs={3} className='bold'>Genres</Col>
								<Col xs={9}>{genres}</Col>
							</Row>
							<Row className='mt-2'>
								<Col xs={3} className='bold'>Actors</Col>
								<Col xs={9}>{actors}</Col>
							</Row>
							<Row className='mt-2'>
								<Col xs={3} className='bold'>Release Date</Col>
								<Col xs={9}>{releaseDate}</Col>
							</Row>
							<Row className='mt-2'>
								<Col xs={3} className='bold'>Storyline</Col>
								<Col xs={9}>{storyline}</Col>
							</Row>
						</Col>
					</Row>
				</>
			);
			break;
		case 'ERROR_LOADING':
			element = (
				<Alert variant="danger my-3">
					{error?.message}
				</Alert>
			);
			break;
	}

	return element;
};

export default MovieDetails