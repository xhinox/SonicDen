import "./scss/changeLang.scss";
import mex from "../assets/img/mexico-flag.png";
import usa from "../assets/img/usa-flag.png";

import React from "react";
import { useTranslation } from "react-i18next";

const ChangeLang = () => {
	const { i18n } = useTranslation();
	const handleChange = e => {
		const lang = e.target.dataset.lang;
		i18n.changeLanguage(lang);
	};

	return (
		<section className="flag ml-5" onClick={handleChange}>
			<div
				data-lang="es"
				style={{ backgroundImage: `url(${mex})` }}
			></div>
			<div
				data-lang="en"
				style={{ backgroundImage: `url(${usa})` }}
			></div>
		</section>
	);
};

export default ChangeLang;
