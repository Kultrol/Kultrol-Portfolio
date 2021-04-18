import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true } )
	.then(() => console.log('Connected To Database'))
	.catch(e => console.log(e))

export const db = mongoose.connection
