import { useEffect, useState } from "react";
import SubHeading from "../../../Headless/SubHeading";
import Image from "../../../Headless/Image";

const axios = require( "axios" )

const ProjectList = () => {

	const [curPortfolio, setCurPortfolio] = useState( [] )

	useEffect( () => {
		axios.get( "/api/" )
			.then( r => setCurPortfolio( r.data ) )
			.catch( err => console.log( err ) )
	}, [] )

	return(
		<div className={`curProjectGrid`}>
			{curPortfolio.map((item, index) => {
				if(index < 3){
					return(
						<div className={`projectItems`} key={item._id}>
							<a href="">
								<Image src={item.imgURL} alt=""/>
								<h2>{item.title}</h2>
								<SubHeading text={item.description}/>
							</a>
						</div>
					)
				}
				return(null)
			})}
		</div>
	)
}

export default ProjectList