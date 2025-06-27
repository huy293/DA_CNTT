import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Gradient_outline_Blue, Gradient_outline_Red } from "../CustomButton/BT1";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import axios from "../../config/axios";
import { formatDate } from "../../utils/dateUtils";
import { useFavorite } from '../../context/FavoriteContext';
import useUser from '../../hooks/useUser';
import { FaStar, FaHeart, FaRegHeart, FaPlay, FaClock, FaEye, FaThumbsUp } from 'react-icons/fa';

const Details = ({ Season, onClose }) => {
  const [seasonDetail, setSeasonDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [player, setPlayer] = useState(null);
  const navigate = useNavigate();
  const { isFavorite, addFavorite, removeFavorite, loading: favLoading } = useFavorite();
  const { user } = useUser();

  useEffect(() => {
    const fetchSeasonDetail = async () => {
      if (Season) {
        try {
          setLoading(true);
          // Fetch complete season data including MovieActors and MovieCrews
          const response = await axios.get(`/api/season/${Season.id}`);
          console.log('Details - Season data received:', response.data);
          console.log('Details - MovieActors:', response.data.MovieActors);
          console.log('Details - MovieCrews:', response.data.MovieCrews);
          setSeasonDetail(response.data);
        } catch (err) {
          console.error('Error fetching season detail:', err);
          setError('Không thể tải thông tin chi tiết phim');
          // Fallback to original Season data
          setSeasonDetail(Season);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSeasonDetail();
  }, [Season]);

  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handlePlayerReady = (event) => {
    setPlayer(event.target);
  };

  const handlePlay = () => {
    navigate(`/movie/${seasonDetail.id}`);
  };

  const handleFavorite = async () => {
    if (!user) {
      alert('Bạn cần đăng nhập để sử dụng tính năng này!');
      return;
    }
    if (isFavorite(seasonDetail.id)) {
      await removeFavorite(seasonDetail.id);
    } else {
      await addFavorite(seasonDetail.id);
    }
  };

  return ReactDOM.createPortal(
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">Chi tiết phim</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-red-500 text-center py-8">
              <p>{error}</p>
              <button 
                onClick={() => setSeasonDetail(Season)}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Sử dụng dữ liệu cơ bản
              </button>
            </div>
          ) : seasonDetail ? (
            <div className="text-white space-y-6">
              {/* Video Trailer */}
              <div className="relative w-full pt-[56.25%] mb-4">
                {seasonDetail.trailer_url && (seasonDetail.trailer_url.includes('youtube.com') || seasonDetail.trailer_url.includes('youtu.be')) ? (
                  <YouTube
                    videoId={getYouTubeId(seasonDetail.trailer_url)}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 0,
                        controls: 1,
                        modestbranding: 1,
                        showinfo: 0,
                        rel: 0,
                      },
                    }}
                    onReady={handlePlayerReady}
                  />
                ) : seasonDetail.trailer_url ? (
                  <video
                    src={seasonDetail.trailer_url}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    controls
                  />
                ) : (
                  <div className="absolute top-0 left-0 w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">Không có video</p>
                  </div>
                )}
              </div>

              {/* Thông tin cơ bản */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Poster */}
                <div className="md:col-span-1">
                  <div className="relative w-full" style={{ paddingTop: '150%' }}>
                    <img
                      src={seasonDetail?.poster_url}
                      alt={seasonDetail?.title}
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* Thông tin chi tiết */}
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{seasonDetail.Movie?.title} - {seasonDetail.title}</h3>
                    
                    {/* Thông tin cơ bản */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                        <b>Season:</b> {seasonDetail.season_number}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        seasonDetail.status === 'upcoming' ? 'bg-yellow-600' : 
                        seasonDetail.status === 'ongoing' ? 'bg-green-600' : 'bg-gray-600'
                      }`}>
                        <b>Trạng thái:</b> {
                          seasonDetail.status === 'upcoming' ? 'Sắp chiếu' : 
                          seasonDetail.status === 'ongoing' ? 'Đang chiếu' : 'Hoàn thành'
                        }
                      </span>
                      <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                        <b>Loại:</b> {seasonDetail.Movie?.type === 'movie' ? 'Phim lẻ' : 'Phim bộ'}
                      </span>
                      <span className="bg-orange-600 px-3 py-1 rounded-full text-sm">
                        <b>Số tập:</b> {seasonDetail.Episodes?.length || 0}
                      </span>
                    </div>

                    {/* Thống kê */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="bg-gray-800 p-3 rounded-lg text-center">
                        <FaEye className="w-5 h-5 mx-auto mb-1 text-blue-400" />
                        <div className="text-sm text-gray-300">Lượt xem</div>
                        <div className="font-bold">{seasonDetail.viewCount || 0}</div>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-lg text-center">
                        <FaThumbsUp className="w-5 h-5 mx-auto mb-1 text-red-400" />
                        <div className="text-sm text-gray-300">Yêu thích</div>
                        <div className="font-bold">{seasonDetail.favoriteCount || 0}</div>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-lg text-center">
                        <FaStar className="w-5 h-5 mx-auto mb-1 text-yellow-400" />
                        <div className="text-sm text-gray-300">Điểm</div>
                        <div className="font-bold">{seasonDetail.rating ? `${seasonDetail.rating}/5` : 'N/A'}</div>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-lg text-center">
                        <FaClock className="w-5 h-5 mx-auto mb-1 text-green-400" />
                        <div className="text-sm text-gray-300">Thời lượng</div>
                        <div className="font-bold">{seasonDetail.runtime ? `${seasonDetail.runtime} phút` : 'N/A'}</div>
                      </div>
                    </div>

                    {/* Thông tin chi tiết */}
                    <div className="space-y-2 text-sm">
                      <div><b>Ngày phát hành:</b> {formatDate(seasonDetail.release_date)}</div>
                      <div><b>Thời lượng:</b> {seasonDetail.runtime ? `${seasonDetail.runtime} phút/tập` : 'Đang cập nhật'}</div>
                    </div>
                  </div>

                  {/* Thể loại */}
                  {seasonDetail.Movie?.MovieGenres && seasonDetail.Movie.MovieGenres.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-yellow-400">Thể loại:</h4>
                      <div className="flex flex-wrap gap-2">
                        {seasonDetail.Movie.MovieGenres.map((mg, index) => (
                          <span key={index} className="bg-red-600 px-3 py-1 rounded-full text-sm">
                            {mg.Genre?.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Diễn viên */}
                  {seasonDetail?.MovieActors && seasonDetail.MovieActors.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-pink-400">Diễn viên:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {seasonDetail.MovieActors.slice(0, 6).map((ma, index) => (
                          ma.People && (
                            <div 
                              key={index} 
                              className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors"
                              onClick={() => navigate(`/people/${ma.People.id}`)}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                                  {ma.People?.profile_url ? (
                                    <img 
                                      src={ma.People.profile_url} 
                                      alt={ma.People.name}
                                      className="w-10 h-10 rounded-full object-cover"
                                    />
                                  ) : (
                                    <span className="text-sm font-bold text-gray-400">
                                      {ma.People?.name?.charAt(0)?.toUpperCase()}
                                    </span>
                                  )}
                                </div>
                                <div className="flex-grow min-w-0">
                                  <h5 className="font-semibold text-sm text-white hover:text-blue-400">
                                    {ma.People?.name}
                                  </h5>
                                  {ma.role && (
                                    <p className="text-xs text-gray-400">Vai: {ma.role}</p>
                                  )}
                                </div>
                              </div>
                            </div>
                          )
                        ))}
                        {seasonDetail.MovieActors.length > 6 && (
                          <div className="bg-gray-800 p-3 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400 text-sm">
                              +{seasonDetail.MovieActors.length - 6} diễn viên khác
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Đạo diễn & Ekip */}
                  {seasonDetail?.MovieCrews && seasonDetail.MovieCrews.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-cyan-400">Đạo diễn & Ekip:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {seasonDetail.MovieCrews.slice(0, 6).map((mc, index) => (
                          mc.People && (
                            <div 
                              key={index} 
                              className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors"
                              onClick={() => navigate(`/people/${mc.People.id}`)}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                                  {mc.People?.profile_url ? (
                                    <img 
                                      src={mc.People.profile_url} 
                                      alt={mc.People.name}
                                      className="w-10 h-10 rounded-full object-cover"
                                    />
                                  ) : (
                                    <span className="text-sm font-bold text-gray-400">
                                      {mc.People?.name?.charAt(0)?.toUpperCase()}
                                    </span>
                                  )}
                                </div>
                                <div className="flex-grow min-w-0">
                                  <h5 className="font-semibold text-sm text-white hover:text-blue-400">
                                    {mc.People?.name}
                                  </h5>
                                  {mc.job && (
                                    <p className="text-xs text-gray-400">Vai trò: {mc.job}</p>
                                  )}
                                </div>
                              </div>
                            </div>
                          )
                        ))}
                        {seasonDetail.MovieCrews.length > 6 && (
                          <div className="bg-gray-800 p-3 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400 text-sm">
                              +{seasonDetail.MovieCrews.length - 6} thành viên khác
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Mô tả */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-cyan-400">Mô tả:</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {seasonDetail.overview || seasonDetail.description || seasonDetail.Movie?.overview || 'Chưa có mô tả cho phim này.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Danh sách tập phim */}
              {seasonDetail.Episodes && seasonDetail.Episodes.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Danh sách tập phim</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {seasonDetail.Episodes.map(episode => (
                      <div 
                        key={episode.id}
                        className="bg-gray-800 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors"
                        onClick={() => navigate(`/watch/${seasonDetail.id}/${episode.id}`)}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold">{episode.episode_number}</span>
                          </div>
                          <div className="flex-grow min-w-0">
                            <p className="text-sm font-semibold">Tập {episode.episode_number}</p>
                            <p className="text-xs text-gray-400 line-clamp-1">{episode.title}</p>
                            {episode.runtime && (
                              <div className="text-xs text-gray-500">{episode.runtime} phút</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3 pt-4 border-t border-gray-700">
                <Gradient_outline_Blue
                  content={
                    <div className="flex items-center gap-2">
                      <FaPlay className="w-4 h-4" />
                      Xem phim
                    </div>
                  }
                  onClick={handlePlay}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                />

                <Gradient_outline_Red
                  content={
                    <div className="flex items-center gap-2">
                      {isFavorite(seasonDetail?.id) ? (
                        <FaHeart className="w-4 h-4" />
                      ) : (
                        <FaRegHeart className="w-4 h-4" />
                      )}
                      {isFavorite(seasonDetail?.id) ? 'Đã thích' : 'Thêm danh sách'}
                    </div>
                  }
                  onClick={handleFavorite}
                  className={`px-6 py-3 rounded-lg ${
                    isFavorite(seasonDetail?.id) ? 'bg-red-600' : 'bg-red-600'
                  } text-white hover:bg-red-700`}
                  disabled={favLoading}
                />
              </div>
            </div>
          ) : (
            <p className="text-gray-300">Không tìm thấy thông tin phim</p>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Details;
