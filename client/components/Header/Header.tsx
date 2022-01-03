import Nav from "./Nav";
import Link from 'next/link'
import { useState } from "react";
import Links from './Menu/Links'
import Social from "./Menu/Social";

export default function Header() {

	const [showMenu ,setShowMenu] = useState(false)
	let menu

	if(showMenu){
		menu =
			<div className={`menu`}>
				<Links setShowMenu={(v:boolean) => setShowMenu(v)}/>
				<Social/>
			</div>

	} else {
		menu = <></>
	}

	return (
		<>
			<header>
				<Link href={"/"}>
					<a>kultrol</a>
				</Link>
				<span onClick={() => setShowMenu(true)}>
					<h2>menu</h2>
				</span>
				<Nav/>
			</header>
			{menu}
		</>
	)
}