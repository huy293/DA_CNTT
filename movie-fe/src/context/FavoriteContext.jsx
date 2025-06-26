import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import axios from '../config/axios';
import useUser from '../hooks/useUser';

const FavoriteContext = createContext();

export const useFavorite = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const { user, loading: userLoading } = useUser();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch danh sách favorite khi user thay đổi
  useEffect(() => {
    if (userLoading) {
      // Chờ cho đến khi thông tin user được xác thực xong
      return;
    }

    if (!user) {
      setFavorites([]);
      setLoading(false); // Không có user, không cần tải gì cả
      return;
    }

    // Khi có user, tải danh sách yêu thích
    axios.get(`/api/favorite/${user.id}`)
      .then(res => setFavorites(res.data))
      .catch(() => setFavorites([]))
      .finally(() => setLoading(false));
  }, [user, userLoading]);

  // Thêm vào favorite
  const addFavorite = useCallback(async (seasonId) => {
    if (!user) return false;
    setLoading(true);
    try {
      // Gọi API để thêm vào favorite ở backend
      await axios.post('/api/favorite', { seasonId });

      // Lấy thông tin chi tiết của season vừa được thêm
      const seasonRes = await axios.get(`/api/season/${seasonId}`);

      // Cập nhật state với đầy đủ thông tin
      setFavorites(prev => [...prev, seasonRes.data]);

      return true;
    } catch (err) {
      console.error("Failed to add favorite:", err);
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
      await axios.delete('/api/favorite', { data: { seasonId } });
      setFavorites(prev => prev.filter(item => (item.Season?.id || item.id) !== seasonId));
      return true;
    } catch {
      return false;
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Kiểm tra đã favorite chưa
  const isFavorite = useCallback((seasonId) => {
    return favorites.some(item => (item.Season?.id || item.id) === seasonId);
  }, [favorites]);

  return (
    <FavoriteContext.Provider value={{ favorites, loading, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}; 