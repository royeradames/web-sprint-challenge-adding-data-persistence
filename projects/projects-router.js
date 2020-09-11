const express = require('express')
const Projects = require('./projects-module')
const router = express.Router()

router.get('/', (req, res, next) => {
    Projects.getProjects()
        .then(projects => {
            if (projects.length) {
                res.status(200).json(projects)
            } else {
                res.status(400).json({ recipes: 'There is no projects.' })
            }
        })
        .catch(next)
})
router.get('/:id/tasks', (req, res, next) => {
    Projects.getProjectTasks(req.params.id)
        .then(projectTasks => {
            if (projectTasks.length) {
                res.status(200).json(projectTasks)
            } else {
                res.status(400).json({ recipes: 'There is no tasks.' })
            }
        })
        .catch(next)
})
router.post('/', (req, res, next) => {
    Projects.addProject(req.body)
        .then(count => {
            res.status(200).json(count)
        })
        .catch(next)
})


module.exports = router