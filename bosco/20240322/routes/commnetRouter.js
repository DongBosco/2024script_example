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
        const { content, userId, blogId } = req.body; //수정요

        let user = await User.findById(userId);
        if (!user) {
            return res.status(400).send({ err: 'user가 없습니다.' });
        }
        let blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(400).send({ err: 'blog가 없습니다.' });
        }

        let comment = new Comment({ ...req.body, user, blog }); //수정요

        await comment.save();
        return res.send(comment);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
commentRouter.get('/', async (req, res) => {
    try {
        const comments = await Comment.find({});
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
