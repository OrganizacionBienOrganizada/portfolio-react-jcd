import { ContactList } from "../../UI/ContactList/ContactList"
import { ContactForm } from "../../UI/ContactForm/ContactForm"
import { Title } from "../../UI/Title/Title"

export const Contact = ({ style }) => {
	return (
		<main style={style} className="w-2/4 ml-auto mr-auto m-5">
			<Title name="Contactos" center/>
			<ContactForm/>
		</main>
	)
}