import clientPromise from "../Database/connectDB";
import Card from "../components/Portfolio/Card";
import { GetStaticProps} from 'next'


export const getStaticProps : GetStaticProps = async ( context ) => {

    const client = await clientPromise
    const db = await client.db( `${process.env.MONGO_DB}` )
    const serverData = await db.collection( 'Personal_Projects' ).find( {} ).toArray()
    const data = await JSON.parse( JSON.stringify( serverData ) )

    if ( !data ){
        return {
            notFound: true
        }
    }

    return {
        notFound: false,
        props: { data }, // will be passed to the page component as props
    }
}


const Portfolio = ( data: {data: any[]} ) => {

	const curPortItems = data.data.map( item => {
		if ( item.current === true ){
			return (
				<div key={item._id}>
					<hr/>
					<Card
						Title={item.title}
						Description={item.description}
						Img={item.imgURL}
					/>
					<hr/>
				</div>
			)
		}
		return null
	} )
	const pastPortItems = data.data.map( item => {
		if ( item.current === false ){
			return (
				<div key={item._id}>
					<hr/>
					<Card
						Title={item.title}
						Description={item.description}
						Img={item.imgURL}
						key={item._id}
					/>
					<hr/>
				</div>
			)
		}
		return null
	} )
	return (
		<div className={`portfolio`}>
			<div className={`currentProjects`}>
				<div className="text-red-500">
					<h1>Current Projects</h1>
				</div>
				<ul>
					{curPortItems}
				</ul>
			</div>
			<div className={`pastProjects`}>
				<h1>Past Projects</h1>
				<ul>
					{pastPortItems}
				</ul>
			</div>
		</div>
	)
}

export default Portfolio

