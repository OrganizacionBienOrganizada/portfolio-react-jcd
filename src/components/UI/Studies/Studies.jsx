import { StudiesList } from "../StudiesList/StudiesList"
import doggo from "../../../assets/images/perro.jpg"

export const Studies = () => {
	return (
		<>
			<h2 className="title">Estudios</h2>
			<div className="twoSides" id="studies">
				<StudiesList />
				<img src={doggo} className="studiesImage"/>
			</div>
		</>
	)
}