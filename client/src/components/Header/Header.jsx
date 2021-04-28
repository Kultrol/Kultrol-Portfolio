import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useState } from "react";
import Links from './Menu/Links'
import Social from "./Menu/Social";
export default function Header() {

	const [showMenu ,setShowMenu] = useState(false)
	let menu

	if(showMenu){
		menu =
			<div className={`menu`}>
				<Links setShowMenu={(v) => setShowMenu(v)}/>
				<Social/>
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