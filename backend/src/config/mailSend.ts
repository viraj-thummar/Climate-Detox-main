const nodemailer = require("nodemailer");
require("dotenv").config();
let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  // host: "3o02.l.time4vps.cloud",
  host: " smtp.gmail.com",
  port: 465,
  secure: true,
  tls: {
    ciphers: "SSLv3",
  },
  // secure: false,
  auth: {
    user: process.env.MAIL_USR,
    pass: process.env.MAIL_PASS,
  },
});

module.exports = {
  otpMailSend: (emailid: any, subject: any, msg: any, callback: any) => {
    // console.log("i am call " + data);

    let mailDetails = {
      from: process.env.MAIL_USR,
      to: emailid,
      subject: subject,
      text: msg,
      html: msg,
    };
    mailTransporter.sendMail(mailDetails, function (err: any, data: any) {
      if (err) {
        // console.error("Error Occurs", err);
        callback({ type: "error", message: err.message });
      } else {
        console.log("Email sent successfully");
        callback({ type: "success", message: "Email sent successfully.Please Check Your Spam Too" });
      }
    });
    // main().catch(console.error);
  },
};
