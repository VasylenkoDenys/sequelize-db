const createHttpError = require('http-errors');
const { Superhero } = require('../models');

module.exports.getSuperhero = async (req, res, next) => {
  const {
    params: { superheroId },
  } = req;

  const superhero = await Superhero.findByPk(superheroId);

  if (!superhero) {
    return next(createHttpError(404, 'Superhero not found'));
  }

  req.superhero = superhero;
  next();
};
