/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('posts',table =>{
    table.increments();
    table.string('post_title').notNullable();
    table.string('post_massage').notNullable();
    table.integer('likes').notNullable();
    table.integer('dislikes').notNullable();
    table.integer('reg_id').references('id').inTable('registation_data').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('posts')
};
