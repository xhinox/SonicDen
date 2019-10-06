import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import traslationEng from "./locales/en.json";
import traslationEsp from "./locales/es.json";

i18n.use(initReactI18next).init({
	resources: {
		es: {
			translations: traslationEsp
		},
		en: {
			translations: traslationEng
		}
	},
	fallbackLng: "es",
	debug: false,

	// have a common namespace used around the full app
	ns: ["translations"],
	defaultNS: "translations",

	keySeparator: false, // we use content as keys

	interpolation: {
		escapeValue: false, // not needed for react!!
		formatSeparator: ","
	}
});

export default i18n;
