const express = require("express");
const router = express.Router();
const episodeController = require("../controllers/episode.Controller");
const authMiddleware = require("../middleware/authMiddleware");
const { checkPermission } = require("../middleware/permissionMiddleware");

// Admin & Moderator routes
router.post("/", authMiddleware.protect(), authMiddleware.restrictTo("admin", "moderator"), episodeController.createEpisode);
router.put("/:id", authMiddleware.protect(), authMiddleware.restrictTo("admin", "moderator"), episodeController.updateEpisode);
router.delete(
    "/:id", 
    authMiddleware.protect(), 
    authMiddleware.restrictTo("admin", "moderator"), 
    checkPermission('canManageMovies'), 
    episodeController.deleteEpisode
);
router.post('/upload', authMiddleware.protect(), authMiddleware.restrictTo("admin", "moderator"), episodeController.uploadVideo);

// Public routes - có thể truy cập mà không cần đăng nhập
router.get("/season/:seasonId", episodeController.getEpisodesBySeason);
router.get("/:id", episodeController.getEpisodeById);

module.exports = router;