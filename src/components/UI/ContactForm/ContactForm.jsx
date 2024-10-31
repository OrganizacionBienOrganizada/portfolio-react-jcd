export const ContactForm = () => {
	const className = "m-2.5 w-full border border-primary-color bg-transparent rounded-2xl text-white p-2.5";
	return (
		<form className="ml-auto mr-auto flex w-5/12 items-center flex-col">
			<label>Nombre</label>
			<input className={className} type="text" name="name"/>
			<label>Asunto</label>
			<input className={className} type="text" name="author"/>
			<textarea className={className+" h-32"}></textarea>
			<input className="m-2.5 w-full border border-primary-color bg-primary-color rounded-2xl text-white p-2.5" type="submit" value="Mandar"/>
		</form>
	)
}
