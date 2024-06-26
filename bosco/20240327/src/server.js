const express = require("express");
const {default: mongoose} = require("mongoose");
const app = express();
const dotenv = require("dotenv");

const { imageRouter } = require("./router/imageRouter");
const { userRouters } = require("./router/userRouters");

dotenv.config();

app.use("/uploads", express.static("uploads"));

const server = async function () {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db연결됨");
    
    app.use(express.json());
    app.use("/user",userRouters);
    app.use("/upload", imageRouter);

    app.get("/",async (req,res)=>{
        try {
            res.send('helloWorld');
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    });

    app.listen(3000);
    console.log("서버열림")
  } catch (error) {
    console.log("연결안됨");
  }
};

server();