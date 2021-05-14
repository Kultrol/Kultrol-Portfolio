import Par from "../../Headless/Par";
import Heading from "../../Headless/Heading";
import ALink from "../../Headless/ALink";
import Image from "../../Headless/Image";
import SubHeading from "../../Headless/SubHeading";
import CurrentProjects from "./CurrentProjects";
import './Home.scss'

export default function Home() {
	return (
		<main>
			<div className={'Section'}>
				<Heading text={`A Web Developer in Training`}/>
				<Image src={`https://images.unsplash.com/photo-1600496461900-3f1b74fb40d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80`} alt={``}/>
				<div>
					<Par text={`Hi, I'm Kevin, a web developer with a passion for creating and exploring new ideas.`}/>
					<ALink link={`/about`} text={`Learn More About Me`}/>
				</div>
			</div>
			<CurrentProjects/>
			<div className={'Section'}>
				<SubHeading text={`What's It Made Of? `}/>
				<div>
					<ul>
						<li><a href="https://expressjs.com/" id={`express`}>Express</a></li>
						<li><a href="https://www.mongodb.com/" id={`mongoDB`}>MongoDB</a></li>
						<li><a href="https://nodejs.org/en/" id={`nodeJS`}>Node</a></li>
						<li><a href="https://reactjs.org/" id={`reactJS`}>React</a></li>
						<li><a href="https://sass-lang.com/" id={`sCss`}>SCSS</a></li>
					</ul>
				</div>
			</div>
			<div className={'Section'}>
				<SubHeading text={`Good Design Is Good Business.`}/>
				<Image src={`https://images.unsplash.com/photo-1548080819-84b0d779e8e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80://images.unsplash.com/photo-1619258252737-4a44a77c1927?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60`} alt={``}/>
				<Par text={`Good Design is the corner stone of any great product. Good Design ensures communication, interaction, and accessibility.`}/>
				<ALink link={`/contact`} text={`Let's Work together to achieve your creative vision with Good Design`}/>
			</div>
		</main>
	)
}