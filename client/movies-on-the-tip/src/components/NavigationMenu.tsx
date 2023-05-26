import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavigationMenu = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#" className="me-5">
					<strong>Movies on the Tip</strong>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#">Coming Soon</Nav.Link>
						<Nav.Link href="#">Movies in Theaters</Nav.Link>
						<Nav.Link href="#">Top Rated Indian</Nav.Link>
						<Nav.Link href="#">Top Rated Movies</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
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