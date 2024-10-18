import { Language } from "./Language/Language"

import es_flag from "../../../assets/images/flags/es.png"
import en_flag from "../../../assets/images/flags/en.png"
import ar_flag from "../../../assets/images/flags/ar.png"

export const Languages = () => {
	return (
		<div id="languagesCombobox">
			Idioma
		</div>
	)
}

/*
<ul>
	<Language lang="es" flag={es_flag}>Español</Language>
	<Language lang="en" flag={en_flag} disabled>English</Language>
	<Language lang="en" flag={ar_flag} disabled>العربية</Language>
</ul>
*/