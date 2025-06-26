// useAdminAuth.js
import { useEffect, useState, useCallback } from "react";
import axiosInstance from "../config/axios";

const useStaffAuth = () => {
  const [staff, setStaff] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    setLoading(true);
    try {
      // Gọi API mới để lấy thông tin user (staff)
      const response = await axiosInstance.get("/api/auth/staff/me");
      setStaff(response.data.user); // Lưu lại toàn bộ object user
    } catch {
      setStaff(null); // Nếu lỗi thì không có staff nào được đăng nhập
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return { 
    isAuthenticated: !!staff, // Vẫn trả về boolean để tương thích
    user: staff, // Trả về thông tin chi tiết của staff
    loading, 
    recheckAuth: checkAuth 
  };
};

export default useStaffAuth;
