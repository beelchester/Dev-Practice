const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  //key value pairs
  name: String,
  // age: Number,
  age: {
    type: Number,
    min:1,
    max:100,
    //custom schema validation
    validate:{
        validator: value => value % 2 ===0, //will require value to be even
        message: props => `${props.value} is not even number`
    }
  },
  // to set required properties
  email: {
    type: String,
    minLength:5,
    required: true,
    lowercase: true, // will automatically change the data to lowercase
    //  similarly for uppercase
  },
  createdAt: { 
    type: Date , 
    immutable:true, // it will never let us update its value ever once created

    // default will be used if value is not provided
    default:() => Date.now(), //current date
  },
  updatedAt: { 
    type: Date , 
    default:() => Date.now(),
  },
  // bestFriend: mongoose.SchemaTypes.ObjectId, //specifies that its reference to another object
  bestFriend:{ 
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User" //specifying which model we are using for reference
  },
  hobbies: [String],
  address: addressSchema,
  // can also directly put it like the below
  // {
  //   street:String,
  //   city: String
  // }
});

module.exports = mongoose.model("User", userSchema); //this will create User collection in mongodb with structure/schema as userSchema
