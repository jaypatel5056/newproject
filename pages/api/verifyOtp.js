import { compare } from "bcrypt";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const verifyToken = async (token, email, otp) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    // const hashToken=await bcrypt.hashSync(token,10);
    // const hashToken=await bcrypt.compare(token,decoded1);
    console.log("Decoded section ");
    console.log(decoded.email);
    console.log(email);
    console.log(decoded.otp);
    console.log(otp);
    // console.log(decoded.email === email && decoded.otp === otp)
    // console.log(
    //   decoded.email === email && bcrypt.compareSync(otp, decoded.otp)
    // );
    console.log("coming back");

    let checkOtpIsCorrect = await bcrypt.compareSync(otp, decoded.otp);
    if (decoded.email == email && checkOtpIsCorrect) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("error here");
    console.error(error);
    return false;
  }
};

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { email, otp } = req.body;
  console.log(email);
  console.log(otp);
  const token = req.cookies.token;
  console.log(token);
  // Verify the OTP using the token
  console.log("9");
  // console.log(!verifyToken(token, email, otp))
  let otpCorrect= await verifyToken(token, email, otp);
  
  if (!otpCorrect) {
    // res.status(401).json({ message: "Invalid OTP" }); \
    res.status(401);
    console.log("invalid otp");
    // return;
  }
  else{ 
    res.status(200).json({ message: "OTP has been verified", success: true });
  }
};
