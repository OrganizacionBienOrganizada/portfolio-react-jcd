import { NavLink } from "react-router-dom"

export const NavItem = ({ href, children }) => {
	return (
		<li className="hover:opacity-100 opacity-70 font-bold text-white ml-3 text-2xl">
			<NavLink to={href}>{children}</NavLink>
		</li>
	)
}