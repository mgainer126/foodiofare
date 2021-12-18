const express = require("express");
const router = express.Router();
const database = require("../database");
const app = express();
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
app.use(express.json());

router.post("/create", (req, res) => {
  const { fname, lname, address, username, password } = req.body;

  if (fname && lname && address && username && password) {
    try {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDppxNKV5QddpqA90IuS0kWg9HTLOuJsGw`
        )
        .then((response) => {
          const lat = response.data.results[0].geometry.location.lat;
          const lng = response.data.results[0].geometry.location.lng;
          database
            .promise()
            .query(
              `INSERT INTO customerInfo VALUES('${fname}',' ${lname}','${username}','${password}','${uuidv4()}','${address}', '${lat}', '${lng}' )`
            );

          res.status(201).send({ msg: "success" });
        });
    } catch (err) {
      console.log(err);
    }
  }
});

router.get("/customer", async (req, res) => {
  const results = await database.promise().query("SELECT * FROM customerInfo");
  const custArr = results[0];
  console.log(results[0]);
  res.status(200).send(custArr);
});

router.get("/customer/:uuid", async (req, res) => {
  const results = await database.promise().query("SELECT * FROM customerInfo");
  const custArr = results[0];
  const findUUID = custArr.filter((uuid) => req.params.uuid === uuid.uuid);
  console.log(findUUID);
  res.status(200).send(findUUID);
});

router.get("/customer/:email/:password", async (req, res) => {
  const results = await database.promise().query("SELECT * FROM customerInfo");
  const custArr = results[0];
  const findUser = custArr.filter((cust) => req.params.email === cust.username);
  console.log(findUser);
  const verifyPassword = findUser.filter(
    (password) => req.params.password === password.password
  );

  res.status(200).send(verifyPassword);
});

router.put("/:id", (req, res) => {
  console.log(req.body);
  const { fname, lname, address, username, password } = req.body;
  if (fname && lname && address && username && password) {
    try {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDppxNKV5QddpqA90IuS0kWg9HTLOuJsGw`
        )
        .then((response) => {
          const lat = response.data.results[0].geometry.location.lat;
          const lng = response.data.results[0].geometry.location.lng;
          database
            .promise()
            .query(
              `UPDATE customerInfo SET fname = '${fname}', lname = '${lname}', address = '${address}', username = '${username}', password = '${password}', lat = '${lat}', lng = '${lng}' WHERE uuid = ${req.params.id}`
            );

          res.status(201).send({ msg: "success" });
        });
    } catch (err) {
      console.log(err);
    }
  }
});

module.exports = router;
