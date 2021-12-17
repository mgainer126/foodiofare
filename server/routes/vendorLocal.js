const express = require("express");
const router = express.Router();
const database = require("../database");
const app = express();
app.use(express.json());
const axios = require("axios");

router.get("/vendor", async (req, res) => {
  const results = await database.promise().query("SELECT * FROM vendorsinfo");
  // console.log(results[0]);
  res.status(200).send(results[0]);
});

router.get("/vendor/:username/:password/", async (req, res) => {
  const results = await database.promise().query("SELECT * FROM vendorsinfo");
  const vendorArr = results[0];
  const username = req.params.username;

  const findVendorUser = vendorArr.filter(
    (vendor) => vendor.username === username
  );
  const pssword = req.params.password;
  const verifyPassword = findVendorUser.filter(
    (password) => password.password === pssword
  );
  res.status(200).send(verifyPassword);
});

router.post("/vendor", (req, res) => {
  console.log(req.body);
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
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${addnum}+${streetname}+${streettype},
    +${city},+${province}&key=AIzaSyDppxNKV5QddpqA90IuS0kWg9HTLOuJsGw`
        )
        .then((response) => {
          const lat = response.data.results[0].geometry.location.lat;
          const lng = response.data.results[0].geometry.location.lng;
          database
            .promise()
            .query(
              `INSERT INTO VENDORSINFO VALUES ('${vendorid}','${bussname}','${operatorname}','${foodcat}','${addnum}','${streetname}','${streettype}','${city}','${province}','${password}','${username}', '${lat}', '${lng}')`
            );

          res.status(201).send({ msg: "success" });
        });
    } catch (err) {
      console.log(err);
    }
  }
});

router.put("/update/:id", (req, res) => {
  const { addnum, streetname, streettype, city, province } = req.body;
  if (addnum && streetname && streettype && city && province) {
    try {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${addnum}+${streetname}+${streettype},
  +${city},+${province}&key=AIzaSyDppxNKV5QddpqA90IuS0kWg9HTLOuJsGw`
        )
        .then((response) => {
          const lat = response.data.results[0].geometry.location.lat;
          const lng = response.data.results[0].geometry.location.lng;
          database
            .promise()
            .query(
              `UPDATE vendorsinfo SET addnum = '${addnum}', streetname = '${streetname}', streettype = '${streettype}', city = '${city}', province = '${province}', lat = '${lat}', lng = '${lng}' WHERE vendorid = '${req.params.id}'`
            );

          res.status(201).send({ msg: "sucessful" });
        });
    } catch (err) {
      console.log(err);
    }
  }
});

module.exports = router;
