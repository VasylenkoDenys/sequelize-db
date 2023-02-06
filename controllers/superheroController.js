const createHttpError = require("http-errors");
const { Superhero, Superpower } = require("../models");

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
  const superheroes = await Superhero.findAll({
    include: {
      model: Superpower,
      as: "superpowers",
      attributes: ["id", "powerName"],
      through: { attributes: [] },
    },
  });
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
  const superpowers = await superhero.getSuperpowers();
  if (superhero) {
    res.send({ data: { ...superhero.toJSON(), superpowers } });
  } else {
    return next(createHttpError(404, "Superhero not found"));
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
    return next(createHttpError(404, "Superhero not found"));
  }
  await superhero.destroy();
  res.send({ data: `Superhero ${superhero.nickname} is deleted`, superhero });
};

module.exports.addSuperpowersToSuperhero = async (req, res, next) => {
  const {
    params: { superheroId },
    superpower,
  } = req;

  const superhero = await Superhero.findByPk(superheroId);
  if (!superhero) {
    return next(createHttpError(404, "Superhero not found"));
  }
  await superhero.addSuperpower(superpower);
  res.send({
    data: `Superpower '${superpower.powerName}' added to ${superhero.nickname}`,
  });
};

module.exports.removeSuperpowerFromSuperhero = async (req, res, next) => {
  const {
    params: { superheroId },
    superpower,
  } = req;

  const superhero = await Superhero.findByPk(superheroId);
  if (!superhero) {
    return next(createHttpError(404, "Superhero not found"));
  }
  await superhero.removeSuperpower(superpower);
  res.send({
    data: `Superpower '${superpower.powerName}' removed from ${superhero.nickname}`,
  });
};

module.exports.addPictureToSuperhero = async (req, res, next) => {
  const {
    file,
    params: { superheroId },
  } = req;
  try {
    const [updatedSuperhero, [superhero]] = await Superhero.update(
      {pictures: file.filename},
      {where: {id: superheroId}, returning: true}
    );
    if (updatedSuperhero !== 1) {
      throw createHttpError(404, 'Superhero not found');
    }
    res.send({ data: superhero });
  } catch(error) {
    next(error);
  }
};
