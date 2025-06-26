import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import YouTube from "react-youtube";
import { Gradient_outline_Blue, Gradient_outline_Red } from "./CustomButton/BT1";
import Details from "./Modal/Details";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import useUser from '../hooks/useUser';
import axios from '../config/axios';
import { useFavorite } from '../context/FavoriteContext';
import { useNavigate } from "react-router-dom";

const Banner = ({ SeasonsList }) => {
  const [trailers, setTrailers] = useState({});
  const [players, setPlayers] = useState({});
  const [mutedSlides, setMutedSlides] = useState({});
  const swiperRef = useRef(null);

  const [selectedSeason, setSelectedSeason] = useState(null);
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);
  const { user } = useUser();
  const { isFavorite, addFavorite, removeFavorite, loading } = useFavorite();
  const navigate = useNavigate();

  const openDetailModal = (season) => {
    setSelectedSeason(season);
    setDetailModalOpen(true);
  };

  const closeModals = () => {
    setDetailModalOpen(false);
    setSelectedSeason(null);
  };

  useEffect(() => {
    const fetchTrailers = async () => {
      const newTrailers = {};
      await Promise.all(
        SeasonsList.map(async (season) => {
          if (season.trailer_url) {
            const videoId = season.trailer_url.split('v=')[1];
            if (videoId) {
              newTrailers[season.id] = videoId;
            }
          }
        })
      );
      setTrailers(newTrailers);
    };

    if (SeasonsList?.length > 0) {
      fetchTrailers();
    }
  }, [SeasonsList]);

  const handlePlayerReady = (seasonId) => (event) => {
    const playerInstance = event.target;
    playerInstance.mute();
    playerInstance.playVideo();

    setPlayers((prev) => ({ ...prev, [seasonId]: playerInstance }));
    setMutedSlides((prev) => ({ ...prev, [seasonId]: true }));
  };

  const handleVideoEnd = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const toggleMute = (seasonId) => {
    const player = players[seasonId];
    if (player) {
      if (mutedSlides[seasonId]) {
        player.unMute();
      } else {
        player.mute();
      }
      setMutedSlides((prev) => ({
        ...prev,
        [seasonId]: !prev[seasonId],
      }));
    }
  };

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    const currentSeason = SeasonsList[currentIndex];

    Object.entries(players).forEach(([seasonId, player]) => {
      if (parseInt(seasonId) === currentSeason?.id) {
        player.seekTo(0);
        player.playVideo();
      } else {
        player.pauseVideo();
      }
    });
  };

  const handleFavorite = async (seasonId) => {
    if (!user) {
      alert('Bạn cần đăng nhập để sử dụng tính năng này!');
      return;
    }
    if (isFavorite(seasonId)) {
      await removeFavorite(seasonId);
    } else {
      await addFavorite(seasonId);
    }
  };

  const handlePlay = (season) => {
    if (season?.Episodes && season.Episodes.length > 0) {
      navigate(`/watch/${season.id}/${season.Episodes[0].id}`);
    } else {
      alert('Chưa có tập phim nào!');
    }
  };

  return (
    <Swiper
      className="w-full h-[100vh]"
      pagination={{ clickable: true }}
      navigation={true}
      rewind={true}
      modules={[Pagination, Navigation]}
      ref={swiperRef}
      onSlideChange={handleSlideChange}
    >
      {SeasonsList?.map((season) => {
        const trailerKey = trailers[season.id];
        const isMuted = mutedSlides[season.id];

        return (
          <SwiperSlide
            key={season.id}
            className="relative flex justify-center items-center"
          >
            {/* Video trailer */}
            {trailerKey ? (
              <YouTube
                videoId={trailerKey}
                className="absolute w-full h-full"
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    autoplay: 1,
                    controls: 0,
                    modestbranding: 1,
                    showinfo: 0,
                    loop: 0,
                    mute: 1,
                    playlist: trailerKey,
                    rel: 0,
                  },
                }}
                onReady={handlePlayerReady(season.id)}
                onEnd={handleVideoEnd}
              />
            ) : (
              // Ảnh fallback
              <img
                src={season.backdrop_url}
                className="absolute w-full h-full object-cover"
                alt={season.title}
              />
            )}

            {/* Nút bật/tắt tiếng */}
            {trailerKey && (
              <div className="absolute bottom-16 right-1 z-20">
                <Gradient_outline_Blue
                  content={isMuted ? "🔇 Tắt tiếng" : "🔊 Bật tiếng"}
                  onClick={() => toggleMute(season.id)}
                />
              </div>
            )}

            {/* Nút yêu thích góc phải trên */}
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={() => handleFavorite(season.id)}
                disabled={loading}
                className={`p-2 rounded-full ${isFavorite(season.id) ? 'bg-red-500' : 'bg-gray-700'} hover:bg-red-600 transition`}
                title={isFavorite(season.id) ? 'Bỏ khỏi yêu thích' : 'Thêm vào yêu thích'}
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin block"></span>
                ) : isFavorite(season.id) ? (
                  <FaHeart className="text-white" />
                ) : (
                  <FaRegHeart className="text-white" />
                )}
              </button>
            </div>

            {/* Content */}
            <div className="absolute bottom-1/4 left-40 z-10 text-white max-w-xl text-left">
              <h2 className="text-4xl font-bold drop-shadow-lg">
                {season.Movie?.title} - {season.title}
              </h2>
              <p className="text-lg mt-2 drop-shadow-md line-clamp-3">
                {season.overview}
              </p>
              <div className="mt-4">
                <Gradient_outline_Blue content={"Xem phim"} onClick={() => navigate(`/movie/${season.id}`)} />
                <Gradient_outline_Red onClick={() => openDetailModal(season)} content={"Chi tiết"} />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      {isDetailModalOpen && selectedSeason && (
        <Details Season={selectedSeason} onClose={closeModals} />
      )}
    </Swiper>
  );
};

export default Banner;
