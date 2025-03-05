import express from "express";
import {
  createOneUser,
  loginUser,
  verifyEmail,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/v1/register", async (req, res) => {
  try {
    const newUser = await createOneUser(req.body);
    res.status(201).json({ message: "User registered successfully.", newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to register user.", error: error.message });
  }
});

router.post("/v1/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser({ email, password });
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ message: "Login failed.", error: error.message });
  }
});

router.get("/v1/verify-email", async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) {
      return res.status(400).json({ message: "Token is required." });
    }
    const result = await verifyEmail(token);
    res.status(200).json(result);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Email verification failed.", error: error.message });
  }
});

export default router;
