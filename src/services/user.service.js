import User from "../models/User.js"

const createUserService = (body) => User.create(body)

const findAllUserService = (req) => User.find()

const findByIdUserService = (idUser) => User.findById(idUser)

const updateUserService = (
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
) => User.findOneAndUpdate(
    {_id: id,},
    {
        name,
        username,
        email,
        password,
        avatar,
        background
    },
    {
        rawResult: true
    }
)

export default {
    createUserService,
    findAllUserService,
    findByIdUserService,
    updateUserService,
}