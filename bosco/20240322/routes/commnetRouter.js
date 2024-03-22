const { Router } = require('express');
const mongoose = require('mongoose');
const { Blog } = require('../model/Blog');
const { User } = require('../model/User');
const { Comment } = require('../model/Comment');
const commentRouter = Router();

// content: { type: String, required: true },
// user: { type: Types.ObjectId, required: true, ref: 'user' },
// blog: { type: Types.ObjectId, required: true, ref: 'blog' },

commentRouter.post('/', async (req, res) => {
    try {
        const [blog, user] = await Promise.all([Blog.findOne({ _id: blogId }), User.findOne({ _id: userId })]);
        if (!blog || !user) {
            return res.status(400).send({ err: 'blog, user를 찾을수 없네요', blogId, userId, content });
        }

        const comment = new Comment({ content, user, blog });
        await comment.save();

        return res.send({ comment });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
commentRouter.get('/', async (req, res) => {
    try {
        const { blogId } = req.params;
        const comments = await Comment.find({ blogId });
        return res.send({ comments });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

commentRouter.get('/:commentId', async (req, res) => {
    //수정요
    try {
        const { commentId } = req.params;
        const comment = await Comment.findOne({ _id: commentId });
        return res.send({ comment });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

commentRouter.put('/:commentId', async (req, res) => {
    try {
        const { commentId } = req.params;
        const { content } = req.body;

        const comment = await Comment.findOneAndUpdate({ _id: commentId }, { content }, { new: true });

        return res.send({ comment });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
// commentRouter.patch('/:commentId', async (req, res) => {
//     try {
//         const { blogId } = req.params;
//         const { islive } = req.body;

//         const blog = await Blog.findByIdAndUpdate(blogId, { islive }, { new: true });
//         return res.send({ blog });
//     } catch (error) {
//         return res.status(500).send({ error: error.message });
//     }
// });

commentRouter.delete('/', async (req, res) => {
    try {
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

module.exports = { commentRouter };
