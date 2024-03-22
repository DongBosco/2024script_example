const { Schema, Types, model } = require('mongoose');

const CommentSchema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        islive: { type: Boolean, required: true, default: false },
        user: { type: Types.ObjectId, required: true, ref: 'user' },
    },
    { timestamps: true }
);

const Comment = model('comment', CommentSchema);
module.exports = { Comment };
