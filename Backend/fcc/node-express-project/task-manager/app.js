require("dotenv").config();
const connectDB = require("./db/connect");
const express = require('express');
const app = express();

const tasksRouter = require("./routes/tasks")
const notFound = require("./middleware/notFound")
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};
start();


app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks',tasksRouter)

app.use(notFound)
const port = 4000;

app.listen(port,console.log(`Server is running on port ${port}`))