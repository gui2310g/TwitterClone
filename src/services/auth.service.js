import User from "../models/User.js";
import Jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

const token = process.env.JWT;

const loginService = (email) =>
  User.findOne({ email: email }).select("+password");

const generateToken = (id) => Jwt.sign({ id: id}, token, { expiresIn: 86400 });

export { loginService, generateToken };
