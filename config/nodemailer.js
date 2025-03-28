import nodemailer from "nodemailer";
import { NODEMAILER_PASSWORD } from "./env.js";

export const accountEmail = "prajapatisonu0207@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: accountEmail,
    pass: NODEMAILER_PASSWORD,
  },
});

export default transporter;