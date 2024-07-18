import authRepositories from "../repositories/auth.repositories.js";
import userRepositories from "../repositories/user.repositories.js";

const CreateUserService = async (body) => {
  const { name, username, email, password, avatar, background } = body;

  if (!username || !name || !email || !password || !avatar || !background)
    throw new Error("Submit all fields for registration");

  const user = await userRepositories.createUserRepository(body);

  if (!user) throw new Error("Error creating user");

  const token = authRepositories.generateTokenRepository(user.id)

  return token;
};

const FindAllUsersService = async () => {
  const users = await userRepositories.findAllUserRepository();

  if (users.length === 0) throw new Error("There are no registered users");

  return users;
};

const FindUserByIdService = async (userId, userIdLogged) => {
  let idParam;
  if (!userId) {
    userId = userIdLogged;
    idParam = userId;
  } else {
    idParam = userId;
  }

  if (!idParam) throw new Error("Send a id in the params to search the user");

  const user = userRepositories.findByIdUserRepository(idParam);

  return user;
};

const SearchByUsernameService = async (username) => {
  const user = await userRepositories.SearchByUsernameRepository(username);

  if (user.length === 0) throw new Error("Can't find a user with this name");

  return user.map((user) => ({
    id: user._id,
    username: user.username,
    avatar: user.avatar,
  }));
};

const UpdateUserService = async (body, userId) => {
  const { name, username, email, password, avatar, background } = body;

  if (!username && !name && !email && !password && !avatar && !background)
    throw new Error("Submit at least one field for registration");

  const user = await userRepositories.findByIdUserRepository(userId);

  if (user._id != userId) throw new Error("you cannot update this user");

  await userRepositories.updateUserRepository(userId, body);

  return { message: "User successfully updated!" };
};

export default {
  CreateUserService,
  FindAllUsersService,
  SearchByUsernameService,
  FindUserByIdService,
  UpdateUserService,
};
