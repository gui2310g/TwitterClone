import userService from "../services/user.service.js"

const create = async (req, res) => {
    try {
        const {name, username, email, password, avatar, background} = req.body

        if(!username || !name || !email || !password || !avatar || !background) {
            return res.status(400).send({message: "Submit all fields for registration"})
        }

        const user = await userService
            .createUserService(req.body)
            .catch((err) => console.log(err.message));

        if(!user) {
            return res.status(400).send({message: "Error creating user"});
        }

        res.status(201).send({
            message: "User Created",
            user: {
                id: user.id,
                name,
                username,
                email,
                avatar,
                background
            }
        })

    } catch (err) {
        res.status(500).send({message: err.message})
    }
}

const findAll = async(req, res) => {
    try {
        const users = await userService.findAllUserService();

        if(users.length === 0 ) {
            return res.status(400).send({message: "There are no registered users"});
        }

        res.send(users)
    } catch(err) {
        res.status(500).send({message: err.message})
    }
}

const findById = async(req, res) => {
    try {
        const user = req.user

        res.send(user)
    } catch (err){
        res.status(500).send({message: err.message})
    }
}

const update = async(req, res) => {
    try {
        const {name, username, email, password, avatar, background} = req.body

        if(!username && !name  && !email  && !password  && !avatar  && !background) {
            return res.status(400).send({message: "Submit at least one field for registration"})
        }
    } catch (err) {
        res.status(500).send({message: err})
    }
}

export default {
    create,
    findAll,
    findById,
    update
}