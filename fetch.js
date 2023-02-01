require("dotenv").config();
const axios = require("axios");

module.exports = {
  async fetchFreeGames() {
    try {
      const response = await axios({
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        headers: {
          "X-RapidAPI-Key": process.env.FREE_TO_GAME_API_KEY,
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
};
