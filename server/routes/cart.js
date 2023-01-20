import express from "express";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import {
  addCart,
  updateCart,
  deleteCart,
  getCart,
  getAllCarts,
} from "../controllers/cart.js";
const router = express.Router();

router.post("/", verifyUser, addCart);
router.put("/:id", verifyUser, updateCart);
router.delete("/:id", verifyUser, deleteCart);
router.get("/find/:userId", verifyUser, getCart);
router.get("/", verifyAdmin, getAllCarts);

export default router;
