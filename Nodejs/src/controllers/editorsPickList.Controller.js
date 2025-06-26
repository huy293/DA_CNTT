const { EditorsPickList, Movie, Season } = require('../models');

// Lấy tất cả editors pick lists
exports.getAll = async (req, res) => {
  try {
    const lists = await EditorsPickList.findAll({ order: [['id', 'ASC']] });
    res.json(lists);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server' });
  }
};

// Lấy 1 list theo id
exports.getById = async (req, res) => {
  try {
    const list = await EditorsPickList.findByPk(req.params.id);
    if (!list) return res.status(404).json({ error: 'Không tìm thấy list' });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server' });
  }
};

// Tạo mới list
exports.create = async (req, res) => {
  try {
    const { title, movieIds, isBanner } = req.body;
    const newList = await EditorsPickList.create({ title, movieIds, isBanner });
    res.status(201).json(newList);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server' });
  }
};

// Cập nhật list
exports.update = async (req, res) => {
  try {
    const { title, movieIds, isBanner } = req.body;
    const list = await EditorsPickList.findByPk(req.params.id);
    if (!list) return res.status(404).json({ error: 'Không tìm thấy list' });
    await list.update({ title, movieIds, isBanner });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server' });
  }
};

// Xóa list
exports.remove = async (req, res) => {
  try {
    const list = await EditorsPickList.findByPk(req.params.id);
    if (!list) return res.status(404).json({ error: 'Không tìm thấy list' });
    await list.destroy();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server' });
  }
};

// Lấy seasons theo movieIds từ EditorsPickList
exports.getSeasonsByMovieIds = async (req, res) => {
  try {
    const { movieIds } = req.body;
    if (!movieIds || !Array.isArray(movieIds)) {
      return res.status(400).json({ error: 'movieIds phải là mảng' });
    }

    const seasons = await Season.findAll({
      where: { movieId: movieIds },
      include: [
        {
          model: Movie,
          as: 'Movie',
          include: ['MovieGenres']
        }
      ],
      order: [['id', 'ASC']]
    });

    res.json(seasons);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server' });
  }
};

// Lấy tất cả editors pick lists với seasons
exports.getAllWithSeasons = async (req, res) => {
  try {
    const lists = await EditorsPickList.findAll({ order: [['id', 'ASC']] });
    
    // Lấy tất cả seasons cho tất cả lists
    const allMovieIds = [...new Set(lists.flatMap(list => list.movieIds))];
    const seasons = await Season.findAll({
      where: { movieId: allMovieIds },
      include: [
        {
          model: Movie,
          as: 'Movie',
          include: ['MovieGenres']
        }
      ]
    });

    // Map seasons theo movieId
    const seasonsByMovieId = {};
    seasons.forEach(season => {
      if (!seasonsByMovieId[season.movieId]) {
        seasonsByMovieId[season.movieId] = [];
      }
      seasonsByMovieId[season.movieId].push(season);
    });

    // Thêm seasons vào mỗi list
    const listsWithSeasons = lists.map(list => ({
      ...list.toJSON(),
      seasons: list.movieIds.flatMap(movieId => seasonsByMovieId[movieId] || [])
    }));

    res.json(listsWithSeasons);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server' });
  }
}; 