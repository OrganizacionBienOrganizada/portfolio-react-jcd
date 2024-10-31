import { Paragraph } from "../../UI/Paragraph/Paragraph"
import { Title } from "../../UI/Title/Title"

export const Experience = ({ style }) => {
	return (
		<main style={style} className="w-2/4 ml-auto mr-auto m-5">
			<Title name="Experiencia" center/>
			<Paragraph>
				En mi pasado he trabajado en <a href="https://github.com/zje-dev/Ultima-Editor">un editor de graficos del juego de 1986 Ultima: The age of Darkness</a> para Ubuntu hecho en C++, también he colaborado en otros proyecos menores. Hasta el momento nada serio o profesional ya que mayoritariamente he realizado pequeños experimentos.
			</Paragraph>
		</main>
	)
}