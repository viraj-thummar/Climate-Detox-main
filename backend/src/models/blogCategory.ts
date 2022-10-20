import mongoose, { model, Model, Schema } from 'mongoose';
import blogCategoryInterface from '../interfaces/models/blogCategory'

const blogCategorySchema = new Schema<blogCategoryInterface>({
    categoryName: {
        type: String,
        required: true
    },
    categoryImage: {
        type: String,
        required: true
    },
    categoryParent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogCategory',
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true, autoIndex: true })

const BlogCategoryschema: Model<blogCategoryInterface> = model('BlogCategory', blogCategorySchema)
export default BlogCategoryschema;