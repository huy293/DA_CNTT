const movieService = require("../services/movie.Service");
const { Log } = require("../models");
const { Movie } = require("../models");

exports.createMovie = async (req, res) => {
    try {
      const movie = await movieService.create(req.body);

      // Ghi log nếu là admin
      if (req.user && req.user.role === 'admin') {
        await Log.create({
          userId: req.user.id,
          action: `Admin tạo movie mới: ${JSON.stringify(req.body)}`,
          time: new Date()
        });
      }

      res.status(201).json(movie);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};
  

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAll();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await movieService.getById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const movie = await movieService.update(req.params.id, req.body);
    if (!movie) return res.status(404).json({ message: "Movie not found" });

    // Ghi log nếu là admin
    if (req.user && req.user.role === 'admin') {
      await Log.create({
        userId: req.user.id,
        action: `Admin cập nhật movie ${req.params.id}: ${JSON.stringify(req.body)}`,
        time: new Date()
      });
    }

    res.status(200).json({ message: "Movie updated", movie });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const success = await movieService.remove(req.params.id);
    if (!success) return res.status(404).json({ message: "Movie not found" });

    // Ghi log nếu là admin
    if (req.user && req.user.role === 'admin') {
      await Log.create({
        userId: req.user.id,
        action: `Admin xóa movie ${req.params.id}`,
        time: new Date()
      });
    }

    res.status(200).json({ message: "Movie deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllWithGenres = async (req, res) => {
  try {
    const movies = await movieService.GetAllWithGenres();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getEditorsPickMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll({ where: { isEditorsPick: true } });
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách phim Editors Pick' });
  }
};