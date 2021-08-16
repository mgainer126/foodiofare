const express = require("express");
const router = express.Router();
// const videoDetails = require("../data/video-details.json");
// const videos = require("../data/videos.json");
const fs = require("fs");
const path = require("path");
const app = express();
const knex = require("knex")(require("../knexfile").development);
app.use(express.json());

app.get("/knex/users/", (req, res) => {
  knex
    .select("*")
    .from("users")
    .then((users) => {
      res.status(200).json(users);
    });
});

module.exports = router;
