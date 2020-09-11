const express = require('express');
const helmet = require('helmet');
const projectsRouter = require('./projects/projects-router')

const server = express();

server.use(helmet());
server.use(express.json());
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json(err.message)
});

server.use('/projects', projectsRouter)

server.get('/', (req, res) => {
  
    res.status(200).json({message: `Welcome to the API build by Royer Adames`});
  
});



module.exports = server;
