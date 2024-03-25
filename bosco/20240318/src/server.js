const express = require("express");
const app = express();
const users = [];
const MONGO_URL="mongodb+srv://bosco:qwer1234@bootcamp.wqiayye.mongodb.net/";
const mongoose = require("mongoose")
// const User = require("./model/User.js")

const SERVER =  async function(){
    try {
        await mongoose.connect(MONGO_URL);
        app.use(express.json());

        app.get("/", (req, res)=>{
            return res.send("helloWorld")
        });
        
        // app.get("/user", (req,res)=>{
        //     return res.send({user: users})
        // });
        
        app.post("/user", async (req,res)=>{
            // users.push({
            //     name: req.body.name,
            //     age:req.body.age
            // });
            // let(username,name)=req.body;
            
            let(username, name)= req.body;
            if(!username){
                return res.status(400).send({error:"이름이 잘못 되었습니다."});
            }
            if()

            const user = new User(req.body);
            await user.save();
            res.send({user});
        })
        
        app.listen(3000,()=>{
            console.log("server listening on port 3000")
        })
    } catch (error) {
        console.log(error);
    }
    

    
};

SERVER();



