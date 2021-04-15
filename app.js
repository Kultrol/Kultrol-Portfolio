import express from 'express'
import mongoose from 'mongoose'
import bodyParser from "body-parser";
import {URI} from './Secrets/URI.js'
import path from 'path'
const app = express()
const PORT = process.env.PORT || 5000
const db = mongoose.connection

mongoose.connect( URI, { useNewUrlParser: true, useUnifiedTopology: true } )
db.on( 'error', console.error.bind( console, 'connection error:' ) );
db.once( 'open', function () {
	console.log( "Connected to Database" )
} );

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: true } ) )


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

if(process.env.Node_ENV === 'production'){
	app.use(express.static('../client/build'))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve('../', 'client', 'build', 'index.html'))
	})
}


app.listen( PORT, () => {
	console.log( "Server on http://localhost:5000" )
} )