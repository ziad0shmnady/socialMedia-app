import express from "express";
const router = express.Router();
import User from "../model/userModel";
import userController from "../controller/userController";
// add a user
router.post("/register", userController.addUser);
// get all users
router.get("/getAllUsers", userController.getAllUsers);
export default router;
