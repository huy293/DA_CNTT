import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import SlideMovie from "../../components/SlideMovie";
import '../../index.css';
import axios from '../../config/axios';

function Home() {
  const [trendingSeasons, setTrendingSeasons] = useState([]);
  const [popularSeasons, setPopularSeasons] = useState([]);
  const [topRatedSeasons, setTopRatedSeasons] = useState([]);
  const [upcomingSeasons, setUpcomingSeasons] = useState([]);
  const [nowPlayingSeasons, setNowPlayingSeasons] = useState([]);
  const [genres, setGenres] = useState([]);
  const [seasonsByGenre, setSeasonsByGenre] = useState({});
  const [loading, setLoading] = useState(true);
  const [editorsPickLists, setEditorsPickLists] = useState([]);
  const [bannerMovies, setBannerMovies] = useState([]);

  useEffect(() => {
    // Lấy các list đặc biệt
    Promise.all([
      axios.get('/api/season/trending'),
      axios.get('/api/season/popular'),
      axios.get('/api/season/top-rated'),
      axios.get('/api/season/upcoming'),
      axios.get('/api/season/now-playing'),
      axios.get('/api/genre')
    ]).then(([trending, popular, topRated, upcoming, nowPlaying, genresRes]) => {
      setTrendingSeasons(trending.data);
      setPopularSeasons(popular.data);
      setTopRatedSeasons(topRated.data);
      setUpcomingSeasons(upcoming.data);
      setNowPlayingSeasons(nowPlaying.data);
      setGenres(genresRes.data);

      // Log từng API
      console.log('Trending:', trending.data);
      console.log('Popular:', popular.data);
      console.log('Top Rated:', topRated.data);
      console.log('Upcoming:', upcoming.data);
      console.log('Now Playing:', nowPlaying.data);
      console.log('Genres:', genresRes.data);
    }).catch(err => {
      setGenres([]);
      console.error('Error fetching main lists:', err);
    });

    axios.get('/api/editors-pick-list/with-seasons').then(res => {
      setEditorsPickLists(res.data);
      // Lấy seasons cho banner từ list có isBanner=true
      const bannerList = res.data.find(l => l.isBanner);
      if (bannerList && bannerList.seasons && bannerList.seasons.length > 0) {
        setBannerMovies(bannerList.seasons);
      }
    });
  }, []);

  useEffect(() => {
    if (genres.length === 0) {
      setLoading(false);
      return;
    }
    setLoading(true);
    Promise.all(
      genres.map(genre =>
        axios.get(`/api/season/by-genre/${genre.id}`)
          .then(res => {
            console.log(`Seasons for genre ${genre.name} (${genre.id}):`, res.data);
            return { [genre.id]: res.data };
          })
          .catch(() => {
            console.log(`Seasons for genre ${genre.name} (${genre.id}): []`);
            return { [genre.id]: [] };
          })
      )
    ).then(results => {
      const merged = Object.assign({}, ...results);
      setSeasonsByGenre(merged);
      setLoading(false);
    });
  }, [genres]);

  if (loading) return <div>Đang tải dữ liệu...</div>;

  return (
    <div className="pt-16">
      <Banner SeasonsList={bannerMovies}/>
      {editorsPickLists.filter(list => !list.isBanner).map(list => (
        <SlideMovie key={list.id} title={list.title} SeasonsList={list.seasons || []} />
      ))}
      <SlideMovie title="Phim đề cử" SeasonsList={popularSeasons} />
      <SlideMovie title="Phim hay" SeasonsList={topRatedSeasons} />
      <SlideMovie title="Sắp chiếu" SeasonsList={upcomingSeasons} />
      <SlideMovie title="Đang chiếu" SeasonsList={nowPlayingSeasons} />
      {genres.map(genre => (
        (seasonsByGenre[genre.id] && seasonsByGenre[genre.id].length > 0) && (
          <SlideMovie
            key={genre.id}
            title={genre.name}
            SeasonsList={seasonsByGenre[genre.id]}
          />
        )
      ))}
    </div>
  );
}

export default Home;