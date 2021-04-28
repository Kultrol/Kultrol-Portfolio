import { Link } from "react-router-dom";

const Links = ({setShowMenu}) => {
	return(
		<>
			<div className={`Title`}>
				<div onClick={() => setShowMenu(false)}>
					<h2>close</h2>
				</div>
			</div>
			<div className={`Links`}>
				<Link to={`/`} onClick={() => setShowMenu(false)}>Home</Link>
				<Link to={`/portfolio`} onClick={() => setShowMenu(false)}>Portfolio</Link>
				<Link to={`/about`} onClick={() => setShowMenu(false)}>About</Link>
				<Link to={`/contact`} onClick={() => setShowMenu(false)}>Contact</Link>
			</div>
		</>
	)
}

export default Links