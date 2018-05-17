
exports.up = function(knex, Promise) {
  return knex.schema.table('inventory', function(table) {
    table.boolean('staff_pick').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('inventory', function(table) {
    table.dropColumn('staff_pick');
  });
};
