const superheroRouter = require('express').Router();
const SuperheroController = require('../controllers/superheroController');
const { getSuperpower } = require('../middlewares/superheroMW');

superheroRouter
  .post('/', SuperheroController.createSuperheroes)
  .get('/', SuperheroController.getSuperheroes)
  .get('/:superheroId', SuperheroController.getSuperhero)
  .put('/:superheroId', SuperheroController.updateSuperhero)
  .delete('/:superheroId', SuperheroController.deleteSuperhero)
  .post('/:superheroId/superpowers/:superpowerId',getSuperpower ,SuperheroController.addSuperpowersToSuperhero);

module.exports = superheroRouter;