
interface CardItem{
    Img: string,
    Title: string,
    Description:string
}

const Card = (props: CardItem) => {
	return (
		<li>
			<a href="#">
				<img src={props.Img} alt=""/>
				<div>
					<h2>{props.Title}</h2>
					<p>{props.Description}</p>
				</div>
			</a>
		</li>
	)
}

export default Card