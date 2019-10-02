import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
			<Navbar.Brand className="ml-3" href="#home">
				<img
					src="assets/img/logo.png"
					width="150"
					className="d-inline-block align-top"
					alt="Sonic Den logo"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="">
					<Nav.Link href="#about">about</Nav.Link>
					<Nav.Link href="#portfolio">portfolio</Nav.Link>
					<Nav.Link href="#rentals">instruments</Nav.Link>
					<Nav.Link href="#contact">contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
