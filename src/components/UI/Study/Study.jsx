export const Study = ({ children, name }) => {
	return (
		<div className="study">
			<h3>{name}</h3>
			<p>{children}</p>
		</div>
	)
}