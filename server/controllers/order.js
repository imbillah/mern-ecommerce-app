import Order from "../models/Order.js";

// Create
export const addOrder = async (req, res, next) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    next(error);
  }
};

// Update
export const updateOrder = async (req, res, next) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedOrder);
  } catch (error) {
    next(error);
  }
};

// Delete
export const deleteOrder = async (req, res, next) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted successfully");
  } catch (error) {
    next(error);
  }
};
// Get cart by id
export const getOrder = async (req, res, next) => {
  try {
    const userOrder = await Order.find({ userId: req.params.userId });
    res.status(200).json(userOrder);
  } catch (error) {
    next(error);
  }
};

// Get all carts
export const getAllOrders = async (req, res, next) => {
  try {
    const allOrders = await Order.find();
    res.status(200).json(allOrders);
  } catch (error) {
    next(error);
  }
};

//Get Order states
export const orderStates = async (req, res, next) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const states = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(states);
  } catch (err) {
    res.status(500).json(err);
  }
};
