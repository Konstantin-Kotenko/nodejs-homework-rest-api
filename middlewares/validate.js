const {RequestError} = require('../helpers');

const validate = (addSchema) => {
  const validateRequest = (req, res, next) => {
    const {error} = addSchema.validate(req.body);
    if (error) {
      next(RequestError(400, error.message));
    }
    next();
  };
  return validateRequest;
};

module.exports = validate;
