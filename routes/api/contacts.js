const express = require('express');

const router = express.Router();

const {validationBody, auth} = require('../../middlewares');

const {ctrlWrapper} = require('../../helpers');

const {schemas} = require('../../models/contact');

const ctrl = require('../../controllers/contacts');

router.get('/', auth, ctrlWrapper(ctrl.getAllContacts));

router.get('/:id', auth, ctrlWrapper(ctrl.getContactById));

router.post(
  '/',
  auth,
  validationBody(schemas.addSchema),
  ctrlWrapper(ctrl.addContact)
);

router.delete('/:id', auth, ctrlWrapper(ctrl.removeById));

router.put(
  '/:id',
  auth,
  validationBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  '/:id/favorite',
  auth,
  validationBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
