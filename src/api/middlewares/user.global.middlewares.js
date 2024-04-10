import mongoose from "mongoose"
import userService from "../services/user.service.js"
export const validId = (req, res, next) => {

    const id = req.id

    if(!mongoose.Types.ObjectId(id)) {
        res.status(400).send({message: "Invalid User"})
    }

    next();
}

export const validUser = async (req, res, next) => {
    const id = req.params.id
    const user = await userService.findByIdUserService(id)

    if(!user) {
        return res.status(400).send({message: "User not found"})
    }

    req.id = id;
    req.user = user;
    
    next();
}

export const ValidPost = async (req, res, next) => {
    const iq = req.id

    const Tweets = await userService.updateUserService(id, title, text, banner)

    next()
}