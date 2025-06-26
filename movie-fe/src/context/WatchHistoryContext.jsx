import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import axios from '../config/axios';
import useUser from '../hooks/useUser';

const WatchHistoryContext = createContext();

export const useWatchHistory = () => useContext(WatchHistoryContext);

export const WatchHistoryProvider = ({ children }) => {
  const { user, loading: userLoading } = useUser();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch watch history when user changes
  useEffect(() => {
    if (userLoading) {
      return; // Wait for user authentication to resolve
    }
    if (!user) {
      setHistory([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    axios.get(`/api/watch-history/${user.id}`)
      .then(res => {
        // The API returns { data: [...] }, so we access res.data.data
        setHistory(res.data.data || []);
      })
      .catch(() => {
        setHistory([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user, userLoading]);

  // Add an item to the history and refetch the list
  const addWatchHistory = useCallback(async (episodeId) => {
    if (!user) return;
    try {
      await axios.post('/api/watch-history', { episodeId });
      // Refetch history after successfully adding
      axios.get(`/api/watch-history/${user.id}`)
        .then(res => setHistory(res.data.data || []));
    } catch (error) {
      // Avoid logging errors for duplicate history, which is expected
      if (error.response?.status !== 409) {
        console.error("Failed to add to watch history:", error);
      }
    }
  }, [user]);

  // Clear all history for the user
  const clearWatchHistory = useCallback(async () => {
    if (!user) return false;
    try {
      await axios.delete(`/api/watch-history/user/history`); // Use the new correct endpoint
      setHistory([]);
      return true;
    } catch (error) {
      console.error("Failed to clear watch history:", error);
      return false;
    }
  }, [user]);

  return (
    <WatchHistoryContext.Provider value={{ history, loading, addWatchHistory, clearWatchHistory }}>
      {children}
    </WatchHistoryContext.Provider>
  );
}; 