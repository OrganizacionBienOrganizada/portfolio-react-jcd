import { NavLink } from "react-router-dom"

export const NavItem = ({ href, children }) => {
	return (
		<li className="navbarItem">
			<NavLink to={href}>{children}</NavLink>
		</li>
	)
}