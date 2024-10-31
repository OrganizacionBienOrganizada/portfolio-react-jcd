import { Title } from "../Title/Title"

import photo from "../../../assets/images/photo.png"

export const Author = () => {
	return (
		<section id="author" className="flex flex-row align-center">
			<img src={photo} className="rounded-full mr-8 w-64" id="photo"/>
			<Title name="Juan Camilo Doudebes Morales" occupation="Full stack developer" questionMarks/>
		</section>
	)
}