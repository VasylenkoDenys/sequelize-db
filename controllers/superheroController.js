const { Superhero } = require("../models");

module.exports.createSuperhero = async(req, res, next) => {
  const { body } = req;
  const newSuperhero = await Superhero.create(body);
  res.status(201).send({ data: newSuperhero });
};