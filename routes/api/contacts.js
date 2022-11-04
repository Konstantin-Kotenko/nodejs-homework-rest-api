const express = require('express');

const router = express.Router();

const {validationBody} = require('../../middlewares');

const {ctrlWrapper} = require('../../helpers');

const {schemas} = require('../../models/contact');

const ctrl = require('../../controllers/contacts');

router.get('/', ctrlWrapper(ctrl.getAllContacts));

router.get('/:id', ctrlWrapper(ctrl.getContactById));

router.post(
  '/',
  validationBody(schemas.addSchema),
  ctrlWrapper(ctrl.addContact)
);

router.delete('/:id', ctrlWrapper(ctrl.removeById));

router.put(
  '/:id',
  validationBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  '/:id/favorite',
  validationBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
