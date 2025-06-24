// controllers/authController.js
const authService = require("../services/authService");
const bcrypt = require('bcryptjs');
const { User } = require('../models');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const verificationCode = await authService.registerUser(req, email, username, password);

    res.status(201).json({ message: "Đăng ký thành công. Vui lòng kiểm tra email để xác thực.", verificationCode });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const { email, userInputCode } = req.body;
    const newUser = await authService.verifyEmailAndCreateUser(req, userInputCode);
    res.status(200).json({ 
      success: true,
      message: "Xác thực email thành công", 
      user: newUser 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { user, token } = await authService.loginUser(email, password);
    
    // Lưu token trong cookie
    res.cookie("token", token, {
      httpOnly: true, // Cookie chỉ có thể được truy cập bởi server
      secure: process.env.NODE_ENV === 'production', // Chỉ gửi cookie qua HTTPS trong môi trường production
      sameSite: 'strict', // Bảo vệ chống CSRF
      maxAge: 2 * 60 * 60 * 1000 // 2h
    });

    res.json({ 
      success: true, 
      message: "Đăng nhập thành công",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        avatar: user.avatar
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.logout = async (req, res) => {
  try {
    // Xóa cookie token với cùng options khi tạo
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });
    res.json({ success: true, message: "Đăng xuất thành công" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.me = async (req, res) => {
  try {
    // req.user được gán từ middleware `protect`
    if (!req.user) {
      return res.status(401).json({ success: false, message: 'Chưa đăng nhập' });
    }

    const user = await User.findByPk(req.user.id, {
      attributes: ['id', 'username', 'email', 'role', 'avatar']
    });

    if (!user) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy người dùng' });
    }

    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: "Email không được để trống" });
    }

    console.log('Processing change password request for email:', email);
    const result = await authService.changePasswordByEmail(email);
    
    res.status(200).json({ 
      success: true,
      message: result.message 
    });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ 
      success: false,
      error: error.message || "Có lỗi xảy ra khi đổi mật khẩu" 
    });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    await authService.forgotPassword(email);
    res.json({ success: true, message: 'Mã OTP đã được gửi đến email của bạn.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    await authService.resetPassword(email, otp, newPassword);
    res.json({ success: true, message: 'Mật khẩu đã được đặt lại thành công.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const isValid = await authService.verifyOtp(email, otp);
    if (isValid) {
      res.json({ success: true, message: 'Mã OTP hợp lệ.' });
    } else {
      res.status(400).json({ success: false, message: 'Mã OTP không hợp lệ hoặc đã hết hạn.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const userId = req.user.id;

        // Find user
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'Không tìm thấy người dùng' });
        }

        // Verify current password
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Mật khẩu hiện tại không đúng' });
        }

        // Hash new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update password
        await user.update({ password: hashedPassword });

        res.status(200).json({ message: 'Đổi mật khẩu thành công' });
    } catch (error) {
        console.error('Error in updatePassword:', error);
        res.status(500).json({ message: 'Lỗi khi đổi mật khẩu' });
    }
};