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

module.exports = router;