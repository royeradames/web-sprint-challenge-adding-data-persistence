const db = require('../data/db-config.js');

module.exports = {
    addTask,
    getTasks
    
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

