const createHttpError = require('http-errors');
const { Superpower } = require('../models');

module.exports.getSuperpower = async (req, res, next) => {
  const {
    params: { superpowerId },
  } = req;

  const superpower = await Superpower.findByPk(superpowerId);

  if (!superpower) {
    return next(createHttpError(404, 'Superpower not found'));
  }

  req.superpower = superpower;
  next();
};
