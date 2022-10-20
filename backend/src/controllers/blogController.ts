import { IRequest, IResponse, INext } from "../interfaces/vendors";
import BaseError from "../error/baseError";
import Blog from "../models/blog";
import BlogComment from "../models/blogComment";

const BlogController = {
  createBlog: async (req: IRequest, res: IResponse, next: INext) => {
    try {
      let newBlog = await new Blog(req.body).save();
      if (!newBlog) throw new BaseError("Something went wrong!!");
      res.status(200).send({ status: 200, message: "Blog Created", data: newBlog });
    } catch (err) {
      next(err);
    }
  },
  updateBlog: async (req: IRequest, res: IResponse, next: INext) => {
    try {
      const { blogID } = req.query;
      let updateBlog = await Blog.findByIdAndUpdate(blogID, req.body);
      if (!updateBlog) throw new BaseError("Something went wrong!!");
      res.status(200).send({ status: 200, message: "Blog Updated", data: updateBlog });
    } catch (err) {
      next(err);
    }
  },
  deleteBlog: async (req: IRequest, res: IResponse, next: INext) => {
    try {
      const { blogID } = req.query;
      let deleteBlog = await Blog.findByIdAndUpdate(blogID, {
        isDeleted: false,
      });
      if (!deleteBlog) throw new BaseError("Something went wrong!!");
      res.status(200).send({ status: 200, message: "Blog Deleted", data: deleteBlog });
    } catch (err) {
      next(err);
    }
  },
  addandupdateComment: async (req: IRequest, res: IResponse, next: INext) => {
    try {
      const { commentID } = req.query;
      let isCommentExist = await BlogComment.findById(commentID);
      if (!isCommentExist) {
        let updateComment = await new BlogComment(req.body);
      } else {
      }
    } catch (err) {
      next(err);
    }
  },
  fetchBlogs: async (req: IRequest, res: IResponse, next: INext) => {
    try {
      const { pageOffset, pageSize, filter } = req.body;
      const latestPageOffset = pageOffset;
      // const latestPageOffset = pageOffset - 1;
      let fetchedBlogs;
      let count;
      if (filter) {
        fetchedBlogs = await Blog.find({ tag: filter }).skip(latestPageOffset).limit(pageSize);
        count = await Blog.find({ tag: filter }).count();
      } else {
        fetchedBlogs = await Blog.find({}).skip(latestPageOffset).limit(pageSize);
        count = await Blog.find({}).count();
      }
      if (fetchedBlogs.length === 0) throw new BaseError("No Blogs found");

      return res.status(200).send({ status: 200, message: "Blogs Fetched", data: { fetchedBlogs, count } });
    } catch (err) {
      next(err);
    }
  },
};

export default BlogController;
