import { Link } from "react-router-dom";
import Heading from "../../Headless/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";


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
			<ul>
				<li><Heading text={`Social`}/></li>
				<li><a href="https://github.com/Kultrol" className={`outLink socialLinks`}>Github <FontAwesomeIcon icon={faGithub}/></a></li>
				<li><a href="https://www.instagram.com/kultrol/" className={`outLink socialLinks`}>Instagram <FontAwesomeIcon icon={faInstagram}/></a></li>
				<li><a href="https://www.linkedin.com/in/kevin-medina-1b372b177/" className={`outLink socialLinks`}>LinkedIn <FontAwesomeIcon icon={faLinkedin}/></a></li>
				<li><a href="https://twitter.com/Kultrol" className={`outLink socialLinks`}>Twitter <FontAwesomeIcon icon={faTwitter}/></a></li>
			</ul>
		</footer>
	)
}

export default Footer