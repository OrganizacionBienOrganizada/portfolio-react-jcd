import { Presentation } from "../../Layouts/Presentation/Presentation"
import { Author } from "../../UI/Author/Author"
import { Skills } from "../../UI/Skills/Skills"
import { Paragraph } from "../../UI/Paragraph/Paragraph"
import { ContactForm } from "../../UI/ContactForm/ContactForm"

export const Home = ({ style }) => {
	return (
		<main style={style}>
			<Author />
			<Presentation />
			<hr className="ml-auto mr-auto w-11/12"></hr>
			<section className="horizontal">
				<Skills />
				<section className="vertical">
					<Paragraph title="Educación">
						Los primeros años de mi vida estudié en el Centro Educativo Libertad (CEL) pero posteriormente por gran parte de mi vida estudié en casa, adquiriendo la habilidad de estudiar por mi cuenta. Conseguí mi titlo de bachillerato gracias a la Fundación CarloMango en 2022 y en 2024 empecé un curso de Analisis y Desarrollo de software en el SENA.
					</Paragraph>
					<Paragraph title="Experiencia">
						En mi pasado he trabajado en <a href="https://github.com/zje-dev/Ultima-Editor">un editor de graficos del juego de 1986 Ultima: The age of Darkness</a> para Ubuntu hecho en C++, también he colaborado en otros proyecos menores. Hasta el momento nada serio o profesional ya que mayoritariamente he realizado pequeños experimentos.
					</Paragraph>
					<Paragraph title="Proyectos">
						Nada de lo que esté orgullozo por ahora.
					</Paragraph>
					<ContactForm />
				</section>
			</section>
		</main>
	)
}