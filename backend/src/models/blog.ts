import mongoose, { model, Model, Schema } from "mongoose";
import blogInterface from "../interfaces/models/blog";

const blogSchema = new Schema(
  {
    show: {
      type: Boolean,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    short_description: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    onHomepage: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, autoIndex: true }
);

const Blogschema = model("Blog", blogSchema);
export default Blogschema;
