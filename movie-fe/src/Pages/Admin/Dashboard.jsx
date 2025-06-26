import React, { useEffect, useState } from "react";
import axiosInstance from "../../config/axios";
import { formatDate } from "../../utils/dateUtils";
import BarChart from "../../components/Charts/BarChart";
import LineChart from "../../components/Charts/LineChart";
import PieChart from "../../components/Charts/PieChart";
import DonutChart from "../../components/Charts/DonutChart";
import Datatables from "../../components/Datatable/Datatables";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    stats: null,
    monthlyViews: [],
    genreDistribution: [],
    topSeasons: [],
    topUsers: [],
    topFavoriteSeasons: [],
    topRatedSeasons: [],
    newUsers: [],
    newSeasons: [],
    userRoleDistribution: [],
    commentsByMonth: [],
    completionRate: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch tất cả data cùng lúc
        const endpoints = [
          '/api/dashboard/stats',
          '/api/dashboard/monthly-views',
          '/api/dashboard/genre-distribution',
          '/api/dashboard/top-seasons',
          '/api/dashboard/top-users',
          '/api/dashboard/top-favorite-movies',
          '/api/dashboard/top-rated-seasons',
          '/api/dashboard/newest-users',
          '/api/dashboard/newest-seasons',
          '/api/dashboard/user-role-distribution',
          '/api/dashboard/comments-by-month',
          '/api/dashboard/completion-rate'
        ];

        const responses = await Promise.all(
          endpoints.map(endpoint => axiosInstance.get(endpoint))
        );

        console.log("📊 Responses received:", responses.map(r => r.status));

        const [
          stats,
          monthlyViews,
          genreDistribution,
          topSeasons,
          topUsers,
          topFavoriteSeasons,
          topRatedSeasons,
          newUsers,
          newSeasons,
          userRoleDistribution,
          commentsByMonth,
          completionRate
        ] = responses.map(response => response.data);

        console.log("📊 Parsed data:", {
          stats,
          monthlyViews,
          genreDistribution,
          topSeasons,
          topUsers,
          topFavoriteSeasons,
          topRatedSeasons,
          newUsers,
          newSeasons,
          userRoleDistribution,
          commentsByMonth,
          completionRate
        });

        setData({
          stats: stats || { totalMovies: 0, totalUsers: 0, totalEpisodes: 0, totalRatings: 0, totalComments: 0, averageRating: 0 },
          monthlyViews: monthlyViews || [],
          genreDistribution: genreDistribution || [],
          topSeasons: topSeasons || [],
          topUsers: topUsers || [],
          topFavoriteSeasons: topFavoriteSeasons || [],
          topRatedSeasons: topRatedSeasons || [],
          newUsers: newUsers || [],
          newSeasons: newSeasons || [],
          userRoleDistribution: userRoleDistribution || [],
          commentsByMonth: commentsByMonth || [],
          completionRate: completionRate || { totalEpisodes: 0, completedViews: 0, completionRate: 0 }
        });

        console.log("✅ Dashboard data loaded successfully!");
      } catch (err) {
        console.error("❌ Error fetching dashboard data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="p-4 sm:ml-64 dark:bg-gray-900 min-h-screen">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300">Đang tải dữ liệu...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 sm:ml-64 dark:bg-gray-900 min-h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong className="font-bold">Lỗi!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:ml-64 dark:bg-gray-900 min-h-screen">
      <div className="p-4 border-2 border-dashed rounded-lg border-gray-200 dark:border-gray-700 mt-14">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Dashboard Thống kê
        </h1>

        {/* Stats Cards */}
        {data.stats && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              📊 Thống kê tổng quan hệ thống
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow">
                <div className="text-gray-500 text-sm">Tổng phim</div>
                <div className="text-2xl font-bold text-blue-600">{data.stats.totalMovies}</div>
                <div className="text-xs text-gray-400 mt-1">Số lượng phim trong hệ thống</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow">
                <div className="text-gray-500 text-sm">Tổng user</div>
                <div className="text-2xl font-bold text-green-600">{data.stats.totalUsers}</div>
                <div className="text-xs text-gray-400 mt-1">Tổng số người dùng đã đăng ký</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow">
                <div className="text-gray-500 text-sm">Tổng tập phim</div>
                <div className="text-2xl font-bold text-purple-600">{data.stats.totalEpisodes}</div>
                <div className="text-xs text-gray-400 mt-1">Tổng số tập phim có sẵn</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow">
                <div className="text-gray-500 text-sm">Tổng comment</div>
                <div className="text-2xl font-bold text-orange-600">{data.stats.totalComments}</div>
                <div className="text-xs text-gray-400 mt-1">Tổng số bình luận của người dùng</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow">
                <div className="text-gray-500 text-sm">Tổng rating</div>
                <div className="text-2xl font-bold text-indigo-600">{data.stats.totalRatings}</div>
                <div className="text-xs text-gray-400 mt-1">Tổng số đánh giá sao</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow">
                <div className="text-gray-500 text-sm">Rating trung bình</div>
                <div className="text-2xl font-bold text-yellow-600">{data.stats.averageRating}</div>
                <div className="text-xs text-gray-400 mt-1">Điểm đánh giá trung bình (1-5 sao)</div>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <strong>💡 Giải thích:</strong> Các số liệu này phản ánh tổng quan về quy mô và hoạt động của hệ thống streaming phim. 
                Số lượng phim, user và tương tác (comment, rating) cho thấy mức độ phổ biến và sự tham gia của cộng đồng.
              </p>
            </div>
          </div>
        )}

        {/* Completion Rate */}
        {data.completionRate && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              🎯 Tỷ lệ hoàn thành xem phim
            </h2>
            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-blue-600">
                {data.completionRate.completionRate}%
              </div>
              <div className="text-gray-500 text-sm">
                {data.completionRate.completedViews} lượt xem hoàn thành / {data.completionRate.totalEpisodes} tập phim
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
              <p className="text-sm text-green-700 dark:text-green-300">
                <strong>💡 Giải thích:</strong> Tỷ lệ này cho biết phần trăm người dùng xem hết một tập phim. 
                Tỷ lệ cao cho thấy nội dung hấp dẫn và trải nghiệm xem tốt. Tỷ lệ thấp có thể do nội dung không phù hợp hoặc vấn đề kỹ thuật.
              </p>
            </div>
          </div>
        )}

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Monthly Views Chart */}
          {data.monthlyViews.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                📈 Lượt xem theo tháng
              </h3>
              <BarChart
                title=""
                data={data.monthlyViews.map(item => ({
                  name: `Tháng ${item.month}`,
                  value: item.views || item.count || 0
                }))}
              />
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg mt-3">
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  <strong>💡 Phân tích:</strong> Biểu đồ này cho thấy xu hướng xem phim theo thời gian. 
                  Tháng có lượt xem cao thường là tháng có nhiều phim mới hoặc sự kiện đặc biệt. 
                  Giúp lên kế hoạch phát hành nội dung hiệu quả.
                </p>
              </div>
            </div>
          )}

          {/* Genre Distribution Chart */}
          {data.genreDistribution.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                🎭 Phân bố thể loại phim
              </h3>
              <PieChart
                title=""
                data={data.genreDistribution.map(item => ({
                  name: item.name,
                  value: item.movieCount || item.count || 0
                }))}
              />
              <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg mt-3">
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  <strong>💡 Phân tích:</strong> Thể loại nào chiếm tỷ lệ cao nhất? 
                  Điều này giúp hiểu sở thích của người dùng và định hướng phát triển nội dung. 
                  Có thể cân bằng giữa thể loại phổ biến và thể loại ít được quan tâm.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Comments by Month Chart */}
          {data.commentsByMonth.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                💬 Comment theo tháng
              </h3>
              <LineChart
                title=""
                data={data.commentsByMonth.map(item => ({
                  name: `Tháng ${item.month}`,
                  value: item.commentCount || item.count || 0
                }))}
              />
              <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg mt-3">
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  <strong>💡 Phân tích:</strong> Số lượng comment phản ánh mức độ tương tác của cộng đồng. 
                  Tháng có nhiều comment thường là tháng có phim gây tranh cãi hoặc rất hay. 
                  Giúp đánh giá chất lượng nội dung và sự tham gia của người dùng.
                </p>
              </div>
            </div>
          )}

          {/* User Role Distribution Chart */}
          {data.userRoleDistribution.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                👥 Phân bố vai trò user
              </h3>
              <DonutChart
                title=""
                data={data.userRoleDistribution.map(item => ({
                  name: item.role,
                  value: item.userCount || item.count || 0
                }))}
              />
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg mt-3">
                <p className="text-sm text-indigo-700 dark:text-indigo-300">
                  <strong>💡 Phân tích:</strong> Tỷ lệ giữa user thường, moderator và admin. 
                  Đảm bảo có đủ nhân lực quản lý cho số lượng user hiện tại. 
                  Cân bằng giữa quyền hạn và trách nhiệm của từng vai trò.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Data Tables Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Top Seasons Table */}
          {data.topSeasons.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white p-4 pb-2">
                🏆 Top phim xem nhiều nhất
              </h3>
              <Datatables
                data={data.topSeasons}
                columns={[
                  { name: "Tên phim", selector: (row) => row.title || (row.season && row.season.title) || "Không rõ" },
                  { name: "Lượt xem", selector: (row) => row.viewCount }
                ]}
              />
              <div className="bg-red-50 dark:bg-red-900/20 p-3 m-4 rounded-lg">
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>💡 Ý nghĩa:</strong> Những phim này thu hút nhiều người xem nhất. 
                  Có thể phân tích để hiểu yếu tố thành công: thể loại, diễn viên, thời điểm phát hành, 
                  hoặc chất lượng nội dung.
                </p>
              </div>
            </div>
          )}

          {/* Top Users Table */}
          {data.topUsers.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white p-4 pb-2">
                👑 Top user xem nhiều nhất
              </h3>
              <Datatables
                data={data.topUsers}
                columns={[
                  { name: "Username", selector: (row) => row.user?.username || "Không rõ" },
                  { name: "Lượt xem", selector: (row) => row.viewCount }
                ]}
              />
              <div className="bg-green-50 dark:bg-green-900/20 p-3 m-4 rounded-lg">
                <p className="text-sm text-green-700 dark:text-green-300">
                  <strong>💡 Ý nghĩa:</strong> Những user này là khách hàng trung thành nhất. 
                  Có thể xem xét chương trình VIP, ưu đãi đặc biệt hoặc mời tham gia beta test 
                  để tăng sự gắn kết với nền tảng.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Newest Users Table */}
        {data.newUsers.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white p-4 pb-2">
              🆕 User mới nhất
            </h3>
            <Datatables
              data={data.newUsers}
              columns={[
                { name: "Username", selector: (row) => row.username },
                { name: "Email", selector: (row) => row.email },
                { name: "Ngày đăng ký", selector: (row) => formatDate(row.createdAt) }
              ]}
            />
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 m-4 rounded-lg">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <strong>💡 Ý nghĩa:</strong> Theo dõi user mới đăng ký để đánh giá hiệu quả marketing, 
                chương trình khuyến mãi hoặc viral marketing. Có thể gửi email chào mừng, 
                hướng dẫn sử dụng để tăng tỷ lệ giữ chân user.
              </p>
            </div>
          </div>
        )}

        {/* Newest Seasons Table */}
        {data.newSeasons.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white p-4 pb-2">
              🎬 Phim mới nhất
            </h3>
            <Datatables
              data={data.newSeasons}
              columns={[
                { name: "Tên phim", selector: (row) => row.title },
                { name: "Ngày thêm", selector: (row) => formatDate(row.createdAt) }
              ]}
            />
            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 m-4 rounded-lg">
              <p className="text-sm text-purple-700 dark:text-purple-300">
                <strong>💡 Ý nghĩa:</strong> Theo dõi phim mới được thêm vào hệ thống. 
                Đảm bảo tính cập nhật của nội dung và đánh giá hiệu quả của team content. 
                Có thể lên kế hoạch quảng bá cho những phim mới này.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;