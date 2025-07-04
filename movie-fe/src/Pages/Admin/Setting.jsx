import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "../../config/axios";
import { formatDateTime } from "../../utils/dateUtils";
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';

const AdminSettings = () => {
  const [admins, setAdmins] = useState([]);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [logs, setLogs] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [permissions, setPermissions] = useState({});
  const [showLogModal, setShowLogModal] = useState(false);
  const [showNotifyModal, setShowNotifyModal] = useState(false);
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const { user: currentUser } = useUser();
  const [newNotify, setNewNotify] = useState("");
  const [newNotifyRole, setNewNotifyRole] = useState("admin");
  const navigate = useNavigate();

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/user/admins');
      setAdmins(response.data); // response.data là mảng user
    } catch (error) {
      setError(error.response?.data?.message || 'Lỗi khi lấy danh sách admin');
    } finally {
      setLoading(false);
    }
  };

  const handleChangeRole = (user) => {
    setSelectedUser(user);
    setIsRoleModalOpen(true);
  };

  const handleRoleSubmit = async (newRole) => {
    try {
      const response = await axios.post(`/api/user/changerole/${selectedUser.id}`, {
        role: newRole
      });
      alert(response.data.message);
      setIsRoleModalOpen(false);
      setSelectedUser(null);
      fetchAdmins();
    } catch (err) {
      alert(err.response?.data?.message || "Không thể thay đổi quyền người dùng");
    }
  };
  const handleToggleLock = async (user) => {
    if (user.role === "admin") {
      alert("Không thể khóa tài khoản admin!");
      return;
    }
    if (!window.confirm(`Bạn có chắc muốn ${user.status === "locked" ? "mở khóa" : "khóa"} tài khoản này?`)) return;
    try {
      await axios.put(`/api/user/toggle-lock/${user.id}`);
      fetchAdmins();
    } catch (err) {
      alert(err.response?.data?.message || "Không thể thay đổi trạng thái tài khoản");
    }
  };
  if (loading) return <div className="p-8 text-center text-white">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  const roleOptions = [
    { value: "moderator", label: "Moderator" },
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" }
  ];
  const fetchLogs = async (userId) => {
    try {
      const res = await axios.get(`/api/user/logs/${userId}`);
      setLogs(res.data);
      setShowLogModal(true);
    } catch {
      alert("Không thể lấy lịch sử hoạt động!");
    }
  };

  // Lấy thông báo hệ thống
  const fetchNotifications = async () => {
    try {
      const res = await axios.get("/api/notification/admin");
      setNotifications(res.data);
      setShowNotifyModal(true);
    } catch {
      alert("Không thể lấy thông báo hệ thống!");
    }
  };

  // Lấy và cập nhật phân quyền chi tiết
  const fetchPermissions = async (userId) => {
    try {
      const res = await axios.get(`/api/user/permissions/${userId}`);
      setPermissions(res.data);
      setSelectedAdmin(userId);
      setShowPermissionModal(true);
    } catch {
      alert("Không thể lấy phân quyền!");
    }
  };
  const handlePermissionChange = async (perm, value) => {
    try {
      await axios.put(`/api/user/permissions/${selectedAdmin}`, { [perm]: value });
      setPermissions((prev) => ({ ...prev, [perm]: value }));
    } catch {
      alert("Không thể cập nhật phân quyền!");
    }
  };

  const isAdmin = selectedUser?.role === 'admin';
  const isSuperAdmin = currentUser && currentUser.isSuperAdmin;
  const isEditingAdmin = permissions.role === 'admin';

  // Thêm notification mới
  const handleCreateNotification = async () => {
    if (!newNotify.trim()) return;
    try {
      await axios.post("/api/notification", { message: newNotify, forRole: newNotifyRole });
      setNewNotify("");
      fetchNotifications();
    } catch {
      alert("Không thể tạo thông báo!");
    }
  };
  const handleDeleteNotification = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa thông báo này?")) return;
    try {
      await axios.delete(`/api/notification/${id}`);
      fetchNotifications();
    } catch {
      alert("Không thể xóa thông báo!");
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow mt-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
        Quản lý Admin & Moderator
      </h2>

      <div className="mb-4 flex gap-3">
        <button
          onClick={fetchNotifications}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Xem thông báo hệ thống
        </button>
        <button
          onClick={() => navigate('/admin/report')}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Xem báo cáo hệ thống
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="py-2 px-3">Email</th>
              <th className="py-2 px-3">Quyền</th>
              <th className="py-2 px-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <td className="py-2 px-3 text-gray-800 dark:text-gray-200">
                  {user.email}
                </td>
                <td className="py-2 px-3 text-gray-800 dark:text-gray-200">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      user.role === "admin"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {user.role === "admin" ? "Admin" : "Moderator"}
                  </span>
                </td>
                <td className="py-2 px-3 flex gap-3 flex-wrap">
                  <button
                    onClick={() => handleChangeRole(user)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                  >
                    Phân quyền
                  </button>
                  <button
                    onClick={() => handleToggleLock(user)}
                    className={`${
                      user.status === "locked"
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-red-500 hover:bg-red-600"
                    } text-white px-3 py-1 rounded`}
                  >
                    {user.status === "locked" ? "Mở khóa" : "Khóa"}
                  </button>
                  <button
                    onClick={() => fetchLogs(user.id)}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
                  >
                    Lịch sử hoạt động
                  </button>
                  <button
                    onClick={() => fetchPermissions(user.id)}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded"
                  >
                    Phân quyền chi tiết
                  </button>
                </td>
              </tr>
            ))}
            {admins.length === 0 && (
              <tr>
                <td
                  colSpan={3}
                  className="text-center py-4 text-gray-500 dark:text-gray-400"
                >
                  Chưa có admin nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal: Lịch sử hoạt động */}
      {showLogModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-lg">
            <h2 className="text-lg font-bold mb-4 dark:text-white">Lịch sử hoạt động</h2>
            <div className="max-h-72 overflow-y-auto">
              {logs.length === 0 ? (
                <div className="text-gray-500">Chưa có log nào</div>
              ) : (
                <ul className="space-y-2">
                  {logs.map((log, idx) => (
                    <li key={idx} className="text-sm text-gray-700 dark:text-gray-200">
                      [{formatDateTime(log.time)}] {log.action}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowLogModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Thông báo hệ thống */}
      {showNotifyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-lg">
            <h2 className="text-lg font-bold mb-4 dark:text-white">Thông báo hệ thống</h2>
            {/* Form tạo notification mới */}
            {(currentUser?.role === 'admin' || currentUser?.isSuperAdmin) && (
              <div className="mb-4 flex gap-2 items-center">
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
                      {(currentUser?.role === 'admin' || currentUser?.isSuperAdmin) && (
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
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowNotifyModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Phân quyền chi tiết */}
      {showPermissionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-bold mb-4 dark:text-white">Phân quyền chi tiết</h2>
            <div className="space-y-3">
              {Object.entries(permissions)
                .filter(([key, value]) => typeof value === 'boolean')
                .map(([perm, value]) => {
                  const role = permissions.role;
                  const isSuperAdmin = currentUser && currentUser.isSuperAdmin;
                  const isEditingAdmin = permissions.role === 'admin';
                  // Quyền chỉ enable khi đúng nghiệp vụ
                  let disabled = false;
                  let warning = '';
                  if (role === 'moderator') {
                    if (perm === 'canManageMovies' || perm === 'canManageComment') {
                      disabled = false;
                    } else if (perm === 'canViewReport') {
                      disabled = true;
                      warning = 'Moderator luôn có quyền này';
                    } else {
                      disabled = true;
                      warning = 'Moderator không được cấp quyền này';
                    }
                  } else if (role === 'admin') {
                    if (perm === 'canManageMovies' || perm === 'canManageComment' || perm === 'canViewReport') {
                      disabled = false;
                    } else if ((perm === 'canManageUsers' || perm === 'canManageSettings')) {
                      disabled = !isSuperAdmin;
                      if (!isSuperAdmin) warning = 'Chỉ Super Admin mới có quyền này';
                    }
                  } else if (role === 'user') {
                    disabled = true;
                    warning = 'User không có quyền này';
                  }
                  // Super admin: enable tất cả
                  // Nếu cố tình chọn quyền không hợp lệ, alert và set lại về 'Không'
                  return (
                    <div key={perm} className="flex items-center gap-3">
                      <span className="w-40 capitalize">{perm}</span>
                      <select
                        value={value ? "yes" : "no"}
                        disabled={disabled}
                        onChange={e => {
                          if (disabled && e.target.value === 'yes') {
                            alert(warning || 'Không thể cấp quyền này!');
                            setPermissions((prev) => ({ ...prev, [perm]: false }));
                            return;
                          }
                          // canViewReport của moderator luôn true
                          if (role === 'moderator' && perm === 'canViewReport') {
                            setPermissions((prev) => ({ ...prev, [perm]: true }));
                            return;
                          }
                          handlePermissionChange(perm, e.target.value === "yes");
                        }}
                        className="border rounded px-2 py-1"
                      >
                        <option value="yes">Có</option>
                        <option value="no">Không</option>
                      </select>
                      {disabled && (
                        <span className="text-xs text-red-500 ml-2">{warning}</span>
                      )}
                    </div>
                  );
                })}
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowPermissionModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ...existing modal for role change... */}
      {isRoleModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 dark:text-white">
              Phân quyền người dùng
            </h2>
            <div className="mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Người dùng: {selectedUser.username}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Email: {selectedUser.email}
              </p>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Vai trò mới
              </label>
              <Select
                options={[
                  { value: "moderator", label: "Moderator" },
                  { value: "admin", label: "Admin" },
                  { value: "user", label: "User" }
                ]}
                value={[
                  { value: "moderator", label: "Moderator" },
                  { value: "admin", label: "Admin" },
                  { value: "user", label: "User" }
                ].find(option => option.value === selectedUser.role)}
                onChange={(option) => handleRoleSubmit(option.value)}
                className="basic-single"
                classNamePrefix="select"
                isClearable={false}
                isSearchable={false}
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setIsRoleModalOpen(false);
                  setSelectedUser(null);
                }}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Setting = () => (
  <div className="p-4 sm:ml-64 dark:bg-gray-900 min-h-screen">
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-white">
        Quản lý Admin & Moderator
      </h2>
      <AdminSettings />
    </div>
  </div>
);

export default Setting;