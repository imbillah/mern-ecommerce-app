import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(req.body.password, salt);

  try {
    const newUser = new User({
      username: req.body.username,
      password: hashPassword,
      email: req.body.email,
      isAdmin: req.body.isAdmin,
    });
    await newUser.save();
    res.status(200).json("User registered successful");
  } catch (error) {
    console.log(error.message);
  }
};

export const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(404).json("User not found !");
    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !checkPassword && res.status(404).json("Wrong Credentials!");
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_KEY
    );
    const { password, ...rest } = user._doc;
    res
      .cookie("access_token", accessToken, { httpOnly: true })
      .status(200)
      .json([{ message: "Login Success" }, { ...rest }]);
  } catch (error) {
    console.log(error.message);
  }
};
