import User from "../models/User.js";

const findByEmailUserRepository = (email) => User.findOne({ email: email });

const createUserRepository = (body) => User.create(body);

const findAllUserRepository = () => User.find();

const findByIdUserRepository = (idUser) => User.findById(idUser);

const updateUserRepository = (id, body) =>
  User.findOneAndUpdate(
    { _id: id },
    body,
    {
      new: true,
      rawResult: true,
    }
  );

export default {
  createUserRepository,
  findAllUserRepository,
  findByIdUserRepository,
  updateUserRepository,
  findByEmailUserRepository
};
