const express = require("express")

const app = express()
// node server.js to run the server
// instead of restarting server to see the changes we can use nodemon package
// nodemon server.js
app.get("/",function(req,res){ // / is root , req request, res response
  res.send("<h1>Helloasd</h1>")
})

//for multiple routes
app.get("/contact",function(req,res){  
  res.send("<h1>Contact</h1>")
}) 

app.get("/about",function(req,res){ 
  res.send("<h1>About</h1>")
})

app.listen(4000, function(){
  console.log("Server started on port 4000")
}) //port server
 