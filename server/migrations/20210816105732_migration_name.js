exports.up = function (knex) {
  return knex.schema.createTable("vendors", function (table) {
    table.uuid("vendorid").primary();
    table.string("vendorname").notNullable();
    table.string("operatorname").notNullable();
    table.string("foodcategory").notNullable();
    table.string("streetno").notNullable();
    table.string("streetname").notNullable();
    table.string("streettype").notNullable();
    table.string("city").notNullable();
    table.string("province").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("vendors");
};
