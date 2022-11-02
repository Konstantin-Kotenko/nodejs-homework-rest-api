const {RequestError} = require('../helpers');

const validationBody = (addSchema) => {
  const func = (req, res, next) => {
    const {error} = addSchema.validate(req.body);
    if (error) {
      next(RequestError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validationBody;
