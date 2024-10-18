import { NavItem } from "../../UI/Navbar/NavItem/NavItem"

export const Navbar = () => {
	return (
		<nav>
			<ul>
				<NavItem href="">Presentación</NavItem>
				<NavItem href="">Educación</NavItem>
				<NavItem href="">Experiencia</NavItem>
				<NavItem href="">Proyectos</NavItem>
				<NavItem href="">Contacto</NavItem>
			</ul>
		</nav>
	)
}