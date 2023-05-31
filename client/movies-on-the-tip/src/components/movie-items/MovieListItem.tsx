import React, { useState } from "react";
import { Card, Button, Toast, ToastContainer } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import IMovie from "../../model/IMovie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToFavourites } from "../../service/FavouritesService";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

import './list-items.css';

type Props = {
	movie: IMovie
}

const MovieListItem = ({ movie }: Props) => {

	const [responseState, setResponseState] = useState<'initial' | 'success' | 'error'>('initial');
	const [toastMessage, setToastMessage] = useState<string>('');
	const [show, setShow] = useState<boolean>(false);

	const location = useLocation();

	const { id, title, posterurl } = movie;

	const handleAddToFavorites = async () => {
		try {
			await addToFavourites(movie);
			setResponseState('success');
			setToastMessage(`${title} added to favourites`);
			setShow(true);
		} catch (error: any) {
			setResponseState('error');
			setToastMessage(error.message);
			setShow(true);
		}
	};

	return (
		<>
			<Card className="card-width">
				<Link to={`${location.pathname}/${id}`}>
					<Card.Img variant="top" src={posterurl} style={{ height: "300px" }} />
				</Link>
				<Card.Body className="text-center">
					<Link to={`${location.pathname}/${id}`} className="no-style">
						<Card.Title>{title}</Card.Title>
					</Link>
					<Button variant="light" onClick={handleAddToFavorites}>
						<small>Add to favorite</small>
						<FontAwesomeIcon icon={faHeart} className="ms-2" style={{ color: 'red' }} />
					</Button>
				</Card.Body>
			</Card>
			{
				responseState !== 'initial' && (
					<ToastContainer className="p-3 position-fixed" position="top-end">
						<Toast
							bg={responseState === 'success' ? 'success' : 'danger'}
							show={show}
							autohide
							delay={500}
							onClose={() => setShow(false)}
						>
							<Toast.Header closeButton={false}>
								{responseState === 'success' ? 'Success' : 'Error'}
							</Toast.Header>
							<Toast.Body>
								{toastMessage}
							</Toast.Body>
						</Toast>
					</ToastContainer>
				)
			}
		</>
	)
}

export default MovieListItem;