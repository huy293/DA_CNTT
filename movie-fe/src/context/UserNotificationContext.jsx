import React, { createContext, useContext, useEffect, useState } from "react";
import useUser from "../hooks/useUser";
import axiosInstance from "../config/axios";

const UserNotificationContext = createContext({});

export const useUserNotification = () => useContext(UserNotificationContext);

export const UserNotificationProvider = ({ children }) => {
  const { user, isAuthenticated, loading: authLoading } = useUser();
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
      const userRole = user.role || 'user';
      const response = await axiosInstance.get(`/api/notification/${userRole}`);
      setNotifications(response.data);
      setUnreadCount(response.data.length);
    } catch (error) {
      console.error("Error fetching user notifications:", error);
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id) => {
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  useEffect(() => {
    if (!authLoading) {
      fetchNotifications();
    }
  }, [user, isAuthenticated, authLoading]);

  useEffect(() => {
    if (isAuthenticated && user) {
      const interval = setInterval(fetchNotifications, 30000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated, user]);

  return (
    <UserNotificationContext.Provider 
      value={{ 
        notifications, 
        loading, 
        unreadCount,
        fetchNotifications,
        markAsRead
      }}
    >
      {children}
    </UserNotificationContext.Provider>
  );
}; 