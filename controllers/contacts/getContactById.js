const contacts = require('../../models/contacts');
const {RequestError} = require('../../helpers');

const getContactById = async (req, res) => {
  const {id} = req.params;

  const result = await contacts.getById(id);

  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.status(200).json(result);
};

module.exports = getContactById;
