const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const {userRouter} = require("./routes/userRouter")

dotenv.config();

const server = async function () {
  try {
    await mongoose.connect(process.env.MONGO_URL); //promise
    console.log("db connected");
    app.use(express.json());  
    app.use("/user",userRouter);
    app.listen(3000);
  } catch (error) {
    console.log("잘못연결");
  }
};
server();


























// let result = mongoose.connect(MONGO_URL);
// console.log(result);

// mongoose.connect(MONGO_URL).then(function (result) {
//   return console.log(result);
// });

// async function fn(){}
// const fn = async function(){}

// fn()

// const fn = new Promise(function (resolve, reject) {});

// const server = async function () {
//   try {
//     await mongoose.connect(process.env.MONGO_URL); //promise
//     console.log("db connected");
//     app.use(express.json());

//     app.get("/user", async function (req, res) {
//       //1
//       //return res.send({user: users});
//       try {
//         const users = await User.find({});
//         return res.send({users});
//       } catch (error) {
//         return res.status(500).send({error: error.message});
//       }
//     });
