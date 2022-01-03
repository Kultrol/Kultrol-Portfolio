const mongoose = require('mongoose')

const PersonalProjectSchema = new mongoose.Schema( {
	title: String,
	description: String,
	imgURL: String,
	current: Boolean
}, {collection: "Personal_Projects"})


export default mongoose.models['Personal_Projects'] || mongoose.model( 'Personal_Projects', PersonalProjectSchema );
