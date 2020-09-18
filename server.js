const express = require('express');
const helmet = require('helmet');
const projectsRouter = require('./projects/projects-router')
const resourcesRouter = require('./resources/resources-router')
const tasksRouter = require('./tasks/tasks-router')

const server = express();

server.use(helmet());
server.use(express.json());
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json(err.message)
});

server.use('/projects', projectsRouter)
server.use('/resources', resourcesRouter)
server.use('/tasks', tasksRouter)

server.get('/', (req, res) => {
  
    res.status(200).json({message: `Welcome to the web-sprint-challenge-adding-data-persistence API build by Royer Adames`});
  
});



module.exports = server;
