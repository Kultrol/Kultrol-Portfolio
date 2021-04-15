import express from 'express'
import mongoose from 'mongoose'
import bodyParser from "body-parser";
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

const db = mongoose.connection
mongoose.connect(`mongodb+srv://Kevin-Medina:${process.env.REACT_APP_API_KEY}@kultrolsite.gkohr.mongodb.net/KultrolSite?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true } )
	.then(r => console.log('Connected'))
	.catch(e => console.log(e))
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
	app.use(express.static('client/build'))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}


app.listen( PORT, () => {
	console.log( "Server on http://localhost:5000" )
} )