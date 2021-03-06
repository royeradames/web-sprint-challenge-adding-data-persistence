//finish

exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments()
            tbl.string('project_name').notNullable()
            tbl.string('description')
            tbl.boolean('project_completed').notNullable().defaultTo('false')
        })
        .createTable('resources', tbl => {
            tbl.increments()
            tbl.text('description').notNullable()
        })
        .createTable('tasks', tbl => {
            tbl.increments()
            tbl.string('description').notNullable()
            tbl.text('notes')
            tbl.boolean('task_completed').notNullable().defaultTo('false')
            tbl.string('project_id')
                .notNullable()
                .unsigned()
                .references('projects.id')//shorthand
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('projects_resources', tbl => {
            tbl.increments()

            //foreign key 
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')//links the id of questions table
                .inTable('projects')//links question table
                .onDelete('RESTRICT')//parent needs to be deleted before this field is delete
                .onUpdate('CASCADE')//if this field is update it, it's updated it on the whole database where it appears
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resources.id')//shorthand
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

        })
}

// drop tables in the opposite way they where added
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
} 
