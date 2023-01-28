import React, { useState } from 'react'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { Todo } from './model'

const App:React.FC = () => { //! React.FC as it is a functional component ... React.ReactNode contains all the possible return types

  const [todo, setTodo] = useState<string>("") //! This is how we assign type to state
  // console.log(todo)
  const [todos, setTodos] = useState<Todo[]>([]) //! assigning todo object array using interface made in model.ts
  
  function changeHandler(e:React.FormEvent){ // ! assigns form event type
    e.preventDefault();
    todo&&(
      setTodos([...todos,{
        id: Date.now(),
        // todo:  todo,
        todo,
        isDone:false
      }]
      ),
      setTodo("")
    )
  }
  return (
    <div className='h-[100vh] w-full bg-[#e4b1f8] '>
      <nav className='h-20 w-full  flex justify-center items-center '>
        <h1 className='text-4xl font-semibold'>To-Do</h1>
      </nav>
        <InputField todo={todo} setTodo={setTodo} changeHandler={changeHandler} />
       <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}


export default App