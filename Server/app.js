const mongoose = require( "mongoose" )
const bodyParser = require( "body-parser" )
const express = require( "express" )
const URI = "mongodb+srv://Kevin-Medina:okJ14q8BCHUmHnqB@kultrolsite.gkohr.mongodb.net/KultrolSite?retryWrites=true&w=majority"
const app = express()
const PORT = 5000
const db = mongoose.connection

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: true } ) )

mongoose.connect( URI, { useNewUrlParser: true, useUnifiedTopology: true } )
db.on( 'error', console.error.bind( console, 'connection error:' ) );
db.once( 'open', function () {
	console.log( "Connected to Database" )
} );


const personalProjectSchema = new mongoose.Schema( {
	title: String,
	description: String,
	imgURL: String
}, { collection: "Personal_Projects" } )
const Personal_Projects = mongoose.model( 'Personal_Projects', personalProjectSchema )


app.route( '/api' )
	.get( ( req, res ) => {
		Personal_Projects.find( {} )
			.then( r => res.send( r ) )
	} )

app.listen( PORT, () => {
	console.log( "Server on http://localhost:5000" )
} )