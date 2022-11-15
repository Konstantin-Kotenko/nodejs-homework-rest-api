// const sgMail = require('@sendgrid/mail');
// require('dotenv').config();

// const {SENDGRID_API_KEY} = process.env;

// sgMail.setApiKey(SENDGRID_API_KEY);

// const sendEmail = async (data) => {
//   const mail = {...data, from: 'kostya.kotenkoo@gmail.com'};
//   await sgMail.send(mail);
//   return true;
// };
// module.exports = sendEmail;

const nodemailer = require('nodemailer');
require('dotenv').config();

const {META_PASSWORD} = process.env;

const nodemailerConfig = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'kostya.kotenkoo@meta.ua',
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

// const mail = {
//   to: '',
//   from: 'kostya.kotenkoo@meta.ua',
//   subject: '',
//   html: ``,
// };

// transport
//   .sendMail(mail)
//   .then((info) => console.log(info))
//   .catch((err) => console.log(err));

const sendEmail = async (data) => {
  const mail = {...data, from: 'kostya.kotenkoo@meta.ua'};
  await transport.sendMail(mail);
  return true;
};

module.exports = sendEmail;
