const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile").development);

router.get("/vendor", (req, res) => {
  console.log("5");
  knex
    .select()
    .from("vendor_local")
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => res.send("error getting vendor data"));
});

module.exports = router;
