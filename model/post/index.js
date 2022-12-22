import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
