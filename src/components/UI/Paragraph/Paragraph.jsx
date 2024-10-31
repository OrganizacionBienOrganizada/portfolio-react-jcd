export const Paragraph = ({title, children, id}) => {
	return (
		<div className="paragraph" id={id}>
			<h2 className="bold text-2xl">{ title }</h2>
			<p>{ children }</p>
		</div>
	)
}