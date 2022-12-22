import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRouter from "./routes/post/index.js";

dotenv.config({});
const app = express();
const port = process.env.PORT || 5001;
const db_uri = process.env.DB_URI || "";
mongoose.set("strictQuery", false);
mongoose
  .connect(db_uri)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log("Error connecting"));

app.use(express.json());

app.use("/post", postRouter);
app.listen(port, () => {
  console.log("server running on port " + port);
});
