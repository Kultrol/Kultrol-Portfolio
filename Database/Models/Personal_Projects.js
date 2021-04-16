import mongoose from "mongoose";

const personalProjectSchema = new mongoose.Schema( {
	title: String,
	description: String,
	imgURL: String
}, { collection: "Personal_Projects" } )

export const Personal_Projects = mongoose.model( 'Personal_Projects', personalProjectSchema )

