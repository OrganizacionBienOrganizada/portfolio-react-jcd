import { ContactList } from "../../UI/ContactList/ContactList"
import { Paragraph } from "../../UI/Paragraph/Paragraph"

export const Presentation = () => {
	return (
		<section id="Presentation" className="horizontal">
			<ContactList />
			<Paragraph title="¿Quien soy?">Soy Juan Camilo Dousdebes Morales, he estado desarrollando software desde que 2016 cuando tenía 10 años, aprendiendo de forma autodidacta por lo que estoy acostumbrado a aprender nuevas cosas indagando por mi cuenta. Me centro más que nada en la creación de herramientas para PC Windows pero también me sé manejar en distros GNU/Linux basados en Debian.</Paragraph>
		</section>
	)
}