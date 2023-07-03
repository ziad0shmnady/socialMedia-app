import express from "express";
import dotenv from "dotenv";
// importing models
import User from "./model/userModel";
import Post from "./model/postModel";
import Comment from "./model/commentModel";
import React from "./model/reactModel";

//importing routes
import userRouter from "./router/userRouter";
const app = express();
app.use(express.json());
dotenv.config();

app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log("Example app listening on port 3000!");
});
