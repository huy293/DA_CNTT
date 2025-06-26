import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { format, isToday, isYesterday } from 'date-fns';
import { vi } from 'date-fns/locale';
import { API_URL } from '../config/config';
import { Link } from 'react-router-dom';

const HistoryListItem = ({ item, isSelected, onSelectionChange, onDelete }) => {
    const { episode } = item;
    if (!episode || !episode.Season || !episode.Season.Movie) {
        return null;
    }

    const season = episode.Season;
    const movie = season.Movie;
    const posterUrl = season.poster_url?.startsWith('http') ? season.poster_url : `${API_URL}${season.poster_url}`;

    // Định dạng thời gian (ví dụ: 14:30)
    const time = format(new Date(item.updatedAt), 'p', { locale: vi });

    // Đường dẫn tới trang tập phim
    const episodeLink = `/watch/${season.id}/${episode.id}`;

    return (
        <div className={`flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors duration-200 ${isSelected ? 'bg-blue-900/50' : ''}`}>
            <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onSelectionChange(item.id)}
                className="mr-4 h-5 w-5 rounded bg-gray-600 border-gray-500 focus:ring-blue-500"
            />
            <Link to={episodeLink} className="flex items-center flex-grow min-w-0 group" style={{ textDecoration: 'none' }}>
                <span className="w-16 text-gray-400 group-hover:text-white transition-colors">{time}</span>
                <img
                    src={posterUrl}
                    alt={movie.title}
                    className="w-10 h-10 object-cover rounded-md mr-4"
                />
                <div className="flex flex-col min-w-0">
                    <span className="font-semibold truncate">{movie.title} - {season.title}</span>
                    <span className="text-sm text-gray-400 truncate">{episode.title}</span>
                </div>
            </Link>
            <button onClick={() => onDelete(item.id)} className="ml-4 p-2 text-gray-400 hover:text-white">
                <FaTrash />
            </button>
        </div>
    );
};

export default HistoryListItem; 