import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const EditorsPickSlide = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    import('../config/axios').then(({ default: axios }) => {
      axios.get('/api/movies/editors-pick')
        .then(res => setMovies(res.data))
        .catch(() => setMovies([]))
        .finally(() => setLoading(false));
    });
  }, []);

  if (loading) return <div className="text-white px-20 py-5">Đang tải...</div>;
  if (!movies.length) return null;

  return (
    <div className="dark:bg-gray-900 px-20 py-5 overflow-visible relative z-0">
      <h1 className="text-white pb-3 text-2xl">Sự lựa chọn của biên tập viên</h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full h-full overflow-visible"
      >
        {movies.map(movie => (
          <SwiperSlide key={movie.id}>
            <div className="group cursor-pointer" onClick={() => navigate(`/movie/${movie.id}`)}>
              <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src={movie.poster_url || movie.backdrop_url || 'https://via.placeholder.com/500x750'}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                {movie.rating && (
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md flex items-center gap-1 text-sm font-semibold">
                    <span className="text-yellow-400">★</span>
                    {movie.rating}
                  </div>
                )}
              </div>
              <div className="mt-2">
                <h3 className="font-semibold truncate text-white">{movie.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>{movie.type === 'movie' ? 'Phim lẻ' : 'Phim bộ'}</span>
                  <span>{movie.release_date ? new Date(movie.release_date).getFullYear() : ''}</span>
                </div>
                <button
                  className="mt-2 w-full bg-blue-600 text-white px-2 py-1 rounded-lg flex items-center justify-center gap-1 hover:bg-blue-700 transition-colors text-xs"
                  onClick={e => { e.stopPropagation(); navigate(`/movie/${movie.id}`); }}
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EditorsPickSlide; 