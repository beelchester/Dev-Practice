const Task = require('../models/Task')

const getAllTasks= async (req,res)=>{
try {
  const tasks = await Task.find({})
  res.status(200).json({status:'success',data:{tasks}})
} catch (error) {
    res.status(500).json({msg:error})  
}

}
const getTask= async (req,res)=>{
 
// const task = await Task.findById(req.params.id)
const {id:taskID} = req.params
try{
  task = await Task.findOne({_id:taskID})
  // if(!task){
  //   return res.status(404).json({msg:`No task with id ${taskID}`})
  // } // ! doesnt work here probably because of strictQuery so added it in catch block
  res.status(201).json({task})}
  catch (error) {
    if(error.message.startsWith('Cast to ObjectId failed for value')){
      return res.status(404).json({msg:`No task with id ${taskID}`})
    }
    res.status(500).json({msg:error})  
  }
  
}

const createTask= async (req,res)=>{
  try {
    const task = await Task.create(req.body)
  res.status(201).json({task})
  } catch (error) {
  res.status(500).json({msg:error})  
  }
}
const updateTask=async(req,res)=>{
try {
  const task = await Task.findById(req.params.id)
  task.name = req.body.name
  if (req.body.completed !== undefined){
  task.completed = req.body.completed}
  await task.save()
  res.status(200).json({ task });
} catch (error) {
  res.status(500).json({ msg: error });
}
}
const deleteTask=async(req,res)=>{
try {
    const task = await Task.findById(req.params.id)
    await task.remove() // better practice as it will also validate the id
    res.status(201).json({ msg: 'Task Deleted' });
    
} catch (error) {
  if(error.message.startsWith('Cast to ObjectId failed for value')){
    return res.status(404).json({msg:`No task with id ${req.params.id}`})
  }
  res.status(500).json({msg:error})
}
}


module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
}