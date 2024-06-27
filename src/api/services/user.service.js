import userRepositories from "../repositories/user.repositories.js";

const CreateUserService = async (body) => {
    const {name, username, email, password, avatar, background} = body;

    if(!username || !name || !email || !password || !avatar || !background) throw new Error("Submit all fields for registration")
        
    const user = await userRepositories.createUserRepository(body)
            
    if(!user) throw new Error("Error creating user")

    return {
        user: {
            id: user.id,
            name,
            username,
            email,
            avatar,
            background
        }
    }
}

const FindAllUsersService = async() => {
    const users = await userRepositories.findAllUserRepository();

    if(users.length === 0 ) throw new Error("There are no registered users")

    return users;
}

const FindUserByIdService = async(userId, userIdLogged) => {
    let idParam;
    if(!userId) {
        userId = userIdLogged;
        idParam = userId;
    } else {
        idParam = userId;
    }

    if(!idParam) throw new Error("Send a id in the params to search the user")
    
    const user = userRepositories.findByIdUserRepository(idParam)

    return user;
}

const UpdateUserService = async(body, userId) => {

    const {name, username, email, password, avatar, background} = body

    if(!username && !name  && !email  && !password  && !avatar  && !background) throw new Error("Submit at least one field for registration")
            
    const user = await userRepositories.findByIdUserRepository(userId)
    
    if(user._id != userId) throw new Error("you cannot update this user");

    await userRepositories.updateUserRepository(userId, body)

    return { message: "User successfully updated!" };
}

export default {
    CreateUserService,
    FindAllUsersService,
    FindUserByIdService,
    UpdateUserService
}