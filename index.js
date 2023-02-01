const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const routes = require("./routes");

app.use(cors());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
