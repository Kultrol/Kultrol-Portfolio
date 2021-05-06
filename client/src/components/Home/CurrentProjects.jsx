import Par from "../../Headless/Par";
import SubHeading from "../../Headless/SubHeading";
import ALink from "../../Headless/ALink";
import ProjectList from "./CurrentProjects/ProjectList";


const CurrentProjects = () => {
	return(
		<section className={'Section CurrentProjects'}>
			<Par text={`I'm in constant development, whether its new or current, I try to optimize, enhance, and improve the experience of the project for the user`}/>
			<SubHeading text={`Current Projects`}/>
			<ProjectList/>
			<ALink link={`/portfolio`} text={`See All Projects`}/>
		</section>
	)
}

export default CurrentProjects