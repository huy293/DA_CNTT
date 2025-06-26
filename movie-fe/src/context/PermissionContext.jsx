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
        // Luôn lấy quyền từ backend. 
        // Backend sẽ tự xử lý logic trả về tất cả quyền cho admin.
        const res = await axiosInstance.get(`/api/user/permissions/${user.id}`);
        setPermissions(res.data);
      } catch {
        setPermissions({});
      } finally {
        setLoading(false);
      }
    };

    // Chỉ chạy khi có user và không còn trong trạng thái loading auth
    if (!authLoading) {
        fetchPermissions();
    }
  }, [user, isAuthenticated, authLoading]);

  return (
    <PermissionContext.Provider value={{ permissions, loading }}>
      {children}
    </PermissionContext.Provider>
  );
}; 