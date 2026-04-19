import express from "express";
import { protect } from "../middleware/authMiddleware";
import { signToken } from "../utils/jwt";

const router = express.Router();

// Public route
router.get("/public", (req, res) => {
  res.json({ message: "Anyone can access this route." });
});

// Protected route (any logged-in user)
router.get("/dashboard", protect(), (req, res) => {
  res.json({ message: "Welcome!", user: req.user });
});

// Admin-only route
router.get("/admin", protect(["admin"]), (req, res) => {
  res.json({ message: "Welcome Admin!", user: req.user });
});

// Route to generate test token
router.get("/token", (req, res) => {
  const token = signToken({
    id: "123",
    email: "user@example.com",
    role: "admin",
  });
  res.json({ token });
});


export default router;
