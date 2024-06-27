import User from "../models/User.js";
import Jwt from "jsonwebtoken";

import "dotenv/config";

const token = process.env.JWT;

const loginRepository = (email) =>
  User.findOne({ email: email }).select("+password");

const generateTokenRepository = (id) => Jwt.sign({ id: id }, token, { expiresIn: 86400 });

export default { loginRepository, generateTokenRepository };
