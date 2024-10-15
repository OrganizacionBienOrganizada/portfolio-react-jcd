import { PersonalDescription } from "../../UI/PersonalDescription/PersonalDescription"
import { Family } from "../../UI/Family/Family"
import { Studies } from "../../UI/Studies/Studies"

import randomImage from "../../../assets/images/foto.jfif"

export const Main = () => {
	return (
		<main>
			<PersonalDescription photo={randomImage}/>
			<hr/>
			<Family />
			<hr/>
			<Studies />
		</main>
	)
}