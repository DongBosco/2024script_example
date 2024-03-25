const express = require('express');
const app = express();
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');
const { userRouter } = require('./routes/userRouter');
const { blogRouter } = require('./routes/blogRouter');
const { commentRouter } = require('./routes/commnetRouter');

const MONGO_URL =
    'mongodb+srv://dk960227:qwer1234@bosco.izxkqmx.mongodb.net/?retryWrites=true&w=majority&appName=bosco';
dotenv.config();

const server = async function () {
    try {
        await mongoose.connect(MONGO_URL); //promise
        console.log('db connected');
        app.use(express.json());
        app.get('/', async (req, res) => {
            try {
                res.send('helloWorld');
            } catch (error) {
                return res.status(500).send({ error: error.message });
            }
        });
        app.use('/user', userRouter);
        app.use('/blog', blogRouter);
        app.use('/comment', commentRouter);
        app.listen(3000);
    } catch (error) {
        console.log('잘못연결');
        console.log({ error: error.message });
    }
};
server();
