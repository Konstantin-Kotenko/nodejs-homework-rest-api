const express = require('express');

const {validationBody, auth, upload} = require('../../middlewares');

const {ctrlWrapper} = require('../../helpers');

const {schemas} = require('../../models/user');

const ctrl = require('../../controllers/users.js');

const router = express.Router();

router.post(
  '/signup',
  validationBody(schemas.signupSchema),
  ctrlWrapper(ctrl.signup)
);

router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verify));

router.post(
  '/verify',
  validationBody(schemas.verifyEmailSchema),
  ctrlWrapper(ctrl.resendEmail)
);

router.post(
  '/login',
  validationBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));

router.get('/logout', auth, ctrlWrapper(ctrl.logout));

router.patch(
  '/subscription',
  auth,
  validationBody(schemas.signupSchema),
  ctrlWrapper(ctrl.updateSubscription)
);
router.patch(
  '/avatars',
  auth,
  upload.single('avatar'),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
