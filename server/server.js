const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const vendorLocations = require("./routes/vendorLocal");
const customer = require("./routes/customer");

app.use(cors());

app.use(express.json());

app.use(express.static("public"));

app.use((req, _res, next) => {
  console.log("Request:");
  console.log("- Path:", req.path);
  console.log("- Time:", new Date());
  next();
});

app.use("/find", vendorLocations);

app.use("/customer", customer);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log("hello port 8080");
});
