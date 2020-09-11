
exports.up = function (knex) {
    knex.schema.createTable('users', function (table) {
        table.increments();
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resources.id')//shorthand
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.integer('task_id')
            .unsigned()
            .notNullable()
            .references('tasks.id')//shorthand
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('projects_resources')
};
