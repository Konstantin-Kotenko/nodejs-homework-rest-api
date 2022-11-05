const express = require('express');

const {validationBody} = require('../../middlewares');

const {ctrlWrapper} = require('../../helpers');

const {schemas} = require('../../models/user');

const ctrl = require('../../controllers/users.js');

const router = express.Router();

router.post(
  '/signup',
  validationBody(schemas.signupSchema),
  ctrlWrapper(ctrl.signup)
);

router.post(
  '/login',
  validationBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

module.exports = router;
