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
function addResource(resource_id) {
    /*
       insert into resources (description)
        values ('conference room A1')
        ;
    */
    
}

/*
    adding resources.
    retrieving a list of resources.
    adding projects.
    retrieving a list of projects.
    adding tasks.
    retrieving a list of tasks. The list of tasks should include the project name and project description.
*/