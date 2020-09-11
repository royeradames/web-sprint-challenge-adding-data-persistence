const express = require('express')
const Recipes = require('./ingredients-module')
const router = express.Router()

router.get('/:id/recipes', (req, res) => {
    Recipes.getIngredientForRecipes(req.params.id)
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