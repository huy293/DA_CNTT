// routes/auth.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const { user: User } = require("../models");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authMiddleware.protect(), authController.logout);
router.post("/forgot-password", authController.forgotPassword);
router.patch("/reset-password/:token", authController.resetPassword);
router.post("/verify-otp", authController.verifyOtp);

// Route /me để lấy thông tin người dùng đã đăng nhập
router.get("/me", authMiddleware.protect(), authController.me);

// Route để kiểm tra admin
router.get("/admin/me", authMiddleware.protect(), authMiddleware.restrictTo('admin'), (req, res) => {
  res.status(200).json({ success: true, message: "Welcome Admin!" });
});

router.patch('/update-my-password', authMiddleware.protect(), authController.updatePassword);

module.exports = router;
