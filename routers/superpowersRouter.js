const superpowerRouter = require('express').Router();
const SuperpowerController = require('../controllers/superpowerController');

superpowerRouter
  .post('/', SuperpowerController.createSuperpowers)
  .get('/', SuperpowerController.getSuperpowers)
  .get('/:superpowerId', SuperpowerController.getSuperpower)
  .put('/:superpowerId', SuperpowerController.updateSupepower)
  .delete('/:superpowerId', SuperpowerController.deleteSuperpower);

module.exports = superpowerRouter;