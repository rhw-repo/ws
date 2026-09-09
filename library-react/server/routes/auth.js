import express from "express";
import bcrypt from "bcrypt";
import { body } from "express-validator";
import User from "../models/userModel.js";
import { validate } from "../middleware/validate.js";

const router = express.Router();

// POST /auth/register
router.post(
  "/register",
  [
    body("email")
      .trim()
      .normalizeEmail()
      .isEmail()
      .withMessage("A valid email is required"),
    body("password")
      .isLength({ min: 8, max: 15 })
      .withMessage("Password must be 8-15 characters"),
    body("name").optional().trim().escape().isLength({ max: 100 }),
  ],
  validate,
  async (req, res) => {
    const { email, password, name } = req.body;

    try {
      const existing = await User.findOne({ email });
      if (existing) {
        return res.status(409).json({ error: "Email already registered" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ email, password: hashedPassword, name });

      req.session.userId = user._id;

      res.status(201).json({ user: { email: user.email, name: user.name } });
    } catch (err) {
      console.error("Register error:", err);
      res.status(500).json({ error: "Failed to register" });
    }
  },
);

// POST /auth/login
router.post(
  "/login",
  [
    body("email")
      .trim()
      .normalizeEmail()
      .isEmail()
      .withMessage("A valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  validate,
  async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      req.session.userId = user._id;

      res.json({ user: { email: user.email, name: user.name } });
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ error: "Failed to log in" });
    }
  },
);

// POST /auth/logout
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to log out" });
    }
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out" });
  });
});

// GET /auth/me
router.get("/me", async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: "Not logged in" });
  }

  try {
    const user = await User.findById(req.session.userId);
    if (!user) {
      return res.status(401).json({ error: "Not logged in" });
    }
    res.json({ user: { email: user.email, name: user.name } });
  } catch (err) {
    console.error("Auth check error:", err);
    res.status(500).json({ error: "Failed to check auth status" });
  }
});

export default router;
