import User from "../models/User.js";

const findByEmailUserRepository = (email) => User.findOne({ email: email });

const createUserRepository = (body) => User.create(body);

const findAllUserRepository = () => User.find();

const findByIdUserRepository = (idUser) => User.findById(idUser);

const SearchByUsernameRepository = (username) =>
  User.find({
    username: { $regex: username, $options: "i" },
  }).sort({ _id: -1 });
  
const updateUserRepository = (id, body) =>
  User.findOneAndUpdate({ _id: id }, body, {
    new: true,
    rawResult: true,
  });

export default {
  createUserRepository,
  findAllUserRepository,
  findByIdUserRepository,
  SearchByUsernameRepository,
  updateUserRepository,
  findByEmailUserRepository,
};
