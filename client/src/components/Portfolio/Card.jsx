const Card = ( { Img, Title, Description } ) => {
	return (
		<li className={`flex flex-col mx-8 border-gray-300 hover:border-gray-500 cursor-pointer border-2 border-solid rounded-xl shadow-lg hover:shadow-2xl transition-all duration-250 md:flex-row md:mx-24 lg:mx-28 xl:mx-44`}>
			<img src={Img} alt=""
			     className={`w-full h-60 object-cover rounded-t-lg md:w-60 md:rounded-l-lg md:rounded-t-none lg:w-72 xl:w-96`}/>
			<div className={`py-4 px-6 flex flex-col justify-center items-start space-y-2 md:justify-start`}>
				<h2>{Title}</h2>
				<p>{Description}</p>
			</div>
		</li>
	)
}

export default Card