import mongoose, { model, Model, Schema } from 'mongoose';
import blogCommentInterface from '../interfaces/models/blogComment'

const blogCommentSchema = new Schema<blogCommentInterface>({
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userEmail: { type: String },
    userName: { type: String },
    comment: [
        {
            comment: { type: String },
            userEmail: { type: String }
        }
    ],
}, { timestamps: true, autoIndex: true })

const BlogCommentschema: Model<blogCommentInterface> = model('BlogComment', blogCommentSchema)
export default BlogCommentschema;