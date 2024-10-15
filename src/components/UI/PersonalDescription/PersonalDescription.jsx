import { Paragraph } from "../Paragraph/Paragraph"

export const PersonalDescription = ({ photo }) => {
	return (
		<div className="twoSides" id="personalDescription">
			<img src={photo} className="photo"/>
			<Paragraph>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt rerum magnam illo ad fugit officia ab, modi reprehenderit eveniet et nisi ut libero ipsum aut porro nesciunt placeat tenetur dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dicta voluptatem eaque aliquid aut. Hic a esse ipsa nobis? Quas odit eaque vitae tenetur commodi iste quia ullam maiores saepe.
			</Paragraph>
		</div>
	)
}