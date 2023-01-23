const express = require('express');
const SuperheroController = require('../controllers/superheroController');
const router = express.Router();

router.post('/superheroes', SuperheroController.createSuperhero);

module.exports = router;