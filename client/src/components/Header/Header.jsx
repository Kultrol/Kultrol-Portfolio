import { useState } from 'react'
import Nav from "./Nav";

export default function Header() {

	const [showMenu, setShowMenu] = useState( false )

	let hamMenu

	if ( showMenu ){
		hamMenu =
			<div
				className={`z-20 h-screen w-full fixed bg-white top-0 left-0 flex flex-col items-start justify-center`}>
				<span className={`lg:hidden w-full flex justify-end items-center px-12 py-2 `} onClick={() => {
					setShowMenu( false )
				}}>
					<img
						// src="https://www.flaticon.com/svg/vstatic/svg/992/992660.svg?token=exp=1618255540~hmac=7ca5be26e6afa710b47053c72982b5b3"
						alt="" className="w-12 cursor-pointer"/>
				</span>
				<Nav addNavClass={`block`} setMenu={(v) => setShowMenu(v)}/>
			</div>
	}

	return (
		<>
			<header className={`header`}>
				<a href="https://github.com/Kultrol" className="ghAnchor">
					<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt=""
					     className="w-12"/>
					<h1 className={`ghText`}>Kultrol</h1>
				</a>
				<span className={`lg:hidden`} onClick={() => {
					setShowMenu( true )
				}}>
		        <img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" alt=""
		             className="w-12 cursor-pointer"/>
	        </span>
				<Nav setMenu={(v) => setShowMenu(v)}/>
			</header>
			{hamMenu}
		</>
	)
}