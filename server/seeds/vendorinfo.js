exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("vendors")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("vendors").insert([
        {
          vendorid: 1,
          vendorname: "The Beach Chip Truck",
          operatorname: "Billy Bob",
          foodcategory: "Fries",
          streetno: "590",
          streetname: "Liverpool",
          streettype: "Road",
          city: "Pickering",
          province: "Ontario",
        },
        {
          vendorid: 2,
          vendorname: "Chewies Grill",
          operatorname: "Fancy Nancy",
          foodcategory: "Greek",
          streetno: "980",
          streetname: "Brock",
          streettype: "Road",
          city: "Pickering",
          province: "Ontario",
        },
        {
          vendorid: 3,
          vendorname: "Fantastic Funnel Cakes",
          operatorname: "Martha Stewart",
          foodcategory: "Dessert",
          streetno: "1814",
          streetname: "Eastbank",
          streettype: "Road",
          city: "Pickering",
          province: "Ontario",
        },
        {
          vendorid: 4,
          vendorname: "Softie Inc",
          operatorname: "Sally Gal",
          foodcategory: "Ice Cream",
          streetno: "24",
          streetname: "Southampton",
          streettype: "Drive",
          city: "Scarborough",
          province: "Ontario",
        },
        {
          vendorid: 5,
          vendorname: "Pemento Jerk Food Truck",
          operatorname: "Robby Bobby",
          foodcategory: "Jamacian",
          streetno: "570",
          streetname: "Kingston",
          streettype: "Road",
          city: "Pickerkng",
          province: "Ontario",
        },
        {
          vendorid: 6,
          vendorname: "Sals Treat Mobile",
          operatorname: "Sal John",
          foodcategory: "Icecream",
          streetno: "155",
          streetname: "Antibes",
          streettype: "Dr",
          city: "Toronto",
          province: "Ontario",
        },
      ]);
    });
};

// table.uuid("vendorid").primary();
// table.string("vendorname").notNullable();
// table.string("operatorname").notNullable();
// table.string("foodcategory").notNullable();
// table.string("streetno").notNullable();
// table.string("streetname").notNullable();
// table.string("streettype").notNullable();
// table.string("city").notNullable();
// table.string("province").notNullable();
