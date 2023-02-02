const createHttpError = require("http-errors");
const { Superhero } = require("../models");

module.exports.createSuperhero = async (req, res, next) => {
  try {
    const { body } = req;
    const newSuperhero = await Superhero.create(body);
    res.status(201).send({ data: newSuperhero });
  } catch (error) {
    next(error);
  }
};

module.exports.createSuperheroes = async (req, res, next) => {
  try {
    const { body } = req;
    const newSuperheroes = await Superhero.bulkCreate(body);
    res.status(201).send({ data: newSuperheroes });
  } catch (error) {
    next(error);
  }
};

module.exports.getSuperheroes = async (req, res, next) => {
  const superheroes = await Superhero.findAll();
  res.send({ data: superheroes });
};

module.exports.getSuperhero = async (req, res, next) => {
  const {
    params: { superheroId },
  } = req;

  const [superhero] = await Superhero.findAll({
    where: {
      id: superheroId,
    },
  });
  if (superhero) {
    res.send({ data: superhero });
  } else {
    next(createHttpError(404, "Superhero not found"));
  }
};

module.exports.updateSuperhero = async (req, res, next) => {
  try {
    const {
      params: { superheroId },
      body,
    } = req;

    const superhero = await Superhero.findByPk(superheroId);
    if (!superhero) {
      throw createHttpError(404, "Superhero not found");
    }
    const updatedSuperhero = await superhero.update(body, { returning: true });
    res.send({ data: updatedSuperhero });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSuperhero = async (req, res, next) => {
  const {
    params: { superheroId },
  } = req;

  const superhero = await Superhero.findByPk(superheroId);
  if (!superhero) {
    next(createHttpError(404, "Superhero not found"));
  }
  await superhero.destroy();
  res.send({ data: `Superhero ${superhero.nickname} is deleted`,superhero });
};

