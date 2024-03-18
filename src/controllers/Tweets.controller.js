import { createService, findAllTweetsService, countTweets, topTweetsService, findByIdService} from "../services/Tweets.service.js";

export const create = async (req, res) => {
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

export const findAll = async (req, res) => {
    try {
        let {limit, offset } = req.query

        limit = Number(limit)
        offset = Number(offset)

        if(!limit && !offset) {
            limit = 5;  
            offset = 0;
        }

        const Tweets = await findAllTweetsService(offset, limit);
        const total = await countTweets();
        const currentURL = req.baseUrl;
        
        const next = offset + limit;
        const nextUrl = next < total ? `${currentURL}?limit=${limit}&offset=${next}` : null;

        const previous = offset - limit < 0 ? null : offset - limit;
        const previousURL = previous != null ? `${currentURL}?limit=${limit}&offset=${previous}` : null;

        if(Tweets.length === 0 ) {
            return res.status(400).send({message: "There are no registered Tweets"});
        }

        res.send({
            nextUrl,
            previousURL,
            limit,
            offset,
            total,

            results: Tweets.map(item => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                name: item.name,
                username: item.user.username,
                userAvatar: item.user.avatar
            }))
        })
    } catch (err) {
        res.status(500).send({message: err.message})
    }

}

export const topTweets = async (req, res) => {
    try {
    const Tweets = await topTweetsService()

    if(!Tweets) {
        return res.status(400).send({message: "There are no registered Tweet"});
    }

    res.send({
        tweets: {
            id: Tweets._id,
            title: Tweets.title,
            text: Tweets.text,
            banner: Tweets.banner,
            likes: Tweets.likes,
            comments: Tweets.comments,
            name: Tweets.name,
            username: Tweets.user.username,
            userAvatar: Tweets.user.avatar
        }
    })
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}

export const findById = async (req, res) => {
    try {
        const { id } = req.params;

        const Tweets = await findByIdService(id);

        return res.send({
            tweets: {
                id: Tweets._id,
                title: Tweets.title,
                text: Tweets.text,
                banner: Tweets.banner,
                likes: Tweets.likes,
                comments: Tweets.comments,
                name: Tweets.name,
                username: Tweets.user.username,
                userAvatar: Tweets.user.avatar
            }
        })

    } catch (err) {
        res.status(500).send({message: err.message})
    }
}
