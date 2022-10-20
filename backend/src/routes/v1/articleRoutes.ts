import express from "express";
import blogController from "../../controllers/blogController";
import subsController from "../../controllers/subsController";
const { otpMailSend } = require("../../config/mailSend");
const articleRoutes = express.Router();

articleRoutes.route("/createBlog").post(blogController.createBlog);

export const attachRoutes = (app: any) => {
  app.post("/blogs/fetch", blogController.fetchBlogs);
  app.post("/createBlog", blogController.createBlog);

  app.post("/regSub", subsController.createSubs);
  app.post("/subscription", subsController.fetchSubs);

  app.post("/contact", (req: any, res: any) => {
    console.log("call");
    otpMailSend("rockanup576@gmail.com", req.body.subject, req.body.body, function (data: any) {
      console.log(data);
      res.send(data);
    });
  });
};

export default articleRoutes;
