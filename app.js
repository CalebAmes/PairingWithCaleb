const express = require("express");
const morgan = require("morgan");
const routes = require("./routes.js");
const cookie_parser = require("cookie-parser");

const app = express();

app.set("view engine", "pug");

app.use(morgan("dev"));
app.use(cookie_parser());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.use((req, res, next) => {
  const err = new Error("The requested page couldn't be found.");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(404);
    res.render("page-not-found", {
      title: "Page Not Found",
    });
  } else {
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = process.env.NODE_ENV === "production";
  res.render("error", {
    title: "Server Error",
    message: isProduction ? null : err.message,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
