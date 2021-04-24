import Nav from "./Nav";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {

	const [showMenu ,setShowMenu] = useState(false)
	let menu

	if(showMenu){
		menu =
			<div className={`menu`}>
				<div className={`Title`}>
					<div onClick={() => setShowMenu(false)}>
						<h2>close</h2>
					</div>
				</div>
				<div className={`Links`}>
					<Link to={`/`} onClick={() => setShowMenu(false)}>Home</Link>
					<Link to={`/portfolio`} onClick={() => setShowMenu(false)}>Portfolio</Link>
					<Link to={`/contact`} onClick={() => setShowMenu(false)}>Contact</Link>
				</div>
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
			</div>

	} else {
		menu = <></>
	}

	return (
		<>
			<header>
				<Link to={"/"}>
					<h1>kultrol</h1>
				</Link>
				<span onClick={() => setShowMenu(true)} className={`showMenu`}>
					<h2>menu</h2>
				</span>
				<Nav className={`showNav`}/>
			</header>
			{menu}
		</>
	)
}