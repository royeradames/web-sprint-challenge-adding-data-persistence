const db = require('../data/db-config.js');

module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks
}

// adding resources.
function addResource(newResource) {
    /* http://knexjs.org/#Builder-insert
       insert into resources (description)
        values ('conference room A1')
        ;
    */
    return db('resources')
        .insert({description:newResource})
}

// retrieving a list of resources.
function getResources () {
    return db('resources')
}
/*
    adding projects.
    retrieving a list of projects.
    adding tasks.
    retrieving a list of tasks. The list of tasks should include the project name and project description.
*/