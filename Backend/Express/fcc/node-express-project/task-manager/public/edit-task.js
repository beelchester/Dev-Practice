const taskIDDOM = document.querySelector('.task-edit-id')
const taskNameDOM = document.querySelector('.task-edit-name')
const taskCompletedDOM = document.querySelector('.task-edit-completed')
const editFormDOM = document.querySelector('.single-task-form')
const editBtnDOM = document.querySelector('.task-edit-btn')
const formAlertDOM = document.querySelector('.form-alert')
const params = window.location.search
const id = new URLSearchParams(params).get('id')
let tempName

const showTask = async () => {
  try {
    const {
      data: { task },
    } = await axios.get(`/api/v1/tasks/${id}`)
    const { _id: taskID, completed, name } = task

    taskIDDOM.textContent = taskID
    taskNameDOM.value = name
    tempName = name
    if (completed) {
      taskCompletedDOM.checked = true
    }
  } catch (error) {
    console.log(error)
  }
}

showTask()

editFormDOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  const taskName = taskNameDOM.value
  const taskCompleted = taskCompletedDOM.checked
    try {
      const { data : {task} } = await axios.patch(`/api/v1/tasks/${id}`, {
        name: taskName,
        completed: taskCompleted,
      });
      formAlertDOM.style.display = 'block'
      formAlertDOM.textContent = `${task.name}`
      formAlertDOM.classList.add('text-success')
    } catch (error) {
      console.error(error)
      taskNameDOM.value = tempName
      formAlertDOM.style.display = 'block'
      formAlertDOM.innerHTML = `${error}`
    }})
