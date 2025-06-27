import React, { createContext, useContext, useEffect, useState } from "react";
import useStaffAuth from "../hooks/useStaffAuth";
import axiosInstance from "../config/axios";

const NotificationContext = createContext({});

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const { user, isAuthenticated, loading: authLoading } = useStaffAuth();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);

  const fetchNotifications = async () => {
    if (!user || !isAuthenticated) {
      setNotifications([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const response = await axiosInstance.get(`/api/notification/${user.role}`);
      setNotifications(response.data);
      // Tính số thông báo chưa đọc (có thể thêm field isRead sau)
      setUnreadCount(response.data.length);
    } catch (error) {
      console.error("Error fetching notifications:", error);
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  const createNotification = async (message, forRole) => {
    try {
      const response = await axiosInstance.post('/api/notification', {
        message,
        forRole
      });
      
      // Refresh notifications
      await fetchNotifications();
      
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Error creating notification:", error);
      return { success: false, error: error.message };
    }
  };

  const deleteNotification = async (id) => {
    try {
      await axiosInstance.delete(`/api/notification/${id}`);
      
      // Refresh notifications
      await fetchNotifications();
      
      return { success: true };
    } catch (error) {
      console.error("Error deleting notification:", error);
      return { success: false, error: error.message };
    }
  };

  const markAsRead = async (id) => {
    // Có thể implement sau khi thêm field isRead
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  useEffect(() => {
    if (!authLoading) {
      fetchNotifications();
    }
  }, [user, isAuthenticated, authLoading]);

  // Auto refresh notifications every 30 seconds
  useEffect(() => {
    if (isAuthenticated) {
      const interval = setInterval(fetchNotifications, 30000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  return (
    <NotificationContext.Provider 
      value={{ 
        notifications, 
        loading, 
        unreadCount,
        fetchNotifications,
        createNotification,
        deleteNotification,
        markAsRead
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}; 