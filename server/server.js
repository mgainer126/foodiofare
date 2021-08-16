const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const vendorLocations = require("./routes/vendorLocal");

app.use(cors());

app.use(express.json());

//This below makes the pages in the public folder accessabile
//by the browser. In this example there is a HTML document
//that when you put localhost:8080 the html website serves up
app.use(express.static("public"));

app.use((req, _res, next) => {
  console.log("Request:");
  console.log("- Path:", req.path);
  console.log("- Time:", new Date());
  next();
});

app.use("/", vendorLocations);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
