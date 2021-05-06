const Card = ( { Img, Title, Description } ) => {
	return (
		<li>
			<a href="#">
				<img src={Img} alt=""/>
				<div>
					<h2>{Title}</h2>
					<p>{Description}</p>
				</div>
			</a>
		</li>
	)
}

export default Card