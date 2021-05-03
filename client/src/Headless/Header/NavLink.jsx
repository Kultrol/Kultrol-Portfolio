import { Link } from "react-router-dom";
import "../Headless.scss"

const NavLink = ({link, text}) => {
	return(
		<li className={`NavLink`}>
			<Link to={link}>
				{text}
			</Link>
		</li>
	)
}


export default NavLink