import Tweets from "../models/Tweets.js";

export const createService = (body) => Tweets.create(body);

export const findAllTweetsService = (offset, limit) =>
  Tweets.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

export const countTweets = () => Tweets.countDocuments();

export const topTweetsService = () =>
  Tweets.findOne().sort({ _id: -1 }).populate("user");

export const findByIdService = (id) => Tweets.findById(id).populate("user")