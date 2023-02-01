const express = require("express");
const router = express.Router();
const { fetchFreeGames } = require("./fetch");
const testdata = require("./testdata");

router.use(express.json());
router.use(express.urlencoded());

router.get("/", function (req, res) {
  res.json({ msg: "BoredGamer Api" });
});

router.get("/testi/", async function (req, res) {
  const data = await fetchFreeGames();
  // const freeGames = await fetchFreeGames(params);
  res.send({
    data,
  });
});

module.exports = router;
