
const AboutMe = () => {
	return(
		<>
			<img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="" className="aboutImg"/>
			<div className="aboutTexDiv">
				<h2 className={`lg:text-4xl xl:text-5xl`}>About Me</h2>
				<p className={`lg:text-3xl xl:text-4xl`}>
					I'm Kevin, an 18-year-old Web Developer with over 3 years of experience. I'm knowledgeable in several technologies such as <span className={`text-blue-400`}><a
					href="https://reactjs.org/">React</a></span>, <span className={`text-yellow-400`}><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a></span>, <span className={`text-blue-600`}><a
					href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a></span>, <span className={`text-red-500`}><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a></span>, <span className={`text-green-700`}><a
					href="https://nodejs.org/en/">NodeJS</a></span>, <span className={`text-green-400`}><a href="https://www.mongodb.com">MongoDB</a></span>, and more.
				</p>
			</div>
		</>
	)
}

export default AboutMe