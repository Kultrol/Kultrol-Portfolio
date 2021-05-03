import NavLink from "../../Headless/Header/NavLink";

export default function Nav( ) {
	return (
		<>
			<nav>
				<ul>
					<NavLink link={"/"} text={"Home"}/>
					<NavLink link={"/portfolio"} text={"Portfolio"}/>
					<NavLink link={"/about"} text={"About"}/>
					<NavLink link={"/contact"} text={"Contact"}/>
				</ul>
			</nav>
		</>
	)
}