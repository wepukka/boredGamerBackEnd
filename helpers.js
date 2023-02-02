module.exports = {
  filterGames(query, data) {
    if (!query.platform || !query.genre) {
      return { msg: "Invalid params" };
    }

    if (query.genre === "All") {
      let result = data.filter((data) => data.platform === query.platform);
      return { data: result };
    } else {
      let result = data.filter(
        (data) => data.platform === query.platform && data.genre === query.genre
      );
      return { data: result };
    }
  },
};
