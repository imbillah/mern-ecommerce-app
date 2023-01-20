import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../controllers/user.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyAdmin, deleteUser);
router.get("/find/:id", verifyAdmin, getUser);
router.get("/", verifyAdmin, getAllUsers);
export default router;
