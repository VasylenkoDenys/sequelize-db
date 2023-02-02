const { UniqueConstraintError, ValidationError } = require("sequelize");

module.exports.sequelizeErrorHandler = async (err, req, res, next) => {
  if (err instanceof UniqueConstraintError) {
    return res.status(409).send({
      errors: err.errors,
    });
  } else if (err instanceof ValidationError) {
    return res.status(404).send({
      errors: err.errors,
    });
  } else {
    next(err);
  }
};