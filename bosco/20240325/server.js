const express = require("express")
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');
const app = express()

dotenv.config()

const server = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("DB연결완료")
    } catch (error) {
        console.log("DB연결실패")
    }
}

server()