const db = require("../db/dp");

class VendorDAO {
  async createVendor(
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
    username
  ) {
    const [id] = await db("vendorsinfo").insert({
      vendorid: vendorid,
      bussname: bussname,
      operatorname: operatorname,
      foodcat: foodcat,
      addnum: addnum,
      streetname: streetname,
      streettype: streettype,
      city: city,
      province: province,
      password: password,
      username: username,
    });
    return id;
  }
}

module.exports = new VendorDAO();
