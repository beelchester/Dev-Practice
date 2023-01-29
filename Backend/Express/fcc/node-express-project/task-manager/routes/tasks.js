const express = require("express")
const router = express.Router()
const {getAllTasks, createTask, deleteTask, getTask,updateTask} = require('../controller/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').delete(deleteTask).get(getTask).patch(updateTask)

module.exports = router