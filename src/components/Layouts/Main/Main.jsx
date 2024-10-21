import { useState, useEffect } from "react"

import { Presentation } from "../Presentation/Presentation"
import { Author } from "../../UI/Author/Author"

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
		</main>
	)
}