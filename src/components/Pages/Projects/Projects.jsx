import { Paragraph } from "../../UI/Paragraph/Paragraph"
import { Title } from "../../UI/Title/Title"

export const Projects = ({ style }) => {
	return (
		<main style={style} className="w-1/4 ml-auto mr-auto m-5">
			<Title name="Proyectos" center/>
			<Paragraph>
				Nada de lo que esté orgullozo por ahora.
			</Paragraph>
		</main>
	)
}