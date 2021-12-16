const express = require("express");
const router = express.Router();
const database = require("../database");
const app = express();
const { v4: uuidv4 } = require("uuid");
app.use(express.json());

router.post("/create", (req, res) => {
  const {
    fname,
    lname,
    streetno,
    streetname,
    streettype,
    city,
    province,
    username,
    password,
  } = req.body;

  if (
    fname &&
    lname &&
    streetno &&
    streetname &&
    streettype &&
    city &&
    province &&
    username &&
    password
  ) {
    try {
      database

        .promise()
        .query(
          `INSERT INTO customerInfo VALUES('${fname}',' ${lname}','${streetno} ','${streetname}','${streettype}','${city}','${province}','${username}','${password}', '${uuidv4()}' )`
        );

      res.status(201).send({ msg: "success" });
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
  const {
    fname,
    lname,
    streetno,
    streetname,
    streettype,
    city,
    province,
    username,
    password,
  } = req.body;
  if (
    fname &&
    lname &&
    streetno &&
    streetname &&
    streettype &&
    city &&
    province &&
    username &&
    password
  ) {
    try {
      database
        .promise()
        .query(
          `UPDATE customerInfo SET fname = '${fname}', lname = '${lname}',streetno = '${streetno}', streettype = '${streettype}', city = '${city}', province= '${province}', username = '${username}', password = '${password}' WHERE uuid = ${req.params.id}`
        );

      res.status(201).send({ msg: "sucessful" });
    } catch (err) {
      console.log(err);
    }
  }
});

module.exports = router;
