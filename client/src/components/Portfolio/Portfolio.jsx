import { useEffect, useState } from "react";
import Card from "./Card";

const axios = require( "axios" )

const Portfolio = () => {

	const [curPortfolio, setCurPortfolio] = useState( [] )

	useEffect( () => {
		axios.get( "/api" )
			.then( r => setCurPortfolio( r.data ) )
			.catch( err => console.log( err ) )
	}, [] )

	return (
		<div className={`h-full flex flex-col w-full my-24 space-y-16`}>
			<div className={`h-1/6 flex justify-center items-center`}>
				<h1 className={`text-5xl font-bold text-purple-600`}>Projects I've Done</h1>
			</div>
			<div className={`h-5/6`}>
				<ul className={`flex flex-col space-y-12`}>
					{curPortfolio.map( item => {
						return (
							<Card
								Title={item.title}
								Description={item.description}
								Img={item.imgURL}
								key={item._id}
							/>
						)
					} )}
				</ul>
			</div>
		</div>
	)
}

export default Portfolio