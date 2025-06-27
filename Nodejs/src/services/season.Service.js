const { Season, Episode, Movie, MovieGenre, Genre, Comment, User, Favorite, Rating, WatchHistory, MovieActor, MovieCrew, People, sequelize } = require("../models");
const { Op } = require("sequelize");

exports.createSeason = async (movieId, data) => {
    const movie = await Movie.findByPk(movieId);
    if (!movie) {
      throw new Error("Movie not found");
    }
    return await Season.create({ ...data, movieId });
};
exports.updateSeason = async (seasonId, data) => {
    const season = await Season.findByPk(seasonId);
    if (!season) {
      throw new Error("Season not found");
    }
  
    await season.update(data);
  
    return season;
};
exports.deleteSeason = async (id) => {
  return await Season.destroy({ where: { id } });
};
exports.getSeasonsByMovie = async (movieId) => {
  return await Season.findAll({
    where: { movieId },
    order: [["season_number", "ASC"]],
    include: [{ model: Episode }],
  });
};

exports.getSeasonById = async (id) => {
  try {
    console.log('getSeasonById called with id:', id);
    
    const season = await Season.findByPk(id, {
      include: [
        { model: Episode },
        { 
          model: Movie,
          include: [
            {
              model: MovieGenre,
              include: [{ model: Genre }]
            }
          ]
        }
      ]
    });

    console.log('Season found:', season ? 'Yes' : 'No');

    if (!season) return null;

    // Lấy MovieActors và MovieCrews với People data
    const movieActors = await MovieActor.findAll({
      where: { seasonId: id },
      include: [{ 
        model: People,
        as: 'People'
      }]
    });

    const movieCrews = await MovieCrew.findAll({
      where: { seasonId: id },
      include: [{ 
        model: People,
        as: 'People'
      }]
    });

    console.log('MovieActors found:', movieActors.length);
    console.log('MovieCrews found:', movieCrews.length);

    // Đếm lượt xem (WatchHistory)
    const episodes = await Episode.findAll({ where: { seasonId: id }, attributes: ['id'], raw: true });
    const episodeIds = episodes.map(e => e.id);
    const viewCount = episodeIds.length
      ? await WatchHistory.count({ where: { episodeId: { [Op.in]: episodeIds } } })
      : 0;

    // Đếm yêu thích (Favorite)
    const favoriteCount = await Favorite.count({ where: { seasonId: id } });

    // Tính điểm rating trung bình (Rating)
    const ratingData = await Rating.findOne({
      where: { seasonId: id },
      attributes: [[sequelize.fn('AVG', sequelize.col('rating')), 'avgRating']],
      raw: true
    });
    const rating = ratingData?.avgRating ? Number(ratingData.avgRating).toFixed(1) : 0;

    console.log('Stats calculated:', { viewCount, favoriteCount, rating });

    // Gộp vào kết quả trả về
    return {
      ...season.toJSON(),
      MovieActors: movieActors,
      MovieCrews: movieCrews,
      viewCount,
      favoriteCount,
      rating
    };
  } catch (error) {
    console.error('Error in getSeasonById:', error);
    console.error('Error stack:', error.stack);
    throw error;
  }
};

// Lấy comment của season
exports.getSeasonComments = async (seasonId) => {
  return await Comment.findAll({
    where: { seasonId },
    include: [{
      model: User,
      attributes: ['id', 'username', 'avatar']
    }],
    order: [['createdAt', 'DESC']]
  });
}

// Lấy các season liên quan (cùng thể loại, khác id)
exports.getRelatedSeasons = async (seasonId) => {
  const season = await Season.findByPk(seasonId, {
    include: [{
      model: Movie,
      include: [{ model: Genre, through: MovieGenre }]
    }]
  });

  if (!season || !season.Movie) return [];

  const genres = season.Movie.Genres.map(genre => genre.id);

  return await Season.findAll({
    include: [{
      model: Movie,
      include: [{
        model: Genre,
        through: MovieGenre,
        where: { id: { [Op.in]: genres } }
      }]
    }],
    where: { id: { [Op.ne]: seasonId } },
    limit: 8
  });
}


exports.getTrendingSeasons = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const histories = await WatchHistory.findAll({
    include: [{
      model: Episode,
      as: 'episode',
      attributes: ['seasonId'],
      required: true
    }],
    attributes: [
      [sequelize.col('episode.seasonId'), 'seasonId'],
      [sequelize.fn('COUNT', sequelize.col('WatchHistory.userId')), 'viewCount']
    ],
    where: { updatedAt: { [Op.gte]: sevenDaysAgo } },
    group: ['episode.seasonId'],
    order: [[sequelize.literal('viewCount'), 'DESC']],
    limit: 10,
    raw: true
  });

  const seasonIds = histories.map(h => h.seasonId);
  if (!seasonIds.length) return [];

  return await Season.findAll({
    where: { id: seasonIds },
    include: [{ model: Movie, include: [{ model: Genre, through: { attributes: [] } }] }]
  });
};
// Popular: nhiều favorite nhất
exports.getPopularSeasons = async () => {
  const favorites = await Favorite.findAll({
    attributes: [
      'seasonId',
      [sequelize.fn('COUNT', sequelize.col('seasonId')), 'favCount']
    ],
    group: ['seasonId'],
    order: [[sequelize.literal('favCount'), 'DESC']],
    limit: 10,
    raw: true
  });

  const seasonIds = favorites.map(f => f.seasonId);
  if (!seasonIds.length) return []; // <-- Dòng này giúp tránh lỗi khi không có dữ liệu

  return await Season.findAll({
    where: { id: seasonIds },
    include: [{ model: Movie, include: [{ model: Genre, through: { attributes: [] } }] }]
  });
};
// Top rated: điểm rating trung bình cao nhất
exports.getTopRatedSeasons = async () => {
  const ratings = await Rating.findAll({
    attributes: [
      'seasonId',
      [sequelize.fn('AVG', sequelize.col('rating')), 'avgRating']
    ],
    group: ['seasonId'],
    order: [[sequelize.literal('avgRating'), 'DESC']],
    limit: 10,
    raw: true
  });

  const seasonIds = ratings.map(r => r.seasonId);
  return await Season.findAll({
    where: { id: seasonIds },
    include: [{ model: Movie, include: [{ model: Genre, through: { attributes: [] } }] }]
  });
};

// Upcoming: status = 'upcoming'
exports.getUpcomingSeasons = async () => {
  return await Season.findAll({
    where: { status: 'upcoming' },
    order: [['release_date', 'ASC']],
    include: [{ model: Movie }]
  });
};

// Now playing: status = 'ongoing'
exports.getNowPlayingSeasons = async () => {
  return await Season.findAll({
    where: { status: 'ongoing' },
    order: [['release_date', 'DESC']],
    include: [{ model: Movie }]
  });
};

// By genre
exports.getSeasonsByGenre = async (genreId) => {
  return await Season.findAll({
    include: [
      {
        model: Movie,
        required: true,
        include: [
          {
            model: Genre,
            where: { id: genreId },
            through: { attributes: [] },
            required: true
          }
        ]
      }
    ]
  });
};

// Search by title
exports.searchSeasons = async (query) => {
  return await Season.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${query}%` } },
        { '$Movie.title$': { [Op.like]: `%${query}%` } }
      ]
    },
    include: [{
      model: Movie
    }]
  });
};

// By type (movie/series)
exports.getSeasonsByType = async (type) => {
  return await Season.findAll({
    include: [{
      model: Movie,
      where: { type }
    }]
  });
};