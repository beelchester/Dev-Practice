// npm init -y to say use to all (set to default) and quickly init
// npm i mongodb to install the node mongodb driver

//https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/
//https://youtu.be/M9Fs-CCe0Jo
const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    const db = client.db("thunderbolt")
    console.log(`Connected to databse ${db.databaseName}`)
    // Establish and verify connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Connected successfully to server");

    // to get all collections
    // const collections = await db.collections()
    // collections.forEach(c=>console.log(c.collectionName))
    
    const employees = db.collection('employees')
    //? inserting

    // await employees.insertMany([{
    //   "name":"Will",
    //   "ssn":999
    // },{
    //   "name":"Anna",
    //   "ssn":998
    // }])

    // ! recommended
    // const insertCursor = await employees.insertMany([{
    //   "name":"Will",
    //   "ssn":999
    // },{
    //   "name":"Anna",
    //   "ssn":998
    // }])

// console.log(insertCursor.insertedCount)

//? update

// const updateCursor = await employees.updateOne({"name":"Will"},{"$set":{"ssn":123}})
// console.log( updateCursor.modifiedCount)

// ? delete

const deleteCursor = await employees.deleteOne({"name":"Anna"})
console.log(deleteCursor.deletedCount)

// ? finding

const serachCursor = await employees.find()
// const serachCursor = await employees.find({"name":"Will"})
const result = await serachCursor.toArray()
result.forEach(r=>console.log(r))
// console.table(result)


  }  catch(ex){
      console.error(`Something went wrong ${ex}`)
    }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run();
