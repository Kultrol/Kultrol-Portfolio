const Card = ( { Img, Title, Description } ) => {
	return (
		<li>
			<img src={Img} alt=""/>
			<div>
				<h2>{Title}</h2>
				<p>{Description}</p>
			</div>
		</li>
	)
}

export default Card