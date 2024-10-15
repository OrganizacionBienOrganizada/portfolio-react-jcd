export const Paragraph = (properties) => {
	return (
		<div className="paragraph">
			<h2 id={properties.id}>{properties.title}</h2>
			<p>
				{properties.children}
			</p>
		</div>
	)
}