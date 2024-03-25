const { Router } = require('express');
const { default: mongoose } = require('mongoose');
const { User } = require('../model/User');
const userRouter = Router();

userRouter.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        return res.send({ users });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

userRouter.post('/', async (req, res) => {
    try {
        let { username, name } = req.body;
        if (!username) {
            return res.status(400).send({ error: '이름이 없네요!!!!!' });
        }
        if (!name || !name.first || !name.last) {
            return res.status(400).send({ error: '성/이름이 없네요!!!' });
        }

        const user = new User(req.body);
        await user.save();
        res.send({ user });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

userRouter.get('/:userId', async (req, res) => {
    try {
        let { userId } = req.params;
        const user = await User.findOne({ _id: userId });
        res.send({ user });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

userRouter.delete('/:userId', async (req, res) => {
    try {
        let { userId } = req.params;

        if (!mongoose.isValidObjectId(userId)) {
            return res.status(400).send({ error: '유저가 없네요!!!!!' });
        }
        const user = await User.findByIdAndDelete({ _id: userId });
        return res.send({ user });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

userRouter.put('/:userId', async (req, res) => {
    try {
        let { userId } = req.params;
        if (!mongoose.isValidObjectId(userId)) {
            return res.status(400).send({ error: '유저가 없네요!!!!!' });
        }
        let { age, email } = req.body;
        if (!age) {
            return res.status(400).send({ error: '나이입력해주세요' });
        }
        if (typeof age !== 'number') {
            return res.status(400).send({ error: '숫자입력해주세요' });
        }
        if (!email) {
            return res.status(400).send({ error: '이메일입력해주세요' });
        }
        if (typeof email !== 'string') {
            return res.status(400).send({ error: '문자를입력해주세요' });
        }
        const user = await User.findByIdAndUpdate(
            userId,
            { $set: { age, email } },
            { new: true } // 화면에서 바로반영
        );
        return res.send({ user });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

module.exports = { userRouter };
