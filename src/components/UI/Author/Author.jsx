import { Title } from "../Title/Title"

import photo from "../../../assets/images/photo.png"

export const Author = () => {
	return (
		<section id="author">
			<img src={photo} id="photo"/>
			<Title name="Juan Camilo Doudebes Morales" occupation="Full stack developer" questionMarks/>
		</section>
	)
}