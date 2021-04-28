import Par from "../../Headless/Par";
import Heading from "../../Headless/Heading";
import ALink from "../../Headless/ALink";
import Image from "../../Headless/Image";
import SubHeading from "../../Headless/SubHeading";

export default function Home() {
	return (
		<main>
			<div className={'Section'}>
				<Heading text={`A Web Developer in Training`}/>
				<Image src={`https://images.unsplash.com/photo-1619258252737-4a44a77c1927?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60`} alt={``}/>
				<div>
					<Par text={`Hi, I'm Kevin, a web developer with a passion for creating and exploring new ideas.`}/>
					<ALink link={`/portfolio`} text={`Learn More About Me`}/>
				</div>
			</div>
			<div className={'Section CurrentProjects'}>
				<Par text={`I'm in constant development, whether its new or current, I try to optimize, enhance, and improve the experience of the project for the user`}/>
				<SubHeading text={`Current Projects`}/>
				<div className={`curProjectGrid`}>
					<div className={`caption`}>
						<Image src={`https://images.unsplash.com/photo-1619258252737-4a44a77c1927?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60`} alt={``}/>
						<a href="#">Bar & Love</a>
						<SubHeading text={'Local Bar with a flavour of love'}/>
					</div>
					<div className={`caption`}>
						<Image src={`https://images.unsplash.com/photo-1619258252737-4a44a77c1927?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60`} alt={``}/>
						<a href="#">Bar & Love</a>
						<SubHeading text={'Local Bar with a flavour of love'}/>
					</div>
					<div className={`caption`}>
						<Image src={`https://images.unsplash.com/photo-1619258252737-4a44a77c1927?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60`} alt={``}/>
						<a href="#">Bar & Love</a>
						<SubHeading text={'Local Bar with a flavour of love'}/>
					</div>
				</div>
				<ALink link={`/portfolio`} text={`See All Projects`}/>
			</div>
			<div className={'Section'}>
				<SubHeading text={`Good Design Is Good Business.`}/>
				<Image src={`https://images.unsplash.com/photo-1619258252737-4a44a77c1927?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60`} alt={``}/>
				<Par text={`Good Design is the corner stone of any great product. Good Design ensures communication, interaction, and accessibility.`}/>
				<ALink link={`/portfolio`} text={`Let's Work together to achieve your creative vision with Good Design`}/>
			</div>
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
		</main>
	)
}