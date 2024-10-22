export const Skill = ({ name, max, value }) => {
	return (
		<li className="skill">
			<label>{name}</label>
			<div className="percentageBackground">
				<span>{value}/{max}</span>
				<div className="percentage" style={{width: ((max / 100) * value) +"%"}}/>
			</div>
		</li>
	)
}