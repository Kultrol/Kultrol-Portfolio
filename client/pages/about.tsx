import Description from "../components/About/Description";
import SkillSet from "../components/About/SkillSet";
import Workflow from "../components/About/Workflow";
import clientPromise from "../Database/connectDB";
import { GetStaticProps} from 'next'


const About = (data: { data: any[]}) => {
	return (
		<div>
			<Description/>
			<SkillSet serverData={data}/>
			<Workflow/>
		</div>
	)
}

export default About

export const getStaticProps :GetStaticProps = async (context) => {

	const client = await clientPromise
	const db = await client.db(`${process.env.MONGO_DB}`)
	const serverData = await db.collection('User_Data').find({}).toArray()
	const data = await JSON.parse(JSON.stringify(serverData))

	if(!data){
		return {
			notFound: true
		}
	}

	return {
		notFound: false,
		props: {data}, // will be passed to the page component as props
	}
}


