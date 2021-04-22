import { Link } from "react-router-dom";

export default function PortfolioHead() {
	return (
		<div>
			<h2>I'm Kevin</h2>
			<p>A Web Developer in Training</p>
			<Link to="/portfolio">
				<button className="portfolioBtn">Explore my Portfolio</button>
			</Link>
		</div>
	)
}