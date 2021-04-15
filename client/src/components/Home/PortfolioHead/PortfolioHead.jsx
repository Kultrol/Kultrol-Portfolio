import { Link } from "react-router-dom";

export default function PortfolioHead() {
	return (
		<div className="portfolioDiv">
			<h1 className="text-white text-5xl lg:text-6xl xl:text-7xl font-bold">I'm Kevin</h1>
			<h2 className="text-white text-4xl lg:text-5xl xl:text-6xl font-semibold">A Web Developer in Training</h2>
			<Link to="/portfolio">
				<button className="portfolioBtn">Explore my Portfolio</button>
			</Link>
		</div>
	)
}