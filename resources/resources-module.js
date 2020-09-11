const db = require('../data/db-config.js');

module.exports = {
    addResource,
    getResources,
    
}

// adding resources.
function addResource(newResource) {
    /* http://knexjs.org/#Builder-insert
       insert into resources (description)
        values ('conference room A1')
        ;
    */
    return db('resources')
        .insert(newResource)
}

// retrieving a list of resources.
function getResources() {
    return db('resources')
}

