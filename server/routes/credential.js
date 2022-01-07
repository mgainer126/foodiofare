const express = require("express");
const router = express.Router();
const app = express();
require("dotenv").config();
app.use(express.json());

const API = process.env.GOOGLE_API;

router.get("/getcredentials", async (req, res) => {
  const key = API;
  res.status(200).send(key);
});

module.exports = router;
