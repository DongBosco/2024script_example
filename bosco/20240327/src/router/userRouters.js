const {User} = require("../model/User");
const {Router} = require("express")
const userRouters = Router()
const {hash} = require("bcryptjs")

userRouters.post("/reg", async (req,res)=>{
    try {
        const password = await hash(req.body.password,10);

        const user = await new User({
            ...req.body, password: password
        }).save();
        return res.send({user})
    } catch (error) {
        return res.status(500).send({error: error.message})        
    }
} )
userRouters.get("/", async (req,res)=>{
    try {
        const user = await User.find({})
        return res.send({user})
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
})

userRouters.post("/login", async (req,res)=>{
    try {
        console.log(req.body)
        const user = await User.findOne({useremail: req.body.useremail})
        return res.send(req.body)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
})
module.exports = {userRouters};