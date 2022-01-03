import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
	return (
		<footer>
			<ul>
				<li><h2>Local Links</h2></li>
				<li><Link href="/"><a>Home</a></Link></li>
				<li><Link href="/portfolio"><a>Portfolio</a></Link></li>
				<li><Link href="/about"><a>About</a></Link></li>
				<li><Link href="/contact"><a>Contact</a></Link></li>
			</ul>
			<ul>
				<li><h2>Stack</h2></li>
				<li><a href="https://www.mongodb.com">MongoDB</a></li>
				<li><a href="https://expressjs.com">Express</a></li>
				<li><a href="https://reactjs.org">React</a></li>
				<li><a href="https://nodejs.org/en">NodeJS</a></li>
			</ul>
			<ul>
				<li><h2>Social</h2></li>
				<li><a href="https://github.com/Kultrol">Github <FontAwesomeIcon icon={faGithub}/></a></li>
				<li><a href="https://www.instagram.com/kultrol/">Instagram <FontAwesomeIcon icon={faInstagram}/></a></li>
				<li><a href="https://www.linkedin.com/in/kevin-medina-1b372b177/">LinkedIn <FontAwesomeIcon icon={faLinkedin}/></a></li>
				<li><a href="https://twitter.com/Kultrol">Twitter <FontAwesomeIcon icon={faTwitter}/></a></li>
			</ul>
		</footer>
	)
}

export default Footer