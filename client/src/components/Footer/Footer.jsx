const Footer = () => {
	return (
		<footer
			className="w-full h-full rounded-t-2xl bg-purple-500 text-gray-100 px-12 py-8  flex justify-start items-center space-x-12 md:px-24 md:py-12 xl:px-72">
			<ul>
				<li className="footerListTitle">Local Links</li>
				<li className="footerLink">Home</li>
				<li className="footerLink">About</li>
				<li className="footerLink">Contact</li>
				<li className="footerLink">Portfolio</li>
			</ul>
			<ul>
				<li className="footerListTitle">Stack</li>
				<li className="footerLink"><a href="https://www.mongodb.com">MongoDB</a></li>
				<li className="footerLink"><a href="https://expressjs.com">Express</a></li>
				<li className="footerLink"><a href="https://reactjs.org">React</a></li>
				<li className="footerLink"><a href="https://nodejs.org/en">NodeJS</a></li>
			</ul>
		</footer>
	)
}

export default Footer