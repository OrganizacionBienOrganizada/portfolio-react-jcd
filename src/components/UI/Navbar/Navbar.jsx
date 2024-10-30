import { NavItem } from "../../UI/Navbar/NavItem/NavItem"

export const Navbar = () => {
	return (
		<nav>
			<ul className="navbarItems">
				<NavItem href="/aboutme">Sobre mi</NavItem>
				<NavItem href="/education">Educación</NavItem>
				<NavItem href="/experience">Experiencia</NavItem>
				<NavItem href="/projects">Proyectos</NavItem>
				<NavItem href="/contact">Contacto</NavItem>
			</ul>
		</nav>
	)
}