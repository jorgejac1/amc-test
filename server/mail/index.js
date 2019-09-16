import nodemailer from 'nodemailer';

// email configs
const transporter = nodemailer.createTransport({
  auth: {
    host: 'smtp.mailinator.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "jorgejacometshirts@mailinator.com",
      pass: ""
    }
  }
});

// get parameters from form
const send = ({ email, firstName, lastName, addedProducts }) => {
  const from = firstName && email ? `${firstName} ${lastName} <${email}>` : `${firstName || email}`;
  const text = "text";
  const message = {
    from,
    to: 'jorgejacometshirts@mailinator.com',
    subject: `Your Order`,
    text
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

export default send
