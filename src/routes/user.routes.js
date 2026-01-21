import express from "express";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Protected route example
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "Protected route accessed",
    user: req.user,
  });
});

export default router;
