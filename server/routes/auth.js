import express from "express";
import { registerUser, userLogin } from "../controllers/auth.js";
const router = express.Router();

// register user
router.post("/register", registerUser);
router.get("/login", userLogin);

export default router;
