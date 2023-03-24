import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

const generateOTP = () => {
  const digits = "0123456789";
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  console.log(otp);
  return otp;
};

const generateToken =(email, otp) => {
   return jwt.sign({ email, otp }, process.env.JWT_KEY, { expiresIn: "15m" });
};

export default async (req, res) => {
  const { SEND_API_KEY,NEW_API_KEY, FROM_EMAIL, TO_EMAIL,FROM_EMAIL1 } = process.env;
  sgMail.setApiKey(NEW_API_KEY);
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { email } = req.body;
  const otp = generateOTP();
  const newOtp= await bcrypt.hash(otp,10);
  const token = generateToken(email, newOtp);

  const msg = {
    to: TO_EMAIL,
    from: FROM_EMAIL1,
    subject: "OTP Verification",
    html: `<p>Your OTP is: ${otp}</p>`,
  };

  try {
    await sgMail.send(msg);

    // const hashedToken = await compare(token, process.env.COOKIE_SECRET);

    res.setHeader("Set-Cookie", `token=${token}; HttpOnly`);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Failed to send OTP email" });
    return;
  }

  res.status(200).json({ message: "OTP has been sent to your email", token });
};
