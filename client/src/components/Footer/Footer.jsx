import { Link } from "react-router-dom";
import Heading from "../../Headless/Heading";

const Footer = () => {
	return (
		<footer>
			<ul>
				<li><Heading text={`Local Links`}/></li>
				<li><Link to="/" className={`inLink`}>Home</Link></li>
				<li><Link to="/portfolio" className={`inLink`}>Portfolio</Link></li>
				<li><Link to="/about" className={`inLink`}>About</Link></li>
				<li><Link to="/contact" className={`inLink`}>Contact</Link></li>
			</ul>
			<ul>
				<li><Heading text={`Stack`}/></li>
				<li><a href="https://www.mongodb.com" className={`outLink`}>MongoDB</a></li>
				<li><a href="https://expressjs.com" className={`outLink`}>Express</a></li>
				<li><a href="https://reactjs.org" className={`outLink`}>React</a></li>
				<li><a href="https://nodejs.org/en" className={`outLink`}>NodeJS</a></li>
			</ul>
		</footer>
	)
}

export default Footer