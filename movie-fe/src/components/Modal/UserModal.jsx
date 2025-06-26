import React, { useState, useEffect } from "react";
import Select from "react-select";

export const UserModal = ({ isOpen, onClose, onSubmit, editingUser, currentUser, permissions }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
    status: "active",
    canManageMovies: false,
    canManageUsers: false,
    canManageSettings: false,
    canManageComment: false,
    canViewReport: false
  });

  useEffect(() => {
    if (editingUser) {
      setFormData({
        username: editingUser.username || "",
        email: editingUser.email || "",
        password: "", // Không hiển thị mật khẩu cũ
        role: editingUser.role || "user",
        status: editingUser.status || "active",
        canManageMovies: editingUser.canManageMovies || false,
        canManageUsers: editingUser.canManageUsers || false,
        canManageSettings: editingUser.canManageSettings || false,
        canManageComment: editingUser.canManageComment || false,
        canViewReport: editingUser.canViewReport || false
      });
    }
  }, [editingUser]);

  // Chỉ enable nếu: đang phân quyền cho user role 'admin' và người thao tác là super admin
  const isCanManageSettingsDisabled = !(formData.role === 'admin' && currentUser && currentUser.isSuperAdmin);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    // Nếu chọn canManageSettings mà không đủ điều kiện, cảnh báo và không cho phép
    if (
      name === 'canManageSettings' &&
      isCanManageSettingsDisabled &&
      checked
    ) {
      alert('Chỉ Super Admin mới có quyền này!');
      setFormData((prev) => ({ ...prev, [name]: false }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Nếu không nhập mật khẩu mới, không gửi trường password
    const dataToSubmit = !formData.password
      ? { ...formData, password: undefined }
      : formData;
    onSubmit(dataToSubmit);
  };

  if (!isOpen) return null;

  const roleOptions = [
    { value: "admin", label: "Admin" },
    { value: "moderator", label: "Moderator" },
    { value: "user", label: "User" }
  ];

  const statusOptions = [
    { value: "active", label: "Hoạt động" },
    { value: "locked", label: "Không hoạt động" }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 dark:text-white">
          Sửa người dùng
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tên người dùng
            </label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Mật khẩu (để trống nếu không muốn thay đổi)
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Vai trò
            </label>
            <Select
              options={roleOptions}
              value={roleOptions.find(option => option.value === formData.role)}
              onChange={(option) => setFormData({ ...formData, role: option.value })}
              className="basic-single"
              classNamePrefix="select"
              isClearable={false}
              isSearchable={false}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Trạng thái
            </label>
            <Select
              options={statusOptions}
              value={statusOptions.find(option => option.value === formData.status)}
              onChange={(option) => setFormData({ ...formData, status: option.value })}
              className="basic-single"
              classNamePrefix="select"
              isClearable={false}
              isSearchable={false}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phân quyền chi tiết
            </label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="canManageMovies"
                  checked={formData.canManageMovies}
                  onChange={handleCheckboxChange}
                />
                Quản lý phim
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="canManageUsers"
                  checked={formData.canManageUsers}
                  onChange={handleCheckboxChange}
                />
                Quản lý người dùng
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="canManageSettings"
                  checked={formData.canManageSettings}
                  onChange={handleCheckboxChange}
                  disabled={isCanManageSettingsDisabled}
                />
                Quản lý cài đặt hệ thống
                {isCanManageSettingsDisabled && (
                  <span className="text-xs text-red-500 ml-2">Chỉ Super Admin mới có quyền này</span>
                )}
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="canManageComment"
                  checked={formData.canManageComment}
                  onChange={handleCheckboxChange}
                />
                Quản lý bình luận
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="canViewReport"
                  checked={formData.canViewReport}
                  onChange={handleCheckboxChange}
                />
                Xem báo cáo
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}; 