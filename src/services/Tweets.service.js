import Tweets from "../models/Tweets.js";

const createService = (body) => Tweets.create(body);

const findAllTweetsService = () => Tweets.find()

export {
    createService,
    findAllTweetsService
}