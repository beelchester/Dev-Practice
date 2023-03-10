import { createRequire } from "module";
const require = createRequire(import.meta.url); // for ES6 modules support
require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");

// const User = require('./models/User');
import User from "./models/User.js";
import RefreshToken from "./models/RefreshToken.js";
const app = express();
app.use(express.json());
app.use(express.static("./dist"));

const start = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (e) {
    console.log(e);
  }
};
start();

// signup
app.post(
  "/api/auth/signup",
  [
    check("email", "Incorrect email").isEmail(),
    check("password", "Password must be longer than 5").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }
      const userExist = await User.findOne({ email });
      if (userExist) {
        return res
          .status(400)
          .json({ message: "User with this email already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ name, email, password: hashedPassword });
      await user.save();
      res.status(201).json({ message: "User created" });
    } catch (e) {
      res.status(500).json({ message: "Something went wrong, try again" });
    }
  }
);

// login
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const accessToken = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign({ userId: user.id }, process.env.REFRESH_TOKEN);
    const oldRefreshToken = await RefreshToken.findOne({ userId: user.id });
    if (oldRefreshToken) {
      await RefreshToken.deleteOne({ userId: user.id });
    }
    const newRefreshToken = new RefreshToken({ token: refreshToken, userId: user.id});
    await newRefreshToken.save();

    res.status(200).json({accessToken, refreshToken})
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

// refresh token
app.post("/api/auth/refresh", async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(401).json({ message: "User is not authorized" });
    }
    const token = await RefreshToken.findOne({ token: refreshToken });
    if (!token) {
      return res.status(401).json({ message: "User is not authorized" });
    }
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Refresh token is not valid" });
      }
      const accessToken = jwt.sign({ userId: user.userId }, process.env.ACCESS_TOKEN, {
        // expiresIn: "10s",
        expiresIn: "15m",
      });
      res.status(200).json({accessToken, refreshToken, message: "Token refreshed"})
    });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, try again" });
  } 
});




app.listen(2000, () => {
  console.log("Server running on port 2000");
});
