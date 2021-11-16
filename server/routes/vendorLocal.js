const express = require("express");
// const { userInfo } = require("os");
const router = express.Router();
// const knex = require("knex")(require("../knexfile").development);
// const VendorController = require("../controller/createVendor");
const database = require("../database");
// const VendorService = require("../service/vendor");
const app = express();
app.use(express.json());
// const Vendor = require("../models/vendors");

router.get("/vendor", async (req, res) => {
  const results = await database.promise().query("SELECT * FROM vendorsinfo");
  console.log(results[0]);
  res.status(200).send(results[0]);
});

router.post("/vendor", (req, res) => {
  const {
    vendorid,
    bussname,
    operatorname,
    foodcat,
    addnum,
    streetname,
    streettype,
    city,
    province,
    password,
    username,
  } = req.body;
  if (
    vendorid &&
    bussname &&
    operatorname &&
    foodcat &&
    addnum &&
    streetname &&
    streettype &&
    city &&
    province &&
    password &&
    username
  ) {
    try {
      database
        .promise()
        .query(
          `INSERT INTO vendorsinfo VALUES('${vendorid}',' ${bussname}','${operatorname} ','${foodcat}','${addnum}','${streetname}','${streettype}','${city}','${province}','${password}','${username}')`
        );
      res.status(201).send({ msg: "success" });
    } catch (err) {
      console.log(err);
    }
  }
});

// router.put("/:id", (req, res) => {
//   console.log("5");
//   knex
//     .select()
//     .from("foodiofare1.vendorsinfo")
//     .where({ vendorid: req.params.id })
//     .update({
//       addnum: req.body.addnum,
//       streetname: req.body.streetname,
//       streettype: req.body.streettype,
//       city: req.body.city,
//       province: req.body.province,
//     })
//     .then((data) => {
//       console.log(data);
//       res.status(200).json(data);
//     })
//     .catch((err) => res.send("error getting vendor data"));
// });

module.exports = router;
