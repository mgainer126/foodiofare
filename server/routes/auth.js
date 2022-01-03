const express = require("express");
const router = express.Router();
const app = express();
const { v4: uuidv4 } = require("uuid");
app.use(express.json());

router.get("/request", (req, res) => {
  res.send({
    token: uuidv4(),
  });
});

module.exports = router;
