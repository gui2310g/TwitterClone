import userService from "../services/user.service.js"

const CreateUserController = async (req, res) => {
    const body = req.body
    try {
        const token = await userService.CreateUserService(body)

        return res.send(token)
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}

const FindAllUsersController = async(req, res) => {
    try {
        const users = await userService.FindAllUsersService();

        return res.send(users)
    } catch(err) {
        res.status(500).send({message: err.message})
    }
}

const FindUserByIdController = async(req, res) => {
    const { id: userId } = req.params;
    const userIdLogged = req.userId
    try {
       const user = await userService.FindUserByIdService(userId, userIdLogged)

       return res.send(user)
    } catch (err){
        res.status(500).send({message: err.message})
    }
}

const SearchByUsernameController = async (req, res) => {
    const { username } = req.query

    try {
        const user = await userService.SearchByUsernameService(username)

        return res.send(user)
    }  catch (err){
        res.status(500).send({message: err.message})
    }
}

const UpdateUserController = async(req, res) => {
    const body = req.body
    const { id: userId } = req.params;
    const userIdLogged = req.userId;

    try {
        const user = await userService.UpdateUserService(body, userId, userIdLogged)

        return res.send(user)
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}

export default {
    CreateUserController,
    FindAllUsersController,
    FindUserByIdController,
    SearchByUsernameController,
    UpdateUserController
}