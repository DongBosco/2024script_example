const { Router } = require('express');
const mongoose = require('mongoose');
const { Blog } = require('../model/Blog');
const { User } = require('../model/User');
const blogRouter = Router();

blogRouter.post('/', async (req, res) => {
    try {
        const {blogId} = req.params
        cosnt {content, userId} = req.body

        const [blog,user] = await Promise.all([
            Blog.findOne({_id:blogId}),
            User.findOne({_id:userId})
        ])
        const { title, content, islive, userId } = req.body;
        let user = await User.findById(userId);
        if (!user) {
            return res.status(400).send({ err: 'user가 없습니다.' });
        }

        let blog = new Blog({ ...req.body, user });

        await blog.save();
        return res.send(blog);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
blogRouter.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find({});
        return res.send({ blogs });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

blogRouter.get('/:blogId', async (req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await Blog.findOne({ _id: blogId });
        return res.send({ blog });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

blogRouter.put('/:blogId', async (req, res) => {
    try {
        const { blogId } = req.params;
        const { title, content } = req.body;

        const blog = await Blog.findOneAndUpdate({ _id: blogId }, { title, content }, { new: true });

        return res.send({ blog });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
blogRouter.patch('/:blogId/live', async (req, res) => {
    try {
        const { blogId } = req.params;
        const { islive } = req.body;

        const blog = await Blog.findByIdAndUpdate(blogId, { islive }, { new: true });
        return res.send({ blog });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

blogRouter.delete('/', async (req, res) => {
    try {
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

module.exports = { blogRouter };
