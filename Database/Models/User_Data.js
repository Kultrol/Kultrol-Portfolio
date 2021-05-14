import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema( {
	firsName: String,
	lastName: String,
	userName: String,
	age: Number,
	sex: String,
	emails: [String],
	skills: [{
		Technology: String,
		Learning: Boolean,
		url:String
	}]
}, { collection: "User_Data" } )

export const User_Data = mongoose.model( 'User_Data', userDataSchema )
