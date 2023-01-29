const JWT = require("jsonwebtoken")

module.exports = async (req,res,next) => {
  const token = req.header('x-auth-token')

  if(!token){
    return res.status(400).json({
      "errors" : {
        "msg":"Please provide a token"
      }
    })
  }

try {
  let user = await JWT.verify(token, "wa12n3kj21n3j4bh2jhj2kb13jn")
  req.user = user.email
} catch (error) {
  return res.status(400).json({
      "errors" : {
        "msg":"Invalid token"
      }
    })
}
next()
}