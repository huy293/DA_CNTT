const service = require("../services/season.Service");
const { Season, Movie, Genre, MovieGenre, Comment, User } = require('../models');
const { Op } = require("sequelize");
const { Log } = require("../models");

exports.createSeason = async (req, res) => {
  try {
    const { movieId } = req.params;
    const season = await service.createSeason(movieId, req.body);

    // Ghi log nếu là admin
    if (req.user && req.user.role === 'admin') {
      await Log.create({
        userId: req.user.id,
        action: `Admin tạo season mới cho movie ${movieId}: ${JSON.stringify(req.body)}`,
        time: new Date()
      });
    }

    res.status(201).json(season);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.updateSeason = async (req, res) => {
  try {
    const season = await service.updateSeason(req.params.id, req.body);
    if (!season) return res.status(404).json({ error: "Not found" });

    // Ghi log nếu là admin
    if (req.user && req.user.role === 'admin') {
      await Log.create({
        userId: req.user.id,
        action: `Admin cập nhật season ${req.params.id}: ${JSON.stringify(req.body)}`,
        time: new Date()
      });
    }

    res.json(season);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.deleteSeason = async (req, res) => {
  try {
    const result = await service.deleteSeason(req.params.id);
    if (!result) return res.status(404).json({ error: "Not found" });

    // Ghi log nếu là admin
    if (req.user && req.user.role === 'admin') {
      await Log.create({
        userId: req.user.id,
        action: `Admin xóa season ${req.params.id}`,
        time: new Date()
      });
    }

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.getSeasonsByMovie = async (req, res) => {
  try {
    const { movieId } = req.params;
    const seasons = await service.getSeasonsByMovie(movieId);
    res.json(seasons);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSeasonById = async (req, res) => {
  try {
    console.log('Getting season by ID:', req.params.id);
    const season = await service.getSeasonById(req.params.id);
    if (!season) return res.status(404).json({ error: "Not found" });
    res.json(season);
  } catch (error) {
    console.error('Error in getSeasonById controller:', error);
    res.status(400).json({ error: error.message });
  }
};




exports.getTrendingSeasons = async (req, res) => {
  try {
    const data = await service.getTrendingSeasons();
    res.json(data);
  } catch (error) {
    console.error("Error in getTrendingSeasons:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.getPopularSeasons = async (req, res) => {
  try {
    const seasons = await service.getPopularSeasons();
    res.json(seasons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTopRatedSeasons = async (req, res) => {
  try {
    const data = await service.getTopRatedSeasons();
    res.json(data);
  } catch (error) {
    console.error("Error in getTopRatedSeasons:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.getUpcomingSeasons = async (req, res) => {
  try {
    const seasons = await service.getUpcomingSeasons();
    res.json(seasons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getNowPlayingSeasons = async (req, res) => {
  try {
    const seasons = await service.getNowPlayingSeasons();
    res.json(seasons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSeasonsByGenre = async (req, res) => {
  try {
    const genreId = req.params.genreId;
    const data = await service.getSeasonsByGenre(genreId);
    res.json(data);
  } catch (error) {
    console.error("Error in getSeasonsByGenre:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.searchSeasons = async (req, res) => {
  try {
    const { query } = req.query;
    const seasons = await service.searchSeasons(query);
    res.json(seasons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSeasonsByType = async (req, res) => {
  try {
    const { type } = req.query;
    const seasons = await service.getSeasonsByType(type);
    res.json(seasons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSeasonComments = async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await service.getSeasonComments(id);
    res.json(comments);
  } catch (error) {
    console.error('Error in getSeasonComments:', error);
    res.status(500).json({ 
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

exports.getRelatedSeasons = async (req, res) => {
  try {
    const { id } = req.params;
    const relatedSeasons = await service.getRelatedSeasons(id);
    if (!relatedSeasons) {
      return res.status(404).json({ message: 'Season not found' });
    }
    res.json(relatedSeasons);
  } catch (error) {
    console.error('Error in getRelatedSeasons:', error);
    res.status(500).json({ message: error.message });
  }
};
