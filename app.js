import express from 'express'
import bodyParser from "body-parser";
import path from 'path'
import {Personal_Projects} from "./Database/Models/Personal_Projects.js";
import './Database/db.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: true } ) )

app.route( '/api/portfolio' )
	.get( ( req, res ) => {
		Personal_Projects.find( {} )
			.then( r => res.send( r ) )
			.catch( err => console.error(err))
	} )

if(process.env.Node_ENV === 'production'){
	app.use(express.static('client/build'))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

app.listen( PORT, () => {
	console.log( "Server on http://localhost:5000" )
} )