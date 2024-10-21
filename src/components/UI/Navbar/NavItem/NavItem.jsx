export const NavItem = ({ href, children }) => {
	return (
		<li className="navbarItem">
			<a href={href}>{children}</a>
		</li>
	)
}