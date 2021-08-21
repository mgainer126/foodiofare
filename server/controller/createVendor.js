const VendorService = require("../service/vendor");

class VendorController {
  async createVendor(req, res) {
    try {
      const id = await VendorService.createVendor(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new VendorController();
