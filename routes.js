const express = require("express");
const router = express.Router();
const { fetchFreeGames } = require("./fetch");

router.use(express.json());
router.use(express.urlencoded());

router.get("/", function (req, res) {
  res.json({ msg: "BoredGamer Api" });
});

router.get("/games/", async function (req, res) {
  try {
    if (!req.query.platform || !req.query.genre) {
      return res.send({
        msg: "Invalid params!",
      });
    }

    let mappedArray = [];
    let platform = req.query.platform;
    let genre = req.query.genre;

    let data = await fetchFreeGames();

    // Based on platform
    if (genre === "All") {
      data.map((game) => {
        if (game.platform === platform) {
          mappedArray.push(game);
        }
      });
      return res.send({ msg: "Success", data: mappedArray });
    }
    // Based on platform and genre
    else {
      data.map((game) => {
        if (game.genre === genre && game.platform === platform) {
          mappedArray.push(game);
        }
      });
      res.send({ msg: "Success", data: mappedArray });
    }
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
