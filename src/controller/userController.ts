import user from "../model/userModel";
import { Request, Response } from "express";

exports.getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await user.findAll();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.addUser = async (req: Request, res: Response) => {
  try {
    const newUser = await user.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      isWriter: req.body.isWriter,
    });
    res.json(newUser);
  } catch (err) {
    res.json({ message: err });
  }
};

export default exports;
