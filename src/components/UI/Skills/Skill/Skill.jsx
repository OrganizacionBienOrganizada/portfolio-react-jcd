export const Skill = ({ name, max, value }) => {
	return (
		<li className="p1 ">
			<label>{name}</label>
			<div className="rounded-3xl mt-1.5 bg-black h-7">
				<span className="z-2 p-1 font-thin right-auto block absolute" style={{left: "13%"}}>{value}/{max}</span>
				<div className="h-7 bg-primary-color z-1 rounded-3xl" style={{width: ((max / 100) * value) +"%"}}/>
			</div>
		</li>
	)
}