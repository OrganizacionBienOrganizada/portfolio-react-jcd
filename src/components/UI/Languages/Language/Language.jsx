export const Language = ({ lang, flag, children }) => {
	return (
		<li className="comboBoxContent">
			<img className="flag" src={flag}/>
			<span>{children}</span>
		</li>
	)
}