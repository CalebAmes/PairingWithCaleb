const express = require("express");

const db = require("./db/models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const books = await db.Book.findAll({ order: [["title", "ASC"]] });
    res.render("index", { title: "Home", books });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
