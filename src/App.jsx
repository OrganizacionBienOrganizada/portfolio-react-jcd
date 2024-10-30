import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

import { Header } from "./components/Layouts/Header/Header"
import { Home } from "./components/Pages/Home/Home"
import { AboutMe } from "./components/Pages/AboutMe/AboutMe"
import { Education } from "./components/Pages/Education/Education"
import { Experience } from "./components/Pages/Experience/Experience"
import { Projects } from "./components/Pages/Projects/Projects"
import { Contact } from "./components/Pages/Contact/Contact"

export const App = () => {
	const [fadeValue, setFadeValue] = useState(160)

	useEffect(() => {
		const interval = setInterval(() => {
			if (fadeValue > 0)
				setFadeValue(fadeValue - 1);
		}, 10);
		return () => clearInterval(interval);
	}, [fadeValue]);

	const style = {
		maskImage: "linear-gradient(0deg, #ffffff00 "+(fadeValue-50)+"%, #000000 "+fadeValue+"%)"
	}

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home style={style}/>}/>
				<Route path="/aboutme" element={<AboutMe style={style}/>}/>
				<Route path="/education" element={<Education style={style}/>}/>
				<Route path="/experience" element={<Experience style={style}/>}/>
				<Route path="/projects" element={<Projects style={style}/>}/>
				<Route path="/contact" element={<Contact stlye={style}/>}/>
				<Route path="/*" element={<h2 className="notExistent">Error 404.</h2>}/>
			</Routes>
		</>
	)
}