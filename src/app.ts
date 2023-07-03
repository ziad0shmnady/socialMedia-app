import express from "express";
import dotenv from "dotenv";
// importing models
import User from "./model/userModel";

const app = express();
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  User.create({
    username: "test",
    email: "zz@gg.com",
    password: "1234",
    isWriter: false,
  });
});

app.listen(process.env.PORT, () => {
  console.log("Example app listening on port 3000!");
});
