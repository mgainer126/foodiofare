const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());

router.get("/request", (req, res) => {
  res.send({
    token: "64729577986472957798",
  });
});

module.exports = router;
