import { Link } from "react-router-dom";

export default function PortfolioHead() {
	return (
		<div>
			<h1>I'm Kevin</h1>
			<h2>A Web Developer in Training</h2>
			<Link to="/portfolio">
				<button className="portfolioBtn">Explore my Portfolio</button>
			</Link>
		</div>
	)
}