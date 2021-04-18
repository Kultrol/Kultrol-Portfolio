import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.MONGO_URI, {
	    useUnifiedTopology: true,
		useNewUrlParser: true,
	    useFindAndModify: false,
	 })
	.then(() => console.log('Connected To Database'))
	.catch(e => console.log(e))

export const db = mongoose.connection
