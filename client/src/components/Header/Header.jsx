import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header() {


	return (
		<>
			<header>
				<Link to={"/"}>
					<h1>Kultrol</h1>
				</Link>
				<span>
		        {/*<img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" alt=""/>*/}
	        </span>
				<Nav/>
			</header>
		</>
	)
}