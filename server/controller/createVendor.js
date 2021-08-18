const VendorService = require("../service/vendor");

class VendorController {
  async createVendor(req, res) {
    // https://www.youtube.com/watch?v=wfrn21E2NaU
    try {
      const id = await VendorService.createVendor(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new VendorController();
