
const AboutSite = () => {
	return(
		<div className="aboutSiteDiv">
			<h2>About Site</h2>
			<p className={`sm:px-24`}>This Site was created using The <span className="transition-colors duration-100 hover:text-green-400"><a
				href="https://www.mongodb.com">M</a></span><span className="transition-colors duration-100 hover:text-gray-400"><a href="https://expressjs.com">E</a></span><span className="transition-colors duration-100 hover:text-blue-400"><a
				href="https://reactjs.org">R</a></span><span className="transition-colors duration-100 hover:text-green-700"><a href="https://nodejs.org/en/">N</a></span> Stack with Styling and Testing done by TailwindCss and JestJs respectively </p>
		</div>
	)
}

export default AboutSite