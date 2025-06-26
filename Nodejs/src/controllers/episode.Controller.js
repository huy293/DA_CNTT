const episodeService = require("../services/episode.Service");
const { Log, Episode, Season } = require("../models");
const multer = require('multer');
const path = require('path');
const { processVideo, createHLSStream } = require('../services/videoService');
const fs = require("fs");

// Configure multer for video upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, "../../uploads/videos");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /mp4|mkv|avi/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error("Error: Videos Only!"));
  },
});

const createEpisode = async (req, res) => {
  // Nếu là external, không cần upload file
  if (req.headers['content-type'] && req.headers['content-type'].includes('application/json')) {
    try {
      const { seasonId, episode_number, title, overview, runtime, release_date, video_url } = req.body;
      if (!video_url) {
        return res.status(400).json({ error: "No video URL provided" });
      }
      const episode = await Episode.create({
        seasonId,
        episode_number,
        title,
        overview: overview || "",
        runtime,
        release_date,
        video_url,
        video_type: 'external',
      });
      return res.status(201).json({
        success: true,
        message: "Episode created successfully",
        data: episode,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Nếu là multipart/form-data (upload HLS)
  upload.single("video")(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    // Lúc này req.body đã được parse!
    const { seasonId, episode_number, title, overview = "", runtime, release_date, video_type } = req.body;
    const videoFile = req.file;

    if (video_type === 'external') {
      // Trường hợp này không nên xảy ra, nhưng có thể xử lý nếu muốn
      return res.status(400).json({ error: "Không hỗ trợ gửi external bằng multipart/form-data" });
    }

    if (!videoFile) {
      return res.status(400).json({ error: "No video file uploaded" });
    }

    // Process video and create HLS stream
    const uploadDir = path.join(__dirname, "../../uploads/videos");
    try {
      const { hlsPath } = await createHLSStream(
        videoFile.path,
        uploadDir,
        videoFile.filename
      );

      // Create episode record in database
      const episode = await Episode.create({
        seasonId,
        episode_number,
        title,
        overview,
        runtime,
        release_date,
        video_url: hlsPath,
        video_type: 'hls',
      });

      res.status(201).json({
        success: true,
        message: "Episode created successfully",
        data: episode,
      });
    } catch (error) {
      // Clean up uploaded file if processing fails
      if (fs.existsSync(videoFile.path)) {
        fs.unlinkSync(videoFile.path);
      }
      console.error("Error during episode creation process:", error);
      // Send an error response instead of throwing
      return res.status(500).json({ 
        error: "An error occurred while creating the episode.",
        details: error.message 
      });
    }
  });
};

const updateEpisode = async (req, res) => {
  try {
    const updated = await episodeService.updateEpisode(req.params.id, req.body);

    // Ghi log nếu là admin
    if (req.user && req.user.role === 'admin') {
      await Log.create({
        userId: req.user.id,
        action: `Admin cập nhật episode ${req.params.id}: ${JSON.stringify(req.body)}`,
        time: new Date()
      });
    }

    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteEpisode = async (req, res) => {
  try {
    await episodeService.deleteEpisode(req.params.id);

    // Ghi log nếu là admin
    if (req.user && req.user.role === 'admin') {
      await Log.create({
        userId: req.user.id,
        action: `Admin xóa episode ${req.params.id}`,
        time: new Date()
      });
    }

    res.json({ message: "Episode deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEpisodesBySeason = async (req, res) => {
  try {
    const episodes = await episodeService.getEpisodesBySeason(req.params.seasonId);
    res.json(episodes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEpisodeById = async (req, res) => {
  try {
    const episode = await episodeService.getEpisodeById(req.params.id);
    if (!episode) return res.status(404).json({ error: "Not found" });
    res.json(episode);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const uploadVideo = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'Vui lòng chọn file video' });
    }

    try {
      const result = await processVideo(
        req.file.path,
        'uploads/videos',
        req.file.filename
      );

      res.json({
        success: true,
        data: result
      });
    } catch (error) {
      console.error('Error processing video:', error);
      res.status(500).json({ error: 'Lỗi khi xử lý video' });
    }
  });
};

module.exports = {
  createEpisode,
  updateEpisode,
  deleteEpisode,
  getEpisodesBySeason,
  getEpisodeById,
  uploadVideo
};