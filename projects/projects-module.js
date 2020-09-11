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
        .insert({ description: newResource })
}

// retrieving a list of resources.
function getResources() {
    return db('resources')
}

// adding projects.
function addProject(newProject) {
    /* http://knexjs.org/#Builder-insert
       insert into projects (project_name)
        values ('web-sprint-challenge-adding-data-persistence')
        ;
    */
    return db('projects')
        .insert({ project_name: newProject })
}

//retrieving a list of projects.
function getProjects() {
    return db('projects')
}
//adding tasks.
function addTask(newTask) {
    /*
        insert into tasks(description, project_id)
        values('Interview Questions', 1)
        ;
    */
    return db('projects')
        .insert({ project_name: newProject })
}
// retrieving a list of tasks. The list of tasks should include the project name and project description.
function getTasks () {
    /*
        select p.project_name, p.description, t.*
        from projects as p
        join tasks as t
            on p.id = t.project_id
        ;
    */
   return db('projects as p')
   .join('tasks as t', 'p.id', 't.project_id')
   .select('p.project_name', 'p.description', 't.*')
}