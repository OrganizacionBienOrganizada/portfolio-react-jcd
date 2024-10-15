import { ItemNavbar } from "./ItemNavbar/ItemNavbar"

export const Navbar = () => {
	return (
		<nav>
			<ul>
				<ItemNavbar content="¿Quién soy?" />
				<ItemNavbar content="Mi familia" />
				<ItemNavbar content="Mis estudios"/>
			</ul>
		</nav>
	)
}
