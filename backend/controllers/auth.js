import User from "../models/User.js";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const newUser = new User({ ...req.body });
    console.log(newUser);
    await newUser.save();
    res.status(200).send("user has been created");
  } catch (err) {
    next(createError(404, "some issue with inputs!"));
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(200).json({
        data: "not found",
      });

    if (user.email !== req.body.email)
      return next(createError(404, "email mismatch!"));
    if (user.password !== req.body.password)
      return next(createError(404, "password mismatch!"));

    const token = jwt.sign({ id: user._id }, process.env.JWT);
    const { password, ...others } = user._doc; //removing password from the users so we dont send password back even if its hashed
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};

export const signout = async (req, res, next) => {
  try {
    const options = {
      expires: new Date(Date.now() + 10000),
    };
    res.cookie("access_token", "expired_token", options);
    res.status(200).json({ status: "success" });
  } catch (err) {
    next(err);
  }
};
