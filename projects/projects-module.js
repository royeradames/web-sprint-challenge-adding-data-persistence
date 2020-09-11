const db = require('../data/db-config.js');

module.exports = {
    addProject,
    getProjects,
}

// adding projects.
function addProject(newProject) {
    /* http://knexjs.org/#Builder-insert
       insert into projects (project_name)
        values ('web-sprint-challenge-adding-data-persistence')
        ;
    */
   console.log(newProject)
    return db('projects')
        .insert(newProject)
}

//retrieving a list of projects.
function getProjects() {
    return db('projects')
}
