const express = require('express');

const {RequestError} = require('../../helpers');

const router = express.Router();

const contacts = require('../../models/contacts');

const {validate} = require('../../middlewares');

const schema = require('../../schemas');

router.get('/', async (req, res, next) => {
  try {
    const result = await contacts.listContacts();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;

    const result = await contacts.getById(id);

    if (!result) {
      throw RequestError(404, 'Not found');
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    validate(schema.addSchema);
    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const result = await contacts.removeContact(id);
    if (!result) {
      throw RequestError(404, 'Not found');
    }
    res.status(200).json({message: 'contact deleted'});
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    validate(schema.addSchema);
    const {id} = req.params;
    const result = await contacts.updateContact(id, req.body);
    if (!result) {
      throw RequestError(404, 'Not found');
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
