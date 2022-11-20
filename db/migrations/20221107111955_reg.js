/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('registation_data',table =>{
        table.increments();
        table.string('name').notNullable()
        table.string('email').notNullable().unique();
        table.string('password').notNullable()
        table.integer('age').notNullable()
        table.integer('phone_no').notNullable()
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('registation_data');
};
