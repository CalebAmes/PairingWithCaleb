const express = require("express");
const routes = require("./routes.js");

const app = express();

app.set("view engine", "pug");

app.use(routes);

module.exports = app;
