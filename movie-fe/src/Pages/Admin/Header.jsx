import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo500.png";
import { useNavigate } from "react-router-dom";
import useStaffAuth from "../../hooks/useStaffAuth";
import axiosInstance from "../../config/axios";
import defaultAvatar from "../../assets/logo250.png"; // Ảnh đại diện mặc định

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, loading } = useStaffAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/api/auth/logout");
      navigate("/admin/login");
    } catch (error) {
      console.error("Logout failed:", error);
      // Có thể hiển thị thông báo lỗi cho người dùng ở đây
    }
  };

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);


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
            <div className="flex items-center">
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