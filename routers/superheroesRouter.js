const superheroRouter = require('express').Router();
const SuperheroController = require('../controllers/superheroController');

superheroRouter
  .post('/', SuperheroController.createSuperheroes)
  .get('/', SuperheroController.getSuperheroes)
  .get('/:superheroId', SuperheroController.getSuperhero)
  .put('/:superheroId', SuperheroController.updateSuperhero)
  .delete('/:superheroId', SuperheroController.deleteSuperhero);

module.exports = superheroRouter;