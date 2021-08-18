const express = require("express");
// const { userInfo } = require("os");
const router = express.Router();
const knex = require("knex")(require("../knexfile").development);
const VendorController = require("../controller/createVendor");
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

// app.post("/vendor", (req, res) => {
//   console.log(req.body);
//   new Vendor({ ...req.body, vendorid: Math.floor(Math.random() * 10000) })
//     //important to make it save.
//     .save(null, { method: "insert" })
//     .then((newVendor) => {
//       res.status(201).json(newVendor);
//     })
//     .catch((error) =>
//       res.status(400).json({ error: `Error creating user ${req.body}` })
//     );
// });

router.post("/vendor", VendorController.createVendor);

module.exports = router;
