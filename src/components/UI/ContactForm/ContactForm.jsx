export const ContactForm = () => {
	return (
		<form>
			<label>Nombre</label>
			<input type="text" name="name"/>
			<label>Asunto</label>
			<input type="text" name="author"/>
			<textarea></textarea>
			<input type="submit" value="Mandar"/>
		</form>
	)
}
