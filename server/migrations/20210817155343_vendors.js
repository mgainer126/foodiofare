exports.up = function (knex) {
  return knex.schema.createTable("vendorsinfo", function (table) {
    table.uuid("vendorid").primary();
    table.string("bussname").notNullable();
    table.string("operatorname").notNullable();
    table.string("foodcat").notNullable();
    table.string("addnum").notNullable();
    table.string("streetname").notNullable();
    table.string("streettype").notNullable();
    table.string("city").notNullable();
    table.string("province").notNullable();
    table.string("password").notNullable();
    table.string("username").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("vendorsinfo");
};
