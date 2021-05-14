import Description from "./Description";
import SkillSet from "./SkillSet";
import './About.scss'
import Workflow from "./Workflow";

const About = () => {
	return (
		<div className={`About`}>
			<Description/>
			<SkillSet/>
			<Workflow/>
		</div>
	)
}

export default About