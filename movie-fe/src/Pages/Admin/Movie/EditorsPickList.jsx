import React, { useEffect, useState } from 'react';
import axios from '../../../config/axios';
import Select from 'react-select';

const EditorsPickListAdmin = () => {
  const [lists, setLists] = useState([]);
  const [allSeasons, setAllSeasons] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', movieIds: [], isBanner: false });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLists();
    fetchAllSeasons();
  }, []);

  const fetchLists = async () => {
    const res = await axios.get('/api/editors-pick-list/with-seasons');
    setLists(res.data);
  };
  
  const fetchAllSeasons = async () => {
    try {
      // Lấy tất cả seasons từ các API có sẵn
      const [trending, popular, topRated, upcoming, nowPlaying] = await Promise.all([
        axios.get('/api/season/trending'),
        axios.get('/api/season/popular'),
        axios.get('/api/season/top-rated'),
        axios.get('/api/season/upcoming'),
        axios.get('/api/season/now-playing')
      ]);
      
      // Gộp tất cả seasons và loại bỏ trùng lặp
      const allSeasonsData = [
        ...trending.data,
        ...popular.data,
        ...topRated.data,
        ...upcoming.data,
        ...nowPlaying.data
      ];
      
      // Loại bỏ trùng lặp theo id
      const uniqueSeasons = allSeasonsData.filter((season, index, self) => 
        index === self.findIndex(s => s.id === season.id)
      );
      
      setAllSeasons(uniqueSeasons);
    } catch (error) {
      console.error('Error fetching seasons:', error);
      setAllSeasons([]);
    }
  };

  const getSeasonsForList = (movieIds) => allSeasons.filter(s => movieIds.includes(s.movieId));

  const handleEdit = (list) => {
    setEditing(list.id);
    setForm({
      title: list.title,
      movieIds: list.movieIds,
      isBanner: list.isBanner,
    });
  };
  const handleDelete = async (id) => {
    if (!window.confirm('Xóa list này?')) return;
    await axios.delete(`/api/editors-pick-list/${id}`);
    fetchLists();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (editing) {
      await axios.put(`/api/editors-pick-list/${editing}`, form);
    } else {
      await axios.post('/api/editors-pick-list', form);
    }
    setEditing(null);
    setForm({ title: '', movieIds: [], isBanner: false });
    setLoading(false);
    fetchLists();
  };
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-white">Quản lý Editors Pick List</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-lg mb-8">
        <div className="mb-2">
          <label className="block text-white mb-1">Tiêu đề dòng slide</label>
          <input className="w-full p-2 rounded" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required />
        </div>
        <div className="mb-2">
          <label className="block text-white mb-1">Chọn phim</label>
          <Select
            isMulti
            options={allSeasons.map(s => ({ value: s.movieId, label: `${s.Movie?.title} - ${s.title}` }))}
            value={allSeasons.filter(s => form.movieIds.includes(s.movieId)).map(s => ({ value: s.movieId, label: `${s.Movie?.title} - ${s.title}` }))}
            onChange={opts => setForm(f => ({ ...f, movieIds: opts.map(o => o.value) }))}
            className="text-black"
          />
        </div>
        <div className="mb-2 flex items-center gap-2">
          <input type="checkbox" checked={form.isBanner} onChange={e => setForm(f => ({ ...f, isBanner: e.target.checked }))} id="isBanner" />
          <label htmlFor="isBanner" className="text-white">Dùng làm Banner</label>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2" disabled={loading}>{editing ? 'Cập nhật' : 'Thêm mới'}</button>
        {editing && <button type="button" className="ml-2 text-white underline" onClick={() => { setEditing(null); setForm({ title: '', movieIds: [], isBanner: false }); }}>Hủy</button>}
      </form>
      <div className="space-y-4">
        {lists.map(list => (
          <div key={list.id} className="bg-gray-700 p-4 rounded flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold text-white">{list.title} {list.isBanner && <span className="text-yellow-400">(Banner)</span>}</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {getSeasonsForList(list.movieIds).map(season => (
                  <div key={season.id} className="flex flex-col items-center w-20">
                    <img src={season.poster_url || season.backdrop_url || season.Movie?.poster_url || 'https://via.placeholder.com/80x120'} alt={season.title} className="w-16 h-24 object-cover rounded" />
                    <span className="text-xs text-gray-200 truncate w-full text-center">{season.Movie?.title} - {season.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-2 md:mt-0 flex gap-2">
              <button className="bg-green-600 text-white px-3 py-1 rounded" onClick={() => handleEdit(list)}>Sửa</button>
              <button className="bg-red-600 text-white px-3 py-1 rounded" onClick={() => handleDelete(list.id)}>Xóa</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsPickListAdmin; 