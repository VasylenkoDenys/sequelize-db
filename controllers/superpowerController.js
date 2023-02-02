const createHttpError = require("http-errors");
const { Superpower } = require("../models");

module.exports.createSuperpowers = async (req, res, next) => {
  try {
    const { body } = req;
    const newSuperpower = await Superpower.bulkCreate(body);
    res.status(201).send({ data: newSuperpower });
  } catch (error) {
    next(error);
  }
};

module.exports.getSuperpowers = async (req, res, next) => {
  const superpowers = await Superpower.findAll();
  res.send({ data: superpowers });
};

module.exports.getSuperpower = async (req, res, next) => {
  const {
    params: { superpowerId },
  } = req;

  const [superpower] = await Superpower.findAll({
    where: {
      id: superpowerId,
    },
  });
  if (superpower) {
    res.send({ data: superpower });
  } else {
    next(createHttpError(404, "Superpower not found"));
  }
};

module.exports.updateSupepower = async (req, res, next) => {
  try {
    const {
      params: { superpowerId },
      body,
    } = req;

    const superpower = await Superpower.findByPk(superpowerId);
    if (!superpower) {
      throw createHttpError(404, "Superpower not found");
    }
    const updatedsuperpower = await superpower.update(body, {
      returning: true,
    });
    res.send({ data: updatedsuperpower });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSuperpower = async (req, res, next) => {
  const {
    params: { superpowerId },
  } = req;

  const rowsDeleted = await Superpower.destroy({
    where: { id: superpowerId },
  });

  if (rowsDeleted === 1) {
    res.send({
      data: `Superpower ${superpower.powerName} is deleted`,
      superpowerId,
    });
  } else {
    next(createHttpError(404, "Superpower not found"));
  }
};
