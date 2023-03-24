import fs from "fs";
require('dotenv').config()
import hello from "../../contactform/userregis.html";
import handlebars from "handlebars";
import sgMail from "@sendgrid/mail";
export default async function (req, res) {
    console.log('inside file')
//   const { name, email, message } = req.body;
  const{SEND_API_KEY,FROM_EMAIL,TO_EMAIL}=process.env

  let project_folder;
  if(process.pkg){
      project_folder = path.dirname(process.execPath)
      
  }else{
      project_folder = __dirname
  }
  
  const path1=require('path');
//   const loc = path1.join(project_folder,'..','..','contactform', 'contactform.html');
  console.log('ii');
//   console.log(filePath);
//   const html = fs.readFileSync(loc, "utf8");

//   let nodemailer = require("nodemailer");

const htmlFilePath = path1.join(__dirname, "..","..","..","..", "contactform", "userregis.html");
console.log(htmlFilePath);
const html = fs.readFileSync(htmlFilePath, "utf8");

//   const template = handlebars.compile(html);
//   const htmlContent = template({ name, email, message });
//   console.log(htmlContent)
  
  sgMail.setApiKey(SEND_API_KEY);

//   const transporter = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.gmail.com",
//     auth: {
//       user: "demo@demo.gmail",
//       pass: "password",
//     },
//     secure: true,
//   });

  const mailData = {
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: `Message From Server`,
    html: html,
  };

//   try {
//     await transporter.sendMail(mailData);
//     console.log("Email sent successfully");
//     res.status(200).send("Email sent successfully");
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).send("Error sending email");
//   }

try {
    await sgMail.send(mailData);
    console.log("Email sent successfully");
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }

}
