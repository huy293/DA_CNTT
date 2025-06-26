import React, { useState, useEffect, useCallback, useRef } from 'react';
import useUser from '../../hooks/useUser';
import axios from '../../config/axios';
import { FaSpinner } from 'react-icons/fa';
import HistoryListItem from '../../components/HistoryListItem';
import { format, isToday, isYesterday, parseISO } from 'date-fns';
import { vi } from 'date-fns/locale';

const groupHistoryByDate = (historyItems) => {
    return historyItems.reduce((acc, item) => {
        const date = parseISO(item.updatedAt);
        let dayLabel;

        if (isToday(date)) {
            dayLabel = 'Hôm nay';
        } else if (isYesterday(date)) {
            dayLabel = 'Hôm qua';
        } else {
            dayLabel = format(date, 'eeee, dd MMMM, yyyy', { locale: vi });
        }
        
        if (!acc[dayLabel]) {
            acc[dayLabel] = [];
        }
        acc[dayLabel].push(item);
        return acc;
    }, {});
};


const History = () => {
    const { user } = useUser();
    const [historyItems, setHistoryItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);

    const observer = useRef();

    const fetchHistory = useCallback(async (pageToFetch) => {
        if (loading || !user) return;
        setLoading(true);
        if (pageToFetch === 1) setInitialLoading(true);

        try {
            const res = await axios.get(`/api/watch-history/${user.id}?page=${pageToFetch}`);
            const { history, totalPages: newTotalPages } = res.data.data;
            setHistoryItems(prev => pageToFetch === 1 ? history : [...prev, ...history]);
            setCurrentPage(pageToFetch);
            setTotalPages(newTotalPages);
        } catch (error) {
            console.error("Failed to fetch history:", error);
        } finally {
            setLoading(false);
            setInitialLoading(false);
        }
    }, [user, loading]);

    useEffect(() => {
        if (user) {
            setHistoryItems([]);
            setCurrentPage(1);
            setTotalPages(1);
            fetchHistory(1);
        } else {
            setHistoryItems([]);
            setInitialLoading(false);
        }
    }, [user]);

    const lastHistoryElementRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && currentPage < totalPages) {
                fetchHistory(currentPage + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, [loading, currentPage, totalPages, fetchHistory]);

    const handleSelectionChange = (id) => {
        setSelectedItems(prev =>
            prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
        );
    };

    const handleDelete = async (ids) => {
        const idsToDelete = Array.isArray(ids) ? ids : [ids];
        if (idsToDelete.length === 0) return;
        
        if (!window.confirm(`Bạn có chắc muốn xóa ${idsToDelete.length} mục đã chọn?`)) return;

        try {
            await axios.delete('/api/watch-history/bulk-delete', { data: { historyIds: idsToDelete } });
            setHistoryItems(prev => prev.filter(item => !idsToDelete.includes(item.id)));
            setSelectedItems(prev => prev.filter(id => !idsToDelete.includes(id)));
        } catch (error) {
            console.error("Failed to delete history items:", error);
            // Add user-facing error message here
        }
    };
    
    const groupedHistory = groupHistoryByDate(historyItems);

    if (initialLoading) {
        return (
            <div className="min-h-screen pt-20 flex justify-center items-center">
                <FaSpinner className="animate-spin text-4xl" />
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20 pb-10 text-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Lịch sử xem</h1>
                    {selectedItems.length > 0 && (
                        <button
                            onClick={() => handleDelete(selectedItems)}
                            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white font-semibold transition-colors"
                        >
                            Xóa ({selectedItems.length}) mục đã chọn
                        </button>
                    )}
                </div>

                {historyItems.length === 0 && !loading ? (
                    <div className="text-center py-12">
                        <p className="text-gray-400">Lịch sử xem của bạn trống.</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {Object.keys(groupedHistory).map((dayLabel, index) => (
                            <div key={dayLabel}>
                                <h2 className="text-lg font-semibold mb-2 sticky top-16 bg-gray-800 py-2">{dayLabel}</h2>
                                <div className="space-y-1">
                                    {groupedHistory[dayLabel].map((item, itemIndex) => {
                                        const isLastItem = index === Object.keys(groupedHistory).length - 1 && itemIndex === groupedHistory[dayLabel].length - 1;
                                        return (
                                            <div ref={isLastItem ? lastHistoryElementRef : null} key={item.id}>
                                                <HistoryListItem
                                                    item={item}
                                                    isSelected={selectedItems.includes(item.id)}
                                                    onSelectionChange={handleSelectionChange}
                                                    onDelete={handleDelete}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                        {loading && !initialLoading && (
                             <div className="flex justify-center items-center p-4">
                                <FaSpinner className="animate-spin text-3xl text-gray-400" />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default History; 