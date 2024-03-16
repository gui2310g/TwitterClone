import { createService, findAllTweetsService} from "../services/Tweets.service.js";

const create = async (req, res) => {
    try {
        const {title, text, banner} = req.body;

        if(!title || !text || !banner) {
                res.status(400).send({message: "Submit all fields for registration"})
        }

        await createService({
            title,
            text,
            banner,
            user: req.userId
        })

        res.sendStatus(201)

    } catch (err) {
        res.status(500).send({message: err.message})
    }
}

const findAll = async (req, res) => {
    try {
        const Tweets = await findAllTweetsService();

        if(Tweets.length === 0 ) {
            return res.status(400).send({message: "There are no registered Tweets"});
        }

        res.send(Tweets)
    } catch (err) {
        res.status(500).send({message: err.message})
    }

}

export {create, findAll}