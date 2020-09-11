const express = require('express')
const Projects = require('./projects-module')
const router = express.Router()

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(recipes => {
            if (recipes.length) {
                res.status(200).json(recipes)
            } else {
                res.status(400).json({ recipes: 'There is no recipes.' })
            }
        })
        .catch(next)
})


module.exports = router