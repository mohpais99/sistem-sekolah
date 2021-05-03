// 20210501153312

exports.up = function(knex) {
    return knex.schema
        .createTable('auths', function(table) {
            table.increments('id');
            table.integer('user_id').unsigned().notNullable();
            table.foreign('user_id').references('id').inTable('users');
            table.string('username').unique().notNullable();
            table.string('password').notNullable();
            table.string('token');
            table.timestamps();
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('auths');
};
