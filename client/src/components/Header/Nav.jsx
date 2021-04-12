import { Link } from 'react-router-dom'

export default function Nav( { addNavClass } ) {
	return (
		<>
			<nav className={`nav ${addNavClass}`}>
				<ul className={`navList`}>
					<li className={`navLink`}><Link to="/">Home</Link></li>
					<li className={`navLink`}><Link to="/portfolio">Portfolio</Link></li>
				</ul>
			</nav>
		</>
	)
}