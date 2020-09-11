const db = require('../data/db-config.js');

module.exports = {
    addProject,
    getProjects,
    getProjectTasks,
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

//  Add an endpoint to get a list of project tasks.
function getProjectTasks (projectId) {
    /*
        select *
        from projects as p
        join tasks as t
            on t.project_id = p.id
        where p.id = 1
        ;
    */
    return db('projects as p')
    .join('tasks as t', 't.project_id', 'p.id')
    .where('p.id', projectId)

}