import React, { useState } from "react";
import { Card, Button, Toast, ToastContainer } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import IMovie from "../../model/IMovie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToFavourites } from "../../service/FavouritesService";

type Props = {
	movie: IMovie
}

const MovieListItem = ({ movie }: Props) => {

	const [responseState, setResponseState] = useState<'initial' | 'success' | 'error'>('initial');
	const [toastMessage, setToastMessage] = useState<string>('');
	const [show, setShow] = useState<boolean>(false);

	const { title, posterurl } = movie;

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
				<Card.Img variant="top" src={posterurl} style={{ height: "300px" }} />
				<Card.Body className="text-center">
					<Card.Title>{title}</Card.Title>
					<Button variant="light" onClick={handleAddToFavorites}>
						Add to favorite
						<FontAwesomeIcon icon={faHeart} className="ms-2" />
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