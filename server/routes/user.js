import express from "express";
import { updateUser, getUser } from "../controllers/user.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.put("/user/:id", verifyUser, updateUser);
router.get("/user/find/:id", verifyAdmin, getUser);
export default router;
