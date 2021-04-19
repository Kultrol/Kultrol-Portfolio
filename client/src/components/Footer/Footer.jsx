import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<ul>
				<li>Local Links</li>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/portfolio">Portfolio</Link></li>
			</ul>
			<ul>
				<li>Stack</li>
				<li><a href="https://www.mongodb.com">MongoDB</a></li>
				<li><a href="https://expressjs.com">Express</a></li>
				<li><a href="https://reactjs.org">React</a></li>
				<li><a href="https://nodejs.org/en">NodeJS</a></li>
			</ul>
		</footer>
	)
}

export default Footer