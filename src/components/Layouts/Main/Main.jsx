import { useState, useEffect } from "react"

import { Presentation } from "../Presentation/Presentation"
import { Author } from "../../UI/Author/Author"
import { Skills } from "../../UI/Skills/Skills"
import { Paragraph } from "../../UI/Paragraph/Paragraph"

const appear = () => {
	console.log(document.getElementById("main"))
}

export const Main = () => {
	const [fadeValue, setFadeValue] = useState(160)

	useEffect(() => {
		const interval = setInterval(() => {
			if (fadeValue > 0)
				setFadeValue(fadeValue - 1);
		}, 10);
		return () => clearInterval(interval);
	}, [fadeValue]);

	return (
		<main id="main" style={{
			maskImage: "linear-gradient(0deg, #ffffff00 "+(fadeValue-50)+"%, #000000 "+fadeValue+"%)"
		}}>
			<Author />
			<Presentation />
			<hr></hr>
			<section className="horizontal">
				<Skills />
				<section className="vertical">
					<Paragraph title="Educación">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi, labore quos error sint inventore optio corrupti adipisci sapiente laudantium, ab suscipit commodi cupiditate placeat! Quae impedit iusto eligendi quod.
					</Paragraph>
					<Paragraph title="Proyectos">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloremque similique excepturi pariatur, dolores aspernatur ipsam quibusdam velit harum deleniti labore, blanditiis nemo? Iste blanditiis neque reiciendis nesciunt repudiandae! Quos!
					</Paragraph>
				</section>
			</section>
		</main>
	)
}