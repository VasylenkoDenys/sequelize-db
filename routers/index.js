const express = require('express');
const superheroRouter = require('./superheroesRouter');
const superpowerRouter = require('./superpowersRouter');
const router = express.Router();

router.use('/superheroes', superheroRouter);

router.use('/superpowers', superpowerRouter);


module.exports = router;