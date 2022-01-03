
import Link from 'next/link'

const Home = () => {

	return (
			<main>
				<div className={'Section'}>
					<h2>A Web Developer in Training</h2>
					<div>
						<p>Hi, I'm Kevin, a web developer with a passion for creating and exploring new ideas.</p>
						<Link href={`/about`}>
							<a>About Me</a>
						</Link>
					</div>
				</div>
				<div className={'Section'}>
					<h3>What's It Made Of?</h3>
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
					<h3>Good Design Is Good Business</h3>
					<p>Good Design is the corner stone of any great product. Good Design ensures communication, interaction, and accessibility.</p>
					<Link href={`/contact`}>
						<a>Let's Work together to achieve your creative vision with Good Design</a>
					</Link>
				</div>
			</main>
		)
}

export default Home;
