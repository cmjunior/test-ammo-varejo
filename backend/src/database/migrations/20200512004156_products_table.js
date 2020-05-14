
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table){
            table.string('id').primary();
            table.string('description').notNullable();
            table.string('details').notNullable();
            table.string('valueFrom').notNullable();
            table.string('valueTo').notNullable();
            table.string('pictures').notNullable();
    });
}

exports.down = function(knex) {
    return knex.schema.dropTable('products');
};