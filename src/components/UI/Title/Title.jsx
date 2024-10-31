export const Title = ({ name, occupation, questionMarks, center }) => {
    let questionMarkStart, questionMarkEnd
    const questionStlye = "font-bold text-3xl text-amber-950"
    let titleStyle = "font-bold text-6xl"
    if (center)
        titleStyle += " text-center"
    if (questionMarks) {
        questionMarkStart = <span className={"questionMarks "+questionStlye}>¿</span>
        questionMarkEnd = <span className={"questionMarks "+questionStlye}>?</span>
    }
	return (
		<div id="title">
			<h1 className={titleStyle}>{name}</h1>
            <h2 className="font-thin text-3xl">{questionMarkStart}{occupation}{questionMarkEnd}</h2>
		</div>
	)
}