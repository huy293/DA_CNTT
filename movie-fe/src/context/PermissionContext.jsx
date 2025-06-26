import React, { createContext, useContext, useEffect, useState } from "react";
import useStaffAuth from "../hooks/useStaffAuth";
import axiosInstance from "../config/axios";

const PermissionContext = createContext({});

export const usePermission = () => useContext(PermissionContext);

export const PermissionProvider = ({ children }) => {
  const { user, isAuthenticated, loading: authLoading } = useStaffAuth();
  const [permissions, setPermissions] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPermissions = async () => {
      if (!user || !isAuthenticated) {
        setPermissions({});
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        // Nếu là admin, trả về tất cả quyền true (có thể tùy chỉnh theo backend)
        if (user.role === "admin") {
          setPermissions({
            canDeleteMovie: true,
            canManageComment: true,
            canViewReport: true,
            // ... thêm các quyền khác nếu có
          });
        } else {
          // Lấy quyền chi tiết từ backend
          const res = await axiosInstance.get(`/api/user/permissions/${user.id}`);
          setPermissions(res.data);
        }
      } catch {
        setPermissions({});
      } finally {
        setLoading(false);
      }
    };
    fetchPermissions();
  }, [user, isAuthenticated]);

  return (
    <PermissionContext.Provider value={{ permissions, loading }}>
      {children}
    </PermissionContext.Provider>
  );
}; 