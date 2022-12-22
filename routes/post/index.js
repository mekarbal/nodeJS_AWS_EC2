import express from "express";
import Post from "../../model/post/index.js";
const postRouter = express.Router();

postRouter.get("/", async (req, res) => {
  const posts = await Post.find();

  res.json({
    message: "get All posts",
    data: posts,
  });
});

postRouter.post("/", async (req, res) => {
  const { title, description } = req.body;
  const post = new Post({ title, description });

  const result = await post.save();
  res.status(201).json({
    message: "Post Saved",
    data: result,
  });
});

export default postRouter;
