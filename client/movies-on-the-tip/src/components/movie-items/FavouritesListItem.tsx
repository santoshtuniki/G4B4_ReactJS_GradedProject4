import React, { useState } from "react";
import { Card, Button, Toast, ToastContainer } from "react-bootstrap";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import IMovie from "../../model/IMovie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

import './list-items.css';

type Props = {
	movie: IMovie,
	onDelete: (id: string) => void; // Callback function to handle deletion
}

const FavouriteListItem = ({ movie, onDelete }: Props) => {

	const [responseState, setResponseState] = useState<'initial' | 'success' | 'error'>('initial');
	const [toastMessage, setToastMessage] = useState<string>('');
	const [show, setShow] = useState<boolean>(false);

	const location = useLocation();

	const { id, title, posterurl } = movie;

	const handleRemoveFromFavorites = async () => {
		try {
			onDelete(id);	// Call the onDelete callback function to notify the parent component about the deletion
			setResponseState('success');
			setToastMessage(`${title} removed from favourites`);
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
					<Button variant="light" onClick={handleRemoveFromFavorites}>
						<small>Remove from favourite</small>
						<FontAwesomeIcon icon={faTrashCan} />
					</Button>
				</Card.Body>
			</Card>
			{
				responseState !== 'initial' && (
					<ToastContainer className="p-3 position-fixed" position="top-end">
						<Toast
							bg={responseState === 'success' ? 'info' : 'danger'}
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

export default FavouriteListItem;