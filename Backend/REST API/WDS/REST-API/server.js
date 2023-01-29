require('dotenv').config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.set('strictQuery', false) // to get rid off deprecation warning

// mongoose.connect('mongodb://localhost/subscribers')
//  as the app will not just going to be locally hosted we are going to deploy it, hence we are creating a env for db
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error',(err)=>console.log(err)) 
db.once('open',() => console.log("Connected to database")) 
// on and once are event listeners in Mongoose.
// on is used to listen for a specific event to occur multiple times, such as a connection error.
// once is used to listen for a specific event to occur only once, such as a successful connection to the database.

app.use(express.json())

//.use allows to use middleware functions... the one which runs between client and server and has 
//access to request and response object
//here we've used built-in middleware function by express and it parse the incoming request body (data) to json

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers',subscribersRouter) //this will route url localhost:3000/subscribers to 
//subscriberRouter i.e. subscibers.js file


app.listen(4000,()=>console.log("Server has Started"))


