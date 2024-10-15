export const ItemNavbar = ({ link, content, style }) => {
	return (
		<li>
			<a
				href={link}
				className={style}
			>
				{content}
			</a>
		</li>
	)
}