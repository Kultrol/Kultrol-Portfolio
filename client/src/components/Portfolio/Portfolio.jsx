import Card from "./Card";


const Portfolio = () => {
	return(
		// 	<div className={`h-5/6`}>
		// 		<ul className={`flex flex-col space-y-4`}>
		//
		<div className={`h-full flex flex-col w-full my-24 space-y-16`}>
			<div className={`h-1/6 flex justify-center items-center`}>
				<h1 className={`text-5xl font-bold text-purple-600`}>Projects I've Done</h1>
			</div>
			<div className={`h-5/6`}>
				<ul className={`flex flex-col space-y-12`}>
					<Card
						Title={`Nice Food Inc.`}
						Description={`Food Was Actually Good`}
						Img={`https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2535&q=80`}
					/>
					<Card
						Title={`Nice House Inc.`}
						Description={`House Was Nice`}
						Img={`https://images.unsplash.com/photo-1617978241112-898785df45b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80`}
					/>
					<Card
						Title={`Nice Plane Inc.`}
						Description={`Plane Was Actually Good`}
						Img={`https://images.unsplash.com/photo-1486012563054-a205a26e389b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80`}
					/>
				</ul>
			</div>
		</div>
	)
}

export default Portfolio