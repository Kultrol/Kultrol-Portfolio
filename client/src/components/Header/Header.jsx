import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {

	const [showMenu ,setShowMenu] = useState(false)
	let menu

	if(setShowMenu){
		menu = <>
		</>

	} else {
		menu = <></>
	}

	return (
		<>
			<header>
				<Link to={"/"}>
					<h1>kultrol</h1>
				</Link>
				<span>
					<h2>menu</h2>
				</span>
			</header>
			{menu}
		</>
	)
}