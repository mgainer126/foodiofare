const express = require("express");
const router = express.Router();
// const videoDetails = require("../data/video-details.json");
// const videos = require("../data/videos.json");
const fs = require("fs");
const path = require("path");
const knex = require("knex")(require("../knexfile").development);

module.exports = router;
