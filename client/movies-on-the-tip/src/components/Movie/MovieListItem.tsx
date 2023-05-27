import React from "react";
import { Card } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import IMovie from "../../model/IMovie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
	movie: IMovie
}

const MovieListItem = ({ movie }: Props) => {

	const { id, title, posterurl } = movie

	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={posterurl} style={{ height: "300px" }} />
			<Card.Body className="text-center">
				<Card.Title>{title}</Card.Title>
				<Card.Text>
					Add to favorite
					<FontAwesomeIcon icon={faHeart} className="ms-2" />
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default MovieListItem;