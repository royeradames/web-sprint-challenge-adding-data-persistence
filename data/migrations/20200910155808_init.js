
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments()
            tbl.string('project_name').notNullable()
            tbl.string('description')
            tbl.integer('project_completed').notNullable().defaultTo(0)
        })
        .createTable('resources', tbl => {
            tbl.increments()
            tbl.string('ingredient_name').notNullable()

        })
        .createTable('tasks', tbl => {
            tbl.increments()
            tbl.text('step', 'mediumtext').notNullable()
            tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes.id')//shorthand
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
            tbl.integer('order').notNullable()
        })
        .createTable('projects_resources', tbl => {
            tbl.increments()

            //foreign key 
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')//links the id of questions table
                .inTable('recipes')//links question table
                .onDelete('RESTRICT')//parent needs to be deleted before this field is delete
                .onUpdate('CASCADE')//if this field is update it, it's updated it on the whole database where it appears
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredients.id')//shorthand
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.float ('quantity').notNullable()

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
