const express = require("express");
const router = express.Router();
const { fetchFreeGames } = require("./fetch");
const { filterGames } = require("./helpers");

router.use(express.json());
router.use(express.urlencoded());

router.get("/", function (req, res) {
  res.json({ msg: "BoredGamer Api" });
});

router.get("/games/", async function (req, res) {
  try {
    let data = await fetchFreeGames();
    let games = filterGames(req.query, data);

    res.send(games);
  } catch (err) {
    console.log(err);
  }
});

router.get("/genres/", async function (req, res) {
  try {
    let data = await fetchFreeGames();
    let genreArray = [];

    data.map((data) => {
      if (!genreArray.includes(data.genre)) {
        genreArray.push(data.genre);
      }
    });
    res.send({
      genres: genreArray,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
