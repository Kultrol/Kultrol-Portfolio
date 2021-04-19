import { Link } from 'react-router-dom'

export default function Nav( { addNavClass, setMenu } ) {
	return (
		<>
			<nav>
				<ul>
					<li onClick={() => setMenu( false )}><Link to="/">Home</Link></li>
					<li onClick={() => setMenu( false )}><Link to="/portfolio">Portfolio</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}