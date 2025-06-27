import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../config/axios';
import { formatDate } from '../../utils/dateUtils';
import { FaStar, FaHeart, FaRegHeart, FaPlay, FaClock, FaEye, FaThumbsUp, FaBirthdayCake, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { useFavorite } from '../../context/FavoriteContext';
import useUser from '../../hooks/useUser';
import Login from '../../components/Modal/Login';

const PeopleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const { isFavorite, addFavorite, removeFavorite, loading: favoriteLoading } = useFavorite();
  const [people, setPeople] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/people/${id}`);
        setPeople(response.data);
        setError(null);
      } catch (err) {
        setError('Không thể tải thông tin diễn viên');
        console.error('Error fetching people:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, [id]);

  const handleFavoriteClick = async () => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }
    // Implement favorite for people if needed
  };

  const handleMovieClick = (seasonId) => {
    navigate(`/movie/${seasonId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
        <div className="text-red-500 text-center">
          <h2 className="text-2xl font-bold mb-2">Lỗi</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!people) {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
        <div className="text-gray-400 text-center">
          <h2 className="text-2xl font-bold mb-2">Không tìm thấy</h2>
          <p>Không tìm thấy thông tin diễn viên</p>
        </div>
      </div>
    );
  }

  // Phân loại movies theo vai trò
  const actorMovies = people.movies?.filter(m => m.role === 'Actor') || [];
  const crewMovies = people.movies?.filter(m => m.role === 'Crew') || [];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Profile Image */}
          <div className="lg:col-span-1">
            <div className="relative">
              {people.profile_url ? (
                <img
                  src={people.profile_url}
                  alt={people.name}
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              ) : (
                <div className="w-full max-w-md mx-auto h-96 bg-gray-800 rounded-lg flex items-center justify-center">
                  <FaUser className="w-24 h-24 text-gray-600" />
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{people.name}</h1>
            
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {people.birthday && (
                <div className="flex items-center gap-2 text-gray-300">
                  <FaBirthdayCake className="text-pink-400" />
                  <span>Ngày sinh: {formatDate(people.birthday)}</span>
                </div>
              )}
              {people.birthplace && (
                <div className="flex items-center gap-2 text-gray-300">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span>Nơi sinh: {people.birthplace}</span>
                </div>
              )}
              {people.gender && (
                <div className="flex items-center gap-2 text-gray-300">
                  <FaUser className="text-green-400" />
                  <span>Giới tính: {people.gender}</span>
                </div>
              )}
            </div>

            {/* Biography */}
            {people.biography && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Tiểu sử</h3>
                <p className="text-gray-300 leading-relaxed">{people.biography}</p>
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <FaPlay className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                <div className="text-sm text-gray-300">Tổng phim</div>
                <div className="font-bold text-xl">{people.movies?.length || 0}</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <FaStar className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                <div className="text-sm text-gray-300">Vai diễn</div>
                <div className="font-bold text-xl">{actorMovies.length}</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <FaClock className="w-6 h-6 mx-auto mb-2 text-green-400" />
                <div className="text-sm text-gray-300">Vai trò</div>
                <div className="font-bold text-xl">{crewMovies.length}</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <FaEye className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                <div className="text-sm text-gray-300">Năm hoạt động</div>
                <div className="font-bold text-xl">
                  {people.movies?.length > 0 ? 
                    new Date().getFullYear() - new Date(people.movies[people.movies.length - 1].release_date).getFullYear() : 
                    0
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Movies Section */}
        <div className="space-y-8">
          {/* Actor Movies */}
          {actorMovies.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-pink-400">Vai diễn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {actorMovies.map((movie, index) => (
                  <div 
                    key={index}
                    className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 cursor-pointer transition-colors"
                    onClick={() => handleMovieClick(movie.id)}
                  >
                    <div className="relative">
                      <img
                        src={movie.poster_url || 'https://via.placeholder.com/300x450'}
                        alt={movie.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-black bg-opacity-75 px-2 py-1 rounded text-xs">
                        {movie.status === 'upcoming' ? 'Sắp chiếu' : 
                         movie.status === 'ongoing' ? 'Đang chiếu' : 'Hoàn thành'}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm mb-1 line-clamp-1">{movie.movieTitle}</h3>
                      <p className="text-gray-400 text-xs mb-2">Season {movie.season_number}</p>
                      {movie.character && (
                        <p className="text-pink-400 text-xs">Vai: {movie.character}</p>
                      )}
                      {movie.release_date && (
                        <p className="text-gray-500 text-xs mt-2">
                          {new Date(movie.release_date).getFullYear()}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Crew Movies */}
          {crewMovies.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Vai trò sản xuất</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {crewMovies.map((movie, index) => (
                  <div 
                    key={index}
                    className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 cursor-pointer transition-colors"
                    onClick={() => handleMovieClick(movie.id)}
                  >
                    <div className="relative">
                      <img
                        src={movie.poster_url || 'https://via.placeholder.com/300x450'}
                        alt={movie.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-black bg-opacity-75 px-2 py-1 rounded text-xs">
                        {movie.status === 'upcoming' ? 'Sắp chiếu' : 
                         movie.status === 'ongoing' ? 'Đang chiếu' : 'Hoàn thành'}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm mb-1 line-clamp-1">{movie.movieTitle}</h3>
                      <p className="text-gray-400 text-xs mb-2">Season {movie.season_number}</p>
                      {movie.job && (
                        <p className="text-cyan-400 text-xs">Vai trò: {movie.job}</p>
                      )}
                      {movie.release_date && (
                        <p className="text-gray-500 text-xs mt-2">
                          {new Date(movie.release_date).getFullYear()}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <Login
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={() => setShowLoginModal(false)}
        />
      )}
    </div>
  );
};

export default PeopleDetail; 