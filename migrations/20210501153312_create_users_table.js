
exports.up = function(knex) {
    return knex.schema
        .createTable('users', function(table) {
            table.increments('id');
            table.string('role').notNullable();
            table.integer('no_induk').unique().notNullable();
            table.string('name').notNullable();
            table.string('sex');
            table.string('pod');
            table.string('bod');
            table.string('religion');
            table.text('address');
            table.timestamps();
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable("siswas");
};
