import React, { useState } from 'react';
import { useNotification } from '../../context/NotificationContext';
import { formatDateTime } from '../../utils/dateUtils';
import Toast from '../../components/Toast';

const Notification = () => {
  const { notifications, loading, createNotification, deleteNotification } = useNotification();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    message: '',
    forRole: 'admin'
  });
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
  };

  const handleCreateNotification = async (e) => {
    e.preventDefault();
    if (!formData.message.trim()) return;

    const result = await createNotification(formData.message, formData.forRole);
    if (result.success) {
      setFormData({ message: '', forRole: 'admin' });
      setShowCreateForm(false);
      showToast('Tạo thông báo thành công!', 'success');
    } else {
      showToast('Có lỗi xảy ra khi tạo thông báo', 'error');
    }
  };

  const handleDeleteNotification = async (id) => {
    if (window.confirm('Bạn có chắc muốn xóa thông báo này?')) {
      const result = await deleteNotification(id);
      if (result.success) {
        showToast('Xóa thông báo thành công!', 'success');
      } else {
        showToast('Có lỗi xảy ra khi xóa thông báo', 'error');
      }
    }
  };

  if (loading) {
    return (
      <div className="p-4 sm:ml-64 dark:bg-gray-900 min-h-screen">
        <div className="p-4 border-2 border-dashed rounded-lg border-gray-200 dark:border-gray-700 mt-14">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:ml-64 dark:bg-gray-900 min-h-screen">
      <div className="p-4 border-2 border-dashed rounded-lg border-gray-200 dark:border-gray-700 mt-14">
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Quản lý Thông báo
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Tạo và quản lý thông báo cho các vai trò khác nhau trong hệ thống
          </p>
        </div>

        {/* Create Notification Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            {showCreateForm ? 'Hủy' : 'Tạo Thông báo Mới'}
          </button>
        </div>

        {/* Create Notification Form */}
        {showCreateForm && (
          <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Tạo Thông báo Mới
            </h3>
            <form onSubmit={handleCreateNotification}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nội dung thông báo
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  rows="3"
                  placeholder="Nhập nội dung thông báo..."
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Gửi cho vai trò
                </label>
                <select
                  value={formData.forRole}
                  onChange={(e) => setFormData({ ...formData, forRole: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="admin">Admin</option>
                  <option value="moderator">Moderator</option>
                  <option value="user">User</option>
                </select>
              </div>
              
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Tạo Thông báo
                </button>
                <button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Notifications List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Danh sách Thông báo ({notifications.length})
            </h3>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {notifications.length === 0 ? (
              <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                Không có thông báo nào
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="text-gray-800 dark:text-gray-200 mb-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>
                          Tạo lúc: {formatDateTime(notification.time || notification.createdAt)}
                        </span>
                        <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded">
                          {notification.forRole}
                        </span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleDeleteNotification(notification.id)}
                      className="ml-4 text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors"
                      title="Xóa thông báo"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification; 