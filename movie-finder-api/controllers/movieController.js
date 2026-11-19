const axios = require("axios");

const OMDB_URL = "https://www.omdbapi.com/";
const API_KEY = process.env.OMDB_API_KEY;

const searchMovies = async (req, res) => {
  const { title } = req.query;

  if (typeof title !== "string" || !title.trim()) {
    return res.status(400).json({
      error: "Title query parameter is required",
    });
  }

  try {
    const response = await axios.get(OMDB_URL, {
      params: {
        s: title.trim(),
        apikey: API_KEY,
      },
    });

    if (response.data.Response === "False") {
      return res.status(404).json({
        error: response.data.Error,
      });
    }

    return res.json(response.data.Search);
  } catch (error) {
    console.error("Error searching movies:", error.message);
    return res.status(500).json({
      error: "Failed to search movies",
    });
  }
};

const getMovieDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(OMDB_URL, {
      params: {
        i: id,
        apikey: API_KEY,
      },
    });

    if (response.data.Response === "False") {
      return res.status(404).json({
        error: response.data.Error,
      });
    }

    return res.json(response.data);
  } catch (error) {
    console.error("Error fetching movie:", error.message);
    return res.status(500).json({
      error: "Failed to fetch movie details",
    });
  }
};

module.exports = {
  searchMovies,
  getMovieDetails,
};
