var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

router.post('/sendMail', async function (req, res) { 
  try {
const body = JSON.parse(Object.keys(req.body)[0]);
    const { name, email, subject, message } = body // ithanu front end il ninnu kittunne

    let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'johnnyboytest95@gmail.com', //less secure on aakiya mail id 
      pass: 'jbtest123#', //athinte password
    },
  });


  await transporter.sendMail({
    from: "weguide.recruit@outlook.com", //from mail id
    to: "weguide.recruit@gmail.com", // to mail id
    subject: subject,
    text: `this is an enquiry from ${name} email : ${email} message : ${message}`
  });

  res.json("Mail sent");
  } catch (error) {
    console.log(error)
    res.json("Mail not sent")

  }
  
  
})


module.exports = router;

