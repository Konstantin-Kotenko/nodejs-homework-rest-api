const express = require('express');

const router = express.Router();

const {validationBody} = require('../../middlewares');

const {controllerWrapper} = require('../../helpers');

const schemas = require('../../schemas/contactSchema');

const controllers = require('../../controllers/contacts');

router.get('/', controllerWrapper(controllers.getAllContacts));

router.get('/:id', controllerWrapper(controllers.getContactById));

router.post(
  '/',
  validationBody(schemas.addSchema),
  controllerWrapper(controllers.addContact)
);

router.delete('/:id', controllerWrapper(controllers.removeById));

router.put(
  '/:id',
  validationBody(schemas.addSchema),
  controllerWrapper(controllers.updateById)
);

module.exports = router;
