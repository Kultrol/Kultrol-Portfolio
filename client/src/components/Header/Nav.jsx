import { Link } from 'react-router-dom'

export default function Nav( { addNavClass, setMenu } ) {
	return (
		<>
			<nav className={`nav ${addNavClass}`}>
				<ul className={`navList`}>
					<li className={`navLink`} onClick={() => setMenu(false)}><Link to="/">Home</Link></li>
					<li className={`navLink`} onClick={() => setMenu(false)}><Link to="/portfolio">Portfolio</Link></li>
				</ul>
			</nav>
		</>
	)
}