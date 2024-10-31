import { NavItem } from "../../UI/Navbar/NavItem/NavItem"

export const Navbar = () => {
	return (
		<nav>
			<ul className="flex flex-wrap mr-0 ml-auto w-fit p-5 text-white">
				<NavItem href="/aboutme">Sobre mi</NavItem>
				<NavItem href="/education">Educación</NavItem>
				<NavItem href="/experience">Experiencia</NavItem>
				<NavItem href="/projects">Proyectos</NavItem>
				<NavItem href="/contact">Contacto</NavItem>
			</ul>
		</nav>
	)
}