const express = require("express");
// const { userInfo } = require("os");
const router = express.Router();
const knex = require("knex")(require("../knexfile").development);
const VendorController = require("../controller/createVendor");
const db = require("../db/dp");
const app = express();
app.use(express.json());
// const Vendor = require("../models/vendors");

router.get("/vendor", (req, res) => {
  console.log("5");
  knex
    .select()
    .from("foodiofare1.vendorsinfo")
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => res.send("error getting vendor data"));
});

router.post("/vendor", VendorController.createVendor);

router.put("/:id", (req, res) => {
  console.log("5");
  knex
    .select()
    .from("foodiofare1.vendorsinfo")
    .where({ vendorid: req.params.id })
    .update({
      addnum: req.body.addnum,
      streetname: req.body.streetname,
      streettype: req.body.streettype,
      city: req.body.city,
      province: req.body.province,
    })
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => res.send("error getting vendor data"));
});

module.exports = router;
