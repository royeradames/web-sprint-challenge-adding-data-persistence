const express = require('express')
const Projects = require('./tasks-module')
const router = express.Router()

router.get('/', (req, res, next) => {
    Projects.getResources()
        .then(projects => {
            if (projects.length) {
                res.status(200).json(projects)
            } else {
                res.status(400).json({ recipes: 'There is no projects.' })
            }
        })
        .catch(next)
})
router.post('/', (req, res, next) => {
    Projects.addResource(req.body)
        .then(count => {
            res.status(200).json(count)
        })
        .catch(next)
})


module.exports = router