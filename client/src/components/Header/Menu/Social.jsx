import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Social = () => {
	return(
		<div className={`Social`}>
			<div className={`contact`}>
				<h3>kevinkultrol@gmail.com</h3>
			</div>
			<div className={`Social_Links`}>
				<a href="https://github.com/Kultrol">GitHub <FontAwesomeIcon icon={faGithub}/></a>
				<a href="https://www.instagram.com/kultrol/">Instagram <FontAwesomeIcon icon={faInstagram}/></a>
				<a href="https://www.linkedin.com/in/kevin-medina-1b372b177/">LinkedIn <FontAwesomeIcon icon={faLinkedin}/></a>
				<a href="https://twitter.com/Kultrol">Twitter <FontAwesomeIcon icon={faTwitter}/></a>
			</div>
		</div>
	)
}

export default Social