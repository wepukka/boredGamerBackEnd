module.exports = {
  mapGames(query, data) {
    if (!query.platform || !query.genre) {
      return { msg: "Invalid params" };
    }

    const arr = [];

    if (query.genre === "All") {
      data.map((game) => {
        if (game.platform === query.platform) {
          arr.push(game);
        }
      });
      return { data: arr };
    } else {
      data.map((game) => {
        if (game.genre === query.genre && game.platform === query.platform) {
          arr.push(game);
        }
      });
      return { data: arr };
    }
  },
};
