const express = require("express");
const router = express.Router();
const episodeController = require("../controllers/episode.Controller");
const authMiddleware = require("../middleware/authMiddleware");

// Admin only routes - cần đăng nhập và phải là admin
router.post("/", authMiddleware.protect("admin"), episodeController.createEpisode);
router.put("/:id", authMiddleware.protect("admin"), episodeController.updateEpisode);
router.delete("/:id", authMiddleware.protect("admin"), episodeController.deleteEpisode);
router.post('/upload', authMiddleware.protect("admin"), episodeController.uploadVideo);

// Public routes - có thể truy cập mà không cần đăng nhập
router.get("/season/:seasonId", episodeController.getEpisodesBySeason);
router.get("/:id", episodeController.getEpisodeById);

module.exports = router;