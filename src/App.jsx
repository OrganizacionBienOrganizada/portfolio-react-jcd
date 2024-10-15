import { Home } from "./components/Pages/Home/Home"
import { AboutMe } from "./components/Pages/AboutMe/AboutMe"
import { Header } from "./components/Layouts/Header/Header"

export const App = () => {
	return (
		<>
			<Header />
			<Home />
			<AboutMe />
		</>
	)
}