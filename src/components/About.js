import "./scss/about.scss";
import f02 from "../assets/img/f02.jpg";
import f02x from "../assets/img/f02x.jpg";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const About = () => {
	const { t } = useTranslation();
	const imageUrl = window.innerWidth >= 576 ? f02x : f02;
	return (
		<Container
			fluid={true}
			className="backImage"
			style={{ backgroundImage: `url(${imageUrl})` }}
		>
			<Row>
				<Col>
					<h3>{t("AboutH3")}</h3>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
