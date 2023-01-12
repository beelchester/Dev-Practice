const express = require("express")
const bodyParser = require("body-parser")

const app = express()
//body-parser to parse/get the data got from post method
app.use(bodyParser.urlencoded({extended:true})) //urlencoded to parse HTML and extended true to get nested objects, compulsory

app.get('/',(req,res)=>{
  res.sendFile(__dirname + "/index.html") //___dirname gives the directory of the current file
})

app.post('/',(req,res)=>{ //to handle post request
  
  console.log(req.body) //{ name1: '3', name2: '6', submit: '' }
  console.log(parseInt(req.body.name1)) //3

  let num1 = parseInt(req.body.name1)
  let num2 = parseInt(req.body.name2)
  let sum = num1+num2
  console.log(sum)
  res.send('sum='+sum)
})


app.listen(4000,()=>{
  console.log("server started at 4000")
})