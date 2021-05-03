import './Headless.scss'
import { Link } from "react-router-dom";

export default function ALink({text, link}){
	return(
		<Link to={link} className={`ALink`}>{text}</Link>
	)
}