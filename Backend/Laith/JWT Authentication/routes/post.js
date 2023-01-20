const router = require("express").Router();
const {publicPost, privatePost} = require('../db');
const checkAuth = require("../middleware/checkAuth")

router.get("/public", (req, res) => {
  res.json(publicPost);
});

router.get("/private",checkAuth, (req, res) => {

  res.json(privatePost);
});


module.exports = router;