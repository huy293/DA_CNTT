// server.js
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const db = require("./models");

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost', // hoặc '*' nếu muốn cho tất cả
  credentials: true           // nếu dùng cookie, session
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Static files should be configured before routes
app.use('/videos', express.static('uploads/videos'));
app.use('/uploads', express.static('uploads'));

app.get("/", (req, res) => res.send("Server is running..."));

const PORT = process.env.PORT || 3000;

// Function to setup routes
const setupRoutes = () => {
    // Dynamically require routes only when DB is ready
    const authRoutes = require("./routes/authRoutes");
    const movieRoutes = require("./routes/movie.routes");
    const userRoutes = require("./routes/user.routes");
    const genreRoutes = require("./routes/genre.routes");
    const peopleRoutes = require("./routes/people1.routes");
    const ratingRoutes = require("./routes/rating.routes");
    const favoriteRoutes = require("./routes/favorite.routes");
    const commentRoutes = require("./routes/comment.routes");
    const watchHistoryRoutes = require("./routes/watch_history.routes");
    const movieGenreRoutes = require("./routes/movie_genre.routes");
    const movieCastRoutes = require("./routes/movieActor.routes");
    const movieCrewRoutes = require("./routes/movieCrew.routes");
    const seasonRoutes = require("./routes/season.routes");
    const episodeRoutes = require("./routes/episode.routes");
    const dashboardRoutes = require("./routes/dashboard.routes");
    const editorsPickListRoutes = require("./routes/editorsPickList.routes");

    app.use("/api/auth", authRoutes);
    app.use("/api/movies", movieRoutes);
    app.use("/api/user", userRoutes);
    app.use("/api/genre", genreRoutes);
    app.use("/api/people", peopleRoutes);
    app.use("/api/rating", ratingRoutes);
    app.use("/api/favorite", favoriteRoutes);
    app.use("/api/comment", commentRoutes);
    app.use("/api/watch-history", watchHistoryRoutes);
    app.use("/api/movie-genre", movieGenreRoutes);
    app.use("/api/movie-cast", movieCastRoutes);
    app.use("/api/movie-crew", movieCrewRoutes);
    app.use("/api/season", seasonRoutes);
    app.use("/api/episode", episodeRoutes);
    app.use("/api/dashboard", dashboardRoutes);
    app.use("/api/editors-pick-list", editorsPickListRoutes);

    // General error handler should be last
    app.use((err, req, res, next) => {
      console.error("GLOBAL ERROR HANDLER:", err.stack);
      res.status(500).json({ 
        status: 'error',
        message: 'Something went very wrong!',
        error: err.message 
      });
    });
};

// Start server only after DB connection is successful
db.sequelize.sync({ force: false }) // Use force: false in prod
  .then(() => {
    console.log('Database connected and synced successfully.');
    setupRoutes(); // Setup routes now
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch(err => {
    console.error('CRITICAL: Unable to connect to the database:', err);
    process.exit(1); // Exit process if DB connection fails
  });
