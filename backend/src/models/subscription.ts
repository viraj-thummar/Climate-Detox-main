import mongoose, { model, Model, Schema } from "mongoose";

const SubscSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, autoIndex: true }
);

const Blogschema = model("Subscription", SubscSchema);
export default Blogschema;
