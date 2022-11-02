const getAllContacts = require('./getAllContacts');
const getContactById = require('./getContactById');
const addContact = require('./addContact');
const removeById = require('./removeById');
const updateById = require('./updateById');
const updateFavorite = require('./updateFavorite');

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  removeById,
  updateById,
  updateFavorite,
};
