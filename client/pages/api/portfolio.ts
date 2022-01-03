import clientPromise from "../../Database/connectDB";
import type { NextApiRequest, NextApiResponse } from 'next'



const handler = async (req : NextApiRequest,res : NextApiResponse) => {
	const client = await clientPromise
	const db = await client.db(`${process.env.MONGO_DB}`)
	const serverData = await db.collection('User_Data').find({}).toArray()
	const data = await JSON.parse(JSON.stringify(serverData))
	console.log(data)
	if(req.method === "GET"){
		res.send(data)
	}
	// client.db() will be the default database passed in the MONGODB_URI
	// You can change the database by calling the client.db() function and specifying a database like:
	// const db = client.db("myDatabase");
	// Then you can execute queries against your database like so:
	// db.find({}) or any of the MongoDB Node Driver commands
}

export default handler