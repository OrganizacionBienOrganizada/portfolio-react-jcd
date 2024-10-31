import { Paragraph } from "../../UI/Paragraph/Paragraph"
import { Title } from "../../UI/Title/Title"

export const Education = ({ style }) => {
	return (
		<main style={style} className="w-2/4 ml-auto mr-auto m-5">
			<Title name="Educación" center/>
			<Paragraph>
				Los primeros años de mi vida estudié en el Centro Educativo Libertad (CEL) pero posteriormente por gran parte de mi vida estudié en casa, adquiriendo la habilidad de estudiar por mi cuenta. Conseguí mi titlo de bachillerato gracias a la Fundación CarloMango en 2022 y en 2024 empecé un curso de Analisis y Desarrollo de software en el SENA.
			</Paragraph>
		</main>
	)
}