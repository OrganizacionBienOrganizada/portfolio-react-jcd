export const ContactList = () => {
	const contactStyle = "text-black bg-gradient-to-b from-primary-color to-light-primary-color m-1.5 ml-0 rounded-2xl p-1 pl-4 font-normal"
	return (
		<aside>
			<ul id="contactList">
				Contacto
				<li className={contactStyle}>+57 301 2583015</li>
				<li className={contactStyle}>jcdm.contactmail@gmail.com</li>
			</ul>
		</aside>
	)
}