import React, { useEffect, useState } from "react";
import axios from '../../config/axios';

const Report = () => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        setLoading(true);
        const res = await axios.get('/api/dashboard/report');
        setReport(res.data);
      } catch (err) {
        setError('Không thể lấy báo cáo hệ thống');
      } finally {
        setLoading(false);
      }
    };
    fetchReport();
  }, []);

  if (loading) return <div className="p-8 text-center text-white">Đang tải báo cáo...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;
  if (!report) return null;

  return (
    <div className="p-4 sm:ml-64 dark:bg-gray-900 min-h-screen">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-white">Báo cáo hệ thống</h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow flex flex-col items-center">
            <div className="text-3xl font-bold text-blue-600">{report.totalUsers}</div>
            <div className="text-gray-600 dark:text-gray-300">Tổng người dùng</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow flex flex-col items-center">
            <div className="text-3xl font-bold text-purple-600">{report.totalAdmins}</div>
            <div className="text-gray-600 dark:text-gray-300">Admin</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow flex flex-col items-center">
            <div className="text-3xl font-bold text-blue-400">{report.totalModerators}</div>
            <div className="text-gray-600 dark:text-gray-300">Moderator</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow flex flex-col items-center">
            <div className="text-3xl font-bold text-green-600">{report.totalNormalUsers}</div>
            <div className="text-gray-600 dark:text-gray-300">User thường</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow flex flex-col items-center">
            <div className="text-3xl font-bold text-yellow-600">{report.totalMovies}</div>
            <div className="text-gray-600 dark:text-gray-300">Tổng phim</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow flex flex-col items-center">
            <div className="text-3xl font-bold text-pink-600">{report.totalFavorites}</div>
            <div className="text-gray-600 dark:text-gray-300">Tổng yêu thích</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow flex flex-col items-center">
            <div className="text-3xl font-bold text-indigo-600">{report.totalViews}</div>
            <div className="text-gray-600 dark:text-gray-300">Tổng lượt xem</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
            <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-white">Top 5 user hoạt động nhiều nhất</h3>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="py-1 px-2">User</th>
                  <th className="py-1 px-2">Email</th>
                  <th className="py-1 px-2">Số thao tác</th>
                </tr>
              </thead>
              <tbody>
                {report.topUsers.map((u, idx) => (
                  <tr key={u.userId || idx}>
                    <td className="py-1 px-2">{u.User?.username || u.userId}</td>
                    <td className="py-1 px-2">{u.User?.email || ''}</td>
                    <td className="py-1 px-2">{u.actions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
            <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-white">Top 5 phim được xem nhiều nhất</h3>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="py-1 px-2">Phim</th>
                  <th className="py-1 px-2">Lượt xem</th>
                </tr>
              </thead>
              <tbody>
                {report.topMovies.map((m, idx) => (
                  <tr key={m.movieId || idx}>
                    <td className="py-1 px-2">{m.Movie?.title || m.movieId}</td>
                    <td className="py-1 px-2">{m.views}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Report;