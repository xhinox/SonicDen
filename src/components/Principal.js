import "./scss/principal.scss";
import f01 from "../assets/img/f01.jpg";
import f01x from "../assets/img/f01x.jpg";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Principal = () => {
	const { t } = useTranslation();
	const imageUrl = window.innerWidth >= 576 ? f01x : f01;

	return (
		<Container
			fluid={true}
			className="backImage"
			style={{ backgroundImage: `url(${imageUrl})` }}
		>
			<Row>
				<Col>
					<h3>{t("IndexH3")}</h3>
				</Col>
			</Row>
		</Container>
	);
};

export default Principal;
