import { useEffect, useState } from "react";
import Card from "./Card";
import './Portfolio.scss'

const axios = require( "axios" )

const Portfolio = () => {

	const [curPortfolio, setCurPortfolio] = useState( [] )

	useEffect( () => {
		axios.get( "/api" )
			.then( r => setCurPortfolio( r.data ) )
			.catch( err => console.log( err ) )
	}, [] )

	return (
		<div className={`portfolio`} >
			<div className={`currentProjects`}>
				<div>
					<h1>Current Projects</h1>
				</div>
				<ul>
					{curPortfolio.map( item => {
						if(item.current === true){
							return (
								<Card
									Title={item.title}
									Description={item.description}
									Img={item.imgURL}
									key={item._id}
								/>
							)
						}
						return(null)
					} )}
				</ul>
			</div>
			<div className={`pastProjects`}>
				<h1>Past Projects</h1>
				<ul>
					{curPortfolio.map( item => {
						if(item.current === false){
							return (
								<Card
									Title={item.title}
									Description={item.description}
									Img={item.imgURL}
									key={item._id}
								/>
							)
						}
						return(null)
					} )}
				</ul>
			</div>
		</div>
	)
}

export default Portfolio