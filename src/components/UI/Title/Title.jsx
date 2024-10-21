export const Title = ({ name, occupation, questionMarks }) => {
    let questionMarkStart, questionMarkEnd
    if (questionMarks) {
        questionMarkStart = <span className="questionMarks">¿</span>
        questionMarkEnd = <span className="questionMarks">?</span>
    }
	return (
		<div id="title">
			<h1>{name}</h1>
            <h2 className="occupation">{questionMarkStart}{occupation}{questionMarkEnd}</h2>
		</div>
	)
}