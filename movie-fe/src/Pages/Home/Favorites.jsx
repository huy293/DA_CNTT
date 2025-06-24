import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../config/axios';
import useUser from '../../hooks/useUser';
import { formatDate } from '../../utils/dateUtils';
import { useFavorite } from '../../context/FavoriteContext';

const Favorites = () => {
  const { user, loading } = useUser();
  const navigate = useNavigate();
  const { favorites, removeFavorite, loading: favoriteLoading } = useFavorite();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  const handleRemoveFromFavorites = async (seasonId) => {
    await removeFavorite(seasonId);
  };

  if (loading || favoriteLoading) {
    return (
      <div className="min-h-screen pt-20 flex justify-center items-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Danh sách yêu thích</h1>

        {favorites.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Bạn chưa có phim yêu thích nào</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src={item.poster || item.poster_url || 'https://via.placeholder.com/500x750'}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => handleRemoveFromFavorites(item.id)}
                    className="absolute top-2 right-2 p-2 bg-black/50 rounded-full hover:bg-black/70"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <button
                    onClick={() => navigate(`/movie/${item.id}`)}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Xem phim
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites; 