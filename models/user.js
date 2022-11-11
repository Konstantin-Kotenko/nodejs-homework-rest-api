const {Schema, model} = require('mongoose');
const Joi = require('joi');

const {handleSaveErrors} = require('../helpers');

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ['starter', 'pro', 'business'],
    default: 'starter',
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    required: true,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },
});

userSchema.post('save', handleSaveErrors);

const signupSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  subscription: Joi.string().valid('starter', 'pro', 'business'),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});

const schemas = {
  signupSchema,
  loginSchema,
  verifyEmailSchema,
};

const User = model('user', userSchema);

module.exports = {
  User,
  schemas,
};
