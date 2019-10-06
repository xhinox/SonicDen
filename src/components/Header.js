import "./scss/header.scss";

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../assets/img/logo.png";
import ChangeLang from "../utils/ChangeLang";

const Header = () => {
	const { t } = useTranslation();

	return (
		<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
			<Link to="/" className="ml-3 navbar-brand">
				<img
					src={logo}
					width="150"
					className="d-inline-block align-top"
					alt="Sonic Den logo"
				/>
			</Link>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="">
					<Link className="nav-link" to="/about">
						{t("About")}
					</Link>

					<Link className="nav-link" to="/portfolio">
						{t("PortFolio")}
					</Link>

					<Link className="nav-link" to="/instruments">
						{t("Instruments")}
					</Link>

					<Link className="nav-link" to="/contact-us">
						{t("Contact")}
					</Link>
					<ChangeLang />
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
