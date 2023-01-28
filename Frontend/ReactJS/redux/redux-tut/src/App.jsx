import {useSelector, useDispatch} from "react-redux"
import {increment,decrement,toggleTheme} from "./Actions/index"

const App = () => {
// ! we want to replicate the green commented code using redux 
  //* const [count, setCount] = useState(0)
  //* function increment (){
  //*   setCount(prev=> prev + 1 )
  //* }
  // *function decrement (){
  // *  setCount(prev=> prev - 1 )
  // *}

const myCount = useSelector((count) => count.changeCount)
const myTheme = useSelector((theme) => theme.changeTheme)
const dispatch = useDispatch()
console.log(myCount,myTheme)

  return (
    <>
    <button onClick={()=>dispatch(increment())}>+</button>
    <h1>{myCount}</h1>
    <button onClick={()=>dispatch(decrement())} >-</button>
    <button onClick={()=>dispatch(toggleTheme())}>Theme:{myTheme.toString()}</button>
    </>
  )
}

export default App