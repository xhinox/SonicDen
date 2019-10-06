import "./scss/portfolio.scss";
import f03 from "../assets/img/f03.jpg";
import f03x from "../assets/img/f03x.jpg";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
	const { t } = useTranslation();
	const imageUrl = window.innerWidth >= 576 ? f03x : f03;

	return (
		<Container
			fluid={true}
			className="backImage"
			style={{ backgroundImage: `url(${imageUrl})` }}
		>
			<Row>
				<Col>
					<h3>{t("PortfolioH3")}</h3>
				</Col>
			</Row>
		</Container>
	);
};

export default Portfolio;
