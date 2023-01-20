const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt")
const {users} = require('../db');
const JWT = require("jsonwebtoken")

router.post(
  "/signup",
  [
    check("email", "Please enter valid email").isEmail(),
    check("password", "Please enter valid password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const {email, password} = req.body;

    // validating the user
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // checking if user already exists
    let user = users.find((user) => {
      return user.email === email;
    });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10) // salt is 10, salt is a random string that is added to the password to make it more secure
    users.push({
      email,
      password: hashedPassword
  });

  const token = await JWT.sign({
    email //payload
  },"wa12n3kj21n3j4bh2jhj2kb13jn", //secret key (random, store it in env)
  //options
   { expiresIn: 360000 // determines how long the token will be valid for
  }
);
res.json({token})
// jwt token is stored in the browser(localestorage), and is sent to the server with every request, so that the server can verify the user
})

// get all users
router.get("/all",(req,res)=>{
  res.json(users)
})

// login route
router.post("/login", async (req,res)=>{
  const {email,password} = req.body
  let user = users.find(user=>{
    return user.email===email
  })
  console.log(users)
  if (!user){
    return res.status(400).json({
      "errors":{"msg":"User not found, please register"}
    })
  }

let isMatch =await bcrypt.compare(password,user.password)
if (!isMatch){
  return res.status(400).json({
    "errors":{"msg":"Invalid Password"}
  })
}

const token = await JWT.sign({
  email //payload
},"wa12n3kj21n3j4bh2jhj2kb13jn", //secret key (random, store it in env)
//options
 { expiresIn: 360000 // determines how long the token will be valid for
}
);
res.json({token})

})

module.exports = router;
