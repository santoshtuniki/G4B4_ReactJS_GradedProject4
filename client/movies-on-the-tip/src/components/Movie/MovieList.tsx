import React, { useState } from "react";
import { Alert, Row, Col } from "react-bootstrap";

import { LoadingStatus } from "../../model/type";
import LoadingIndicator from "../common/LoadingIndicator";
import IMovie from "../../model/IMovie";
import MovieListItem from "./MovieListItem";

const movieExample = [
	{
		"id": "1",
		"title": "Game Night",
		"year": "2018",
		"genres": [
			"Action",
			"Comedy",
			"Crime"
		],
		"ratings": [
			2,
			10,
			1,
			10,
			6,
			2,
			5,
			2,
			9,
			7,
			5,
			3,
			7,
			7,
			1,
			4,
			5,
			9,
			2,
			8,
			10,
			8,
			1,
			10,
			7,
			10,
			8,
			6,
			7,
			6
		],
		"poster": "MV5BMjQxMDE5NDg0NV5BMl5BanBnXkFtZTgwNTA5MDE2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
		"contentRating": "11",
		"duration": "PT100M",
		"releaseDate": "2018-02-28",
		"averageRating": 0,
		"originalTitle": "",
		"storyline": "A group of friends who meet regularly for game nights find themselves trying to solve a murder mystery.",
		"actors": [
			"Rachel McAdams",
			"Jesse Plemons",
			"Jason Bateman"
		],
		"imdbRating": "",
		"posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQxMDE5NDg0NV5BMl5BanBnXkFtZTgwNTA5MDE2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg"
	},
	{
		"id": "2",
		"title": "Area X: Annihilation",
		"year": "2018",
		"genres": [
			"Adventure",
			"Drama",
			"Fantasy"
		],
		"ratings": [
			1,
			10,
			4,
			9,
			10,
			1,
			9,
			3,
			4,
			4,
			3,
			2,
			3,
			3,
			1,
			1,
			6,
			7,
			10,
			7,
			7,
			8,
			1,
			3,
			10,
			3,
			1,
			9,
			7,
			3
		],
		"poster": "MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_SY500_CR0,0,320,500_AL_.jpg",
		"contentRating": "R",
		"duration": "",
		"releaseDate": "2018-02-23",
		"averageRating": 0,
		"originalTitle": "Annihilation",
		"storyline": "A biologist's husband disappears. She puts her name forward for an expedition into an environmental disaster zone, but does not find what she's expecting. The expedition team is made up of the biologist, an anthropologist, a psychologist, a surveyor, and a linguist.",
		"actors": [
			"Tessa Thompson",
			"Jennifer Jason Leigh",
			"Natalie Portman"
		],
		"imdbRating": "",
		"posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_SY500_CR0,0,320,500_AL_.jpg"
	},
	{
		"id": "3",
		"title": "Hannah",
		"year": "2017",
		"genres": [
			"Drama"
		],
		"ratings": [
			1,
			10,
			4,
			9,
			10,
			1,
			9,
			3,
			4,
			4,
			3,
			2,
			3,
			3,
			1,
			1,
			6,
			7,
			10,
			7,
			7,
			8,
			1,
			3,
			10,
			3,
			1,
			9,
			7,
			3
		],
		"poster": "MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SY500_SX350_AL_.jpg",
		"contentRating": "",
		"duration": "PT95M",
		"releaseDate": "2018-01-24",
		"averageRating": 0,
		"originalTitle": "",
		"storyline": "Intimate portrait of a woman drifting between reality and denial when she is left alone to grapple with the consequences of her husband's imprisonment.",
		"actors": [
			"Charlotte Rampling",
			"André Wilms",
			"Stéphanie Van Vyve"
		],
		"imdbRating": 6.5,
		"posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SY500_SX350_AL_.jpg"
	},
	{
		"id": "4",
		"title": "Hannah",
		"year": "2017",
		"genres": [
			"Drama"
		],
		"ratings": [
			1,
			10,
			4,
			9,
			10,
			1,
			9,
			3,
			4,
			4,
			3,
			2,
			3,
			3,
			1,
			1,
			6,
			7,
			10,
			7,
			7,
			8,
			1,
			3,
			10,
			3,
			1,
			9,
			7,
			3
		],
		"poster": "MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SY500_SX350_AL_.jpg",
		"contentRating": "",
		"duration": "PT95M",
		"releaseDate": "2018-01-24",
		"averageRating": 0,
		"originalTitle": "",
		"storyline": "Intimate portrait of a woman drifting between reality and denial when she is left alone to grapple with the consequences of her husband's imprisonment.",
		"actors": [
			"Charlotte Rampling",
			"André Wilms",
			"Stéphanie Van Vyve"
		],
		"imdbRating": 6.5,
		"posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SY500_SX350_AL_.jpg"
	},
	{
		"id": "5",
		"title": "Hannah",
		"year": "2017",
		"genres": [
			"Drama"
		],
		"ratings": [
			1,
			10,
			4,
			9,
			10,
			1,
			9,
			3,
			4,
			4,
			3,
			2,
			3,
			3,
			1,
			1,
			6,
			7,
			10,
			7,
			7,
			8,
			1,
			3,
			10,
			3,
			1,
			9,
			7,
			3
		],
		"poster": "MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SY500_SX350_AL_.jpg",
		"contentRating": "",
		"duration": "PT95M",
		"releaseDate": "2018-01-24",
		"averageRating": 0,
		"originalTitle": "",
		"storyline": "Intimate portrait of a woman drifting between reality and denial when she is left alone to grapple with the consequences of her husband's imprisonment.",
		"actors": [
			"Charlotte Rampling",
			"André Wilms",
			"Stéphanie Van Vyve"
		],
		"imdbRating": 6.5,
		"posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SY500_SX350_AL_.jpg"
	},
	{
		"id": "6",
		"title": "Hannah",
		"year": "2017",
		"genres": [
			"Drama"
		],
		"ratings": [
			1,
			10,
			4,
			9,
			10,
			1,
			9,
			3,
			4,
			4,
			3,
			2,
			3,
			3,
			1,
			1,
			6,
			7,
			10,
			7,
			7,
			8,
			1,
			3,
			10,
			3,
			1,
			9,
			7,
			3
		],
		"poster": "MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SY500_SX350_AL_.jpg",
		"contentRating": "",
		"duration": "PT95M",
		"releaseDate": "2018-01-24",
		"averageRating": 0,
		"originalTitle": "",
		"storyline": "Intimate portrait of a woman drifting between reality and denial when she is left alone to grapple with the consequences of her husband's imprisonment.",
		"actors": [
			"Charlotte Rampling",
			"André Wilms",
			"Stéphanie Van Vyve"
		],
		"imdbRating": 6.5,
		"posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SY500_SX350_AL_.jpg"
	},
	{
		"id": "7",
		"title": "Hannah",
		"year": "2017",
		"genres": [
			"Drama"
		],
		"ratings": [
			1,
			10,
			4,
			9,
			10,
			1,
			9,
			3,
			4,
			4,
			3,
			2,
			3,
			3,
			1,
			1,
			6,
			7,
			10,
			7,
			7,
			8,
			1,
			3,
			10,
			3,
			1,
			9,
			7,
			3
		],
		"poster": "MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SY500_SX350_AL_.jpg",
		"contentRating": "",
		"duration": "PT95M",
		"releaseDate": "2018-01-24",
		"averageRating": 0,
		"originalTitle": "",
		"storyline": "Intimate portrait of a woman drifting between reality and denial when she is left alone to grapple with the consequences of her husband's imprisonment.",
		"actors": [
			"Charlotte Rampling",
			"André Wilms",
			"Stéphanie Van Vyve"
		],
		"imdbRating": 6.5,
		"posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SY500_SX350_AL_.jpg"
	}
];

const MovieList = () => {

	const [status, setStatus] = useState<LoadingStatus>('LOADED');
	const [movies, setMovies] = useState<IMovie[]>(movieExample);
	const [error, setError] = useState<Error | null>(null);

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

export default MovieList;