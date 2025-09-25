import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import authenticateToken from "../middleware/isAuthenticated.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

// Register
router.post("/register", singleUpload, register);

// Login
router.post("/login", login);

// Logout
router.post("/logout", logout);

// Update profile
router.post("/profile/update", authenticateToken, singleUpload, updateProfile);

export default router;
