import { useEffect, useState } from "react";
import axios from "axios";

const SkillSet = () => {

	const [curSkills, setCurSkills] = useState( [] )

	useEffect( () => {
		axios.get( "/api/skills" )
			.then( r => setCurSkills( r.data[0].skills ) )
			.catch( err => console.log( err ) )
	}, [] )

	return(
		<div className={`skillSet`}>
			<div className={`expertise`}>
				<h2>My Expertise</h2>
				<ul>
					{curSkills.map(skill => {
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
					{curSkills.map(skill => {
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