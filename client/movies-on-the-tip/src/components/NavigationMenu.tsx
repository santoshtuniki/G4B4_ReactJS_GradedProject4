import React from "react";
import { NavLink } from "react-router-dom";

import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSearchContext } from "./common/SearchContext";

const NavigationMenu = () => {

	const { searchText, setSearchText } = useSearchContext();

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Backspace" && searchText.length > 0) {
			e.preventDefault(); // Prevent the default behavior of the keydown event
			setSearchText(
				(prevSearchText) => prevSearchText.slice(0, -1)
			);
		}
	};

	return (
		<Navbar bg="light" expand="lg" className="sticky-top">
			<Container fluid>
				<Navbar.Brand to="/" as={NavLink} className="me-5 no-style">
					<strong>Movies on the Tip</strong>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link to="/movies-coming" as={NavLink}>Coming Soon</Nav.Link>
						<Nav.Link to="/movies-in-theaters" as={NavLink}>Movies in Theaters</Nav.Link>
						<Nav.Link to="/top-rated-india" as={NavLink}>Top Rated India</Nav.Link>
						<Nav.Link to="/top-rated-movies" as={NavLink}>Top Rated Movies</Nav.Link>
						<Nav.Link to="/favourite" as={NavLink}>Favourites</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							value={searchText}
							onChange={handleSearch}
							onKeyDown={handleKeyDown}
							placeholder="Search movie"
							aria-label="Search"
							className="zero"
						/>
						<Button variant="primary" className="zero">
							<FontAwesomeIcon
								icon={faMagnifyingGlass}
								className="px-1"
							/>
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigationMenu;