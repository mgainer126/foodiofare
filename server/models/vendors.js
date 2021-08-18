const bookshelf = require("../bookshelf");

const Vendors = bookshelf.model("Vendors", {
  tableName: "vendors",
  user: function () {
    return this.hasMany("Vendors");
  },
});

module.exports = Vendors;
