import express from "express";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import {
  addOrder,
  updateOrder,
  deleteOrder,
  getOrder,
  getAllOrders,
  orderStates,
} from "../controllers/order.js";
const router = express.Router();

router.post("/", verifyUser, addOrder);
router.put("/:id", verifyAdmin, updateOrder);
router.delete("/:id", verifyAdmin, deleteOrder);
router.get("/find/:userId", verifyUser, getOrder);
router.get("/", verifyAdmin, getAllOrders);
router.get("/analytics", verifyAdmin, orderStates);
export default router;
