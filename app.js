const express = require("express");
const routes = require("./routes.js");

const app = express();

app.set("view engine", "pug");

app.use(routes);

const port = 8080;
app.listen(port, () => {
  console.log(`app listening on port ${port}...`);
});
