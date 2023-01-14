const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')
//routes

// Getting all
router.get('/',async (req,res)=>{
  // res.send("Hello")
  try {
      const subscribers = await Subscriber.find() //all subscribers
      res.json(subscribers)
  } catch (error) {
    res.status(500).json({message: error.message})//500 is status code for server error
  }
})
// Getting one
router.get('/:id',getSubscriber, (req,res)=>{
  // res.send(req.params.id)
  // res.json(res.subscriber.name)
  res.json(res.subscriber)
})
//Creating one
router.post('/',async (req,res)=>{
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel
  })
  try {
    const newSubscriber = await subscriber.save()//save() to save the subscriber to the database
    res.status(201).json(newSubscriber)//201 is status code for created
  } 
  catch (error) {
    res.status(400).json({message: error.message})//400 is status code for bad request by user
  }
})
// Updating one
router.patch('/:id',getSubscriber,async (req,res)=>{ //patch instead of put as it only updates particular fields of the resource instead of all fields
  if(req.body.name != null){ // if name is not null then update it
    res.subscriber.name = req.body.name
  }
  if(req.body.subscribedToChannel != null){ // if subscribedToChannel is not null then update it  
    res.subscriber.subscribedToChannel = req.body.subscribedToChannel
  }
  try {
    const updatedSubscriber = await res.subscriber.save()
    res.json(updatedSubscriber)
  }
  catch (error) {
    res.status(400).json({message: error.message})//400 is status code for bad request by user
  }
})
// Deleting one
router.delete('/:id',getSubscriber,async (req,res)=>{
  try {
    await res.subscriber.remove() //remove() is a mongoose function to remove the subscriber from the database
    res.json({message: "Deleted Subscriber"})
  } catch (error) {
    res.status(500).json({message: error.message})//500 is status code for server error
  }
})

//! as many of the routes are using id so to avoid repetition we can use a middleware function
async function getSubscriber(req,res,next){//next is used to move to the next function in the middleware chain
  let subscriber
  try {
    subscriber = await Subscriber.findById(req.params.id)
    if(subscriber == null){
      return res.status(404).json({message: "Cannot find subscriber"})//404 is status code for not found
    }
  } catch (error) {
    return res.status(500).json({message: error.message})//500 is status code for server error  
  }
res.subscriber  = subscriber  //to access the subscriber in the next function we are storing it in res.subscriber
next()//to move to the next function
}

module.exports = router