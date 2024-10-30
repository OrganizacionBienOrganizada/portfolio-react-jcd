import { Presentation } from "../../Layouts/Presentation/Presentation"
import { Author } from "../../UI/Author/Author"

export const AboutMe = ({ style }) => {
	return (
		<main style={style}>
			<Author />
			<Presentation />
		</main>
	)
}