import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json({ ...rest });
  } catch (error) {
    console.log(error.message);
  }
};

// GET user by id

export const getUser = async (req, res, next) => {
  try {
    const filteredUser = await User.findById(req.params.id);

    const { password, ...rest } = filteredUser._doc;
    res.status(200).json({ ...rest });
  } catch (error) {
    console.log(error);
  }
};
