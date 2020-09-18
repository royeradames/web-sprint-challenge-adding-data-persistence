
exports.up = function (knex) {
    console.log('in making tasks_resources function')
    return knex.schema
        .createTable('tasks_resources', function (table) {
            table.increments();
            table.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resources.id')//shorthand
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            table.integer('task_id')
                .unsigned()
                .notNullable()
                .references('tasks.id')//shorthand
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            table.string('date')

        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('tasks_resources')
};
