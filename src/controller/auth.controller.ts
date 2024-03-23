import { AuthVerificationModel, UserModel } from "@/models";
import { sendErrorsRes } from "@/utils";
import crypto from "crypto";
import { RequestHandler } from "express";
import nodemailer from "nodemailer";

export const createNewUser: RequestHandler = async (req, res) => {
  //* Reading incoming data like: name, email, password
  const { name, email, password } = req.body;

  //* Validating incoming data
  if (!name) return sendErrorsRes(res, 422, "Name is required");
  if (!email) return sendErrorsRes(res, 422, "Email is required");
  if (!password) return sendErrorsRes(res, 422, "Password is required");

  //* Checking if user already exists
  const existingUser = await UserModel.findOne({ email });
  if (existingUser)
    return sendErrorsRes(
      res,
      409,
      "Unauthorized request, email already exists",
    );

  //* Creating new user
  const user = await UserModel.create({ name, email, password });
  await user.comparePassword(password);

  //* Generating and store verification token
  const token = crypto.randomBytes(36).toString("hex");
  await AuthVerificationModel.create({ owner: user._id, token });

  //* Send verification link with token to user's registered email
  const tokenLink = `http://localhost:3000/verify?id=${user._id}&token=${token}`;

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env!.NODEMAILER_USERNAME,
      pass: process.env!.NODEMAILER_PASSWORD,
    },
  });

  transport.sendMail({
    subject: "Email Verification from Chenlay.com",
    from: "verification@chenlay.com",
    to: user.email,
    html: `<a href="${tokenLink}">Click here to verify your email</a>`,
  });

  res.status(201).json({
    message:
      "User created successfully! Please check your email for verification  ",
  });
};
