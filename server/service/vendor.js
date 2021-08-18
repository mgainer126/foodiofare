const vendorDAO = require("../dao/vendor");

class VendorService {
  createVendor(vendorDTO) {
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
    } = vendorDTO;

    return vendorDAO.createVendor(
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
    );
  }
}
module.exports = new VendorService();
