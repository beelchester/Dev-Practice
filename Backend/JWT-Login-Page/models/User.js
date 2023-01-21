// const mongoose = require('mongoose'); // es6 import code for this is 
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true}, // unique: true - no duplicates
    password: {type: String, required: true}
})

// module.exports = mongoose.model('User', userSchema)
export default mongoose.model('User', userSchema)