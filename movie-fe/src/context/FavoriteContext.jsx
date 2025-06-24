import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import axios from '../config/axios';
import useUser from '../hooks/useUser';

const FavoriteContext = createContext();

export const useFavorite = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const { user } = useUser();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch danh sách favorite khi user thay đổi
  useEffect(() => {
    if (!user) {
      setFavorites([]);
      return;
    }
    setLoading(true);
    axios.get(`/api/favorite/${user.id}`)
      .then(res => setFavorites(res.data))
      .catch(() => setFavorites([]))
      .finally(() => setLoading(false));
  }, [user]);

  // Thêm vào favorite
  const addFavorite = useCallback(async (seasonId) => {
    if (!user) return false;
    setLoading(true);
    try {
      await axios.post('/api/favorite', { seasonId });
      setFavorites(prev => [...prev, { id: seasonId }]);
      return true;
    } catch {
      return false;
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Xóa khỏi favorite
  const removeFavorite = useCallback(async (seasonId) => {
    if (!user) return false;
    setLoading(true);
    try {
      await axios.delete(`/api/favorite/${seasonId}`);
      setFavorites(prev => prev.filter(item => item.id !== seasonId));
      return true;
    } catch {
      return false;
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Kiểm tra đã favorite chưa
  const isFavorite = useCallback((seasonId) => {
    return favorites.some(item => item.id === seasonId);
  }, [favorites]);

  return (
    <FavoriteContext.Provider value={{ favorites, loading, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}; 