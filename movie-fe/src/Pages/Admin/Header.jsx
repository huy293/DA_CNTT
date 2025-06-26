import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo500.png";
import { useNavigate } from "react-router-dom";
import useStaffAuth from "../../hooks/useStaffAuth";
import axiosInstance from "../../config/axios";
import defaultAvatar from "../../assets/logo250.png"; // Ảnh đại diện mặc định
import { formatDateTime } from '../../utils/dateUtils';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [newNotify, setNewNotify] = useState("");
  const [newNotifyRole, setNewNotifyRole] = useState("admin");
  const { user, loading } = useStaffAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const notifyRef = useRef(null);

  // Fetch notification theo vai trò
  const fetchNotifications = async () => {
    if (!user) return;
    const role = user.isSuperAdmin ? 'admin' : user.role;
    try {
      const res = await axiosInstance.get(`/api/notification/${role}`);
      setNotifications(res.data);
    } catch {
      setNotifications([]);
    }
  };

  useEffect(() => {
    if (isNotifyOpen) fetchNotifications();
  }, [isNotifyOpen, user]);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (notifyRef.current && !notifyRef.current.contains(event.target)) {
        setIsNotifyOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, notifyRef]);

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/api/auth/logout");
      navigate("/admin/login");
    } catch (error) {
      console.error("Logout failed:", error);
      // Có thể hiển thị thông báo lỗi cho người dùng ở đây
    }
  };

  const handleCreateNotification = async () => {
    if (!newNotify.trim()) return;
    try {
      await axiosInstance.post("/api/notification", { message: newNotify, forRole: newNotifyRole });
      setNewNotify("");
      fetchNotifications();
    } catch {
      alert("Không thể tạo thông báo!");
    }
  };
  const handleDeleteNotification = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa thông báo này?")) return;
    try {
      await axiosInstance.delete(`/api/notification/${id}`);
      fetchNotifications();
    } catch {
      alert("Không thể xóa thông báo!");
    }
  };

  return (
    <header>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <a href="/admin" className="flex ms-2 md:me-24">
                <img src={logo} className="h-10" alt="HH Logo" />
                <span className="self-center ml-2 text-2xl font-semibold whitespace-nowrap dark:text-white">H² Movie</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              {/* Notification bell */}
              <div className="relative" ref={notifyRef}>
                <button
                  type="button"
                  className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsNotifyOpen((v) => !v)}
                >
                  <svg className="w-6 h-6 text-gray-600 dark:text-gray-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                      {notifications.length}
                    </span>
                  )}
                </button>
                {isNotifyOpen && (
                  <div className="absolute right-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded shadow-lg z-50 p-4">
                    <h3 className="font-semibold mb-2 text-gray-700 dark:text-white">Thông báo hệ thống</h3>
                    {(user?.role === 'admin' || user?.isSuperAdmin) && (
                      <div className="mb-3 flex gap-2 items-center">
                        <input
                          type="text"
                          value={newNotify}
                          onChange={e => setNewNotify(e.target.value)}
                          placeholder="Nhập nội dung thông báo"
                          className="border rounded px-2 py-1 flex-1"
                        />
                        <select
                          value={newNotifyRole}
                          onChange={e => setNewNotifyRole(e.target.value)}
                          className="border rounded px-2 py-1"
                        >
                          <option value="admin">Admin</option>
                          <option value="moderator">Moderator</option>
                          <option value="user">User</option>
                        </select>
                        <button
                          onClick={handleCreateNotification}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                        >
                          Gửi
                        </button>
                      </div>
                    )}
                    <div className="max-h-72 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="text-gray-500">Không có thông báo nào</div>
                      ) : (
                        <ul className="space-y-2">
                          {notifications.map((n, idx) => (
                            <li key={n.id || idx} className="text-sm text-gray-700 dark:text-gray-200 flex items-center justify-between">
                              <span>[{formatDateTime(n.time)}] {n.message} <span className="ml-2 text-xs text-gray-400">({n.forRole})</span></span>
                              {(user?.role === 'admin' || user?.isSuperAdmin) && (
                                <button
                                  onClick={() => handleDeleteNotification(n.id)}
                                  className="ml-2 text-xs text-red-500 hover:underline"
                                >
                                  Xóa
                                </button>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </div>
              {/* User dropdown */}
              <div className="relative flex items-center ms-3" ref={dropdownRef}>
                <div>
                  <button 
                    type="button" 
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src={user?.avatar || defaultAvatar} alt="user photo" />
                  </button>
                </div>
                {isDropdownOpen && !loading && (
                  <div className="absolute top-full right-0 mt-2 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                    <div className="px-4 py-3" role="none">
                      <p className="text-sm text-gray-900 dark:text-white" role="none">
                        {user?.username || "Staff"}
                      </p>
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                        {user?.email || ""}
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <a href="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                      </li>
                      <li>
                        <button 
                          onClick={handleLogout} 
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" 
                          role="menuitem"
                        >
                          Sign out
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;