import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(`mongodb+srv://Kevin-Medina:${process.env.REACT_APP_API_KEY}@kultrolsite.gkohr.mongodb.net/KultrolSite?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true } )
	.then(() => console.log('Connected To Database'))
	.catch(e => console.log(e))

export const db = mongoose.connection
