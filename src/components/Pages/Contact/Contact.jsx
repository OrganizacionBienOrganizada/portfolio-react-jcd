import { ContactList } from "../../UI/ContactList/ContactList"
import { ContactForm } from "../../UI/ContactForm/ContactForm"
import { Title } from "../../UI/Title/Title"

export const Contact = ({ style }) => {
	return (
		<main style={style} className="small">
			<Title name="Contactos"/>
			<ContactForm/>
		</main>
	)
}