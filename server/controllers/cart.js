import Cart from "../models/Cart.js";

// Create
export const addCart = async (req, res, next) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    next(error);
  }
};

// Update
export const updateCart = async (req, res, next) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedCart);
  } catch (error) {
    next(error);
  }
};

// Delete
export const deleteCart = async (req, res, next) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Product Deleted successful");
  } catch (error) {
    next(error);
  }
};
// Get cart by id
export const getCart = async (req, res, next) => {
  try {
    const userCart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(userCart);
  } catch (error) {
    next(error);
  }
};

// Get all carts
export const getAllCarts = async (req, res, next) => {
  try {
    const allCarts = await Cart.find();
    res.status(200).json(allCarts);
  } catch (error) {
    next(error);
  }
};
