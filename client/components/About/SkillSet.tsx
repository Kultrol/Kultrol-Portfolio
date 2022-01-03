import { useEffect, useState } from "react";

const SkillSet = (serverData) => {
	const [skills, setSkills] = useState([])
	useEffect(() => {
		setSkills(serverData.serverData.data[0].skills)
	})

	return(
		<div className={`skillSet`}>
			<div className={`expertise`}>
				<h2>My Expertise</h2>
				<ul>
					{skills.map(skill => {
						if(skill.Learning === false){
							return(
								<li key={skill._id}>
									<a href={skill.url}>
										{skill.Technology}
									</a>
								</li>
							)
						}
						return null
					})}
				</ul>
			</div>
			<div className={`learning`}>
				<h2>Currently Learning</h2>
				<ul>
					{skills.map(skill => {
						if(skill.Learning === true){
							return(
								<li key={skill._id}>
									<a href={skill.url}>
										{skill.Technology}
									</a>
								</li>
							)
						}
						return null
					})}
				</ul>
			</div>
		</div>
	)
}

export default SkillSet



