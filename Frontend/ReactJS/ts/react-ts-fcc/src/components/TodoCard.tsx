import React from 'react'
import { Todo } from '../model'
import TodoList from './TodoList';

interface Props {
todo: Todo;
todos: Todo[];
setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
key:number
}

const TodoCard:React.FC<Props> = ({todo, key, todos, setTodos}) => {

  function handleDone(id:number){
    setTodos(todos.map((t)=>(
      t.id===id?({...t,isDone:!t.isDone}):t
    )))
  }
  return (
    <div className='flex justify-around my-4'>
      <h1>{todo.todo}</h1>
      <button onClick={()=>handleDone(todo.id)}>Done</button>
      <h1>{todo.isDone.toString()}</h1>
    </div>
  )
}

export default TodoCard