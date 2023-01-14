// npm init -y
// npm i mongoose
// npm i --save-dev nodemon
// package.json -> scripts
//npm run devStart

const mongoose = require("mongoose");

const User = require("./User"); //will use the User model that we created

mongoose.connect("mongodb://localhost/mongoosedb");
//the bottom part is not really required as mongoose internally only passes the commands only if its connected
// ()=>{
//   console.log("connected")
// }, e=> console.error(e)
// )

// schema -> structure of data
// model -> use of schema for real objects
// query -> reading data

//make separate files for schema, like here user.js

async function run() {
  try {
    // !creating new user using User model

    // const user = new User({name:"Sahil",age:19})
    // await user.save() //used to make changes in actual databse

    // another way

    // const user = await User.create({
    //   name: "Sam",
      // age: "ada", //User validation failed: age: Cast to Number failed for value "ada" (type string) at path "age"
      // age:11, //User validation failed: age: 11 is not even numbe
      // age: 12,
      // User validation failed: email: Path `email` is required.
    //   email: "asdwsd",
    //   hobbies: ["dancing", "fighting"],
    //   address: {
    //     street: "Main st",
    //   },
    // });

    //! Update
    // user.name = "Sally";
    // await user.save();

    // console.log(user);

    // ! Finding and Query

    // const user1 = await User.findById("63c12befdbf6f792ccf79c7b")
    //? creating and updating can also be done using this method (by using functions on User)
    // ? but it is not recommended to do so as it will skip schema validation and deal directly with mogodb
    // ? so only use this method for finding and deleting

    // const user1 = await User.find({name:"Sahil"})
    // const user1 = await User.findOne({name:"Sally"}) //first Sally instance
    // const user1 = await User.exists({name:"s"})

    // ? Query conditions (filtering) in mongodb is complex so heres what mongoose provide, it is just called query in mongoose

    // const user1 = await User.where("name").equals("Sahil")
    const user1 = await User.where("age")
      .gt("10")
      .lt("50")
      .where("name")
      .equals("Sally")
      // .limit(2) //only 2 results
      .populate("bestFriend") //will show the actual object it is referring to instead of just its id
       //!for some reason the above not working and returning null
      .limit(1) 
      // .select("age") //will only show age field, along with id
      // user1[0].bestFriend= "63c126fe4f2f6f32e5d651c1" //updating bestfriend
      // await user1[0].save()
    console.log(user1)

    // !Delete
    // const user2 = await User.deleteOne({name:"Sally"})
    // await User.deleteOne({ name: "Sally" });
    // await User.deleteMany({name:"Sally"})
  } catch (e) {
    console.log(e.message);
  }
}
run();

// ? continue from 24:00 for schema methods/virtual and schema middleware