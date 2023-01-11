import { useState } from "react"
import ta from "../api/ta"

export default () =>{
  const [result, setResult] = useState({
    data:null,
    loading:false,
    error:null
  })

  const searchRestaurants = async () =>{
   setResult({
    data:null,
    loading:true,
    error:null
   }) 

     try {
      const response = await ta.get()
      setResult({
        data:response.data,
        loading:false,
        error:null
       })  
     } catch (error) {
      setResult({
        data:null,
        loading:false,
        error:"Something Went Wrong"
       })   
     }
  }
  return(
    [result, searchRestaurants]
  )
}
