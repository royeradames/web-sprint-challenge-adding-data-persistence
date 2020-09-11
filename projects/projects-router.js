const express = require('express')
const Projects = require('./projects-module')
const router = express.Router()

router.get('/', (req, res) => {
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


module.exports = router