import Tweets from "../models/Tweets.js";

const createTweetsRepository = (body) => Tweets.create(body);

const FindAllTweetsRepository = (offset, limit) =>
  Tweets.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const CountTweetsRepository = () => Tweets.countDocuments();

const TopTweetsRepository = () =>
  Tweets.findOne().sort({ _id: -1 }).populate("user");

const FindTweetByIdRepository = (id) => Tweets.findById(id).populate("user");

const FindTweetbyUserRepository = (id) =>
  Tweets.find({ user: id }).sort({ _id: -1 }).populate("user");

const UpdateTweetRepository = (id, body) =>
  Tweets.updateOne(
    { _id: id },
    body,
    {
      new: true,
      rawResult: true,
    }
  );

const EraseTweetRepository = (id) => Tweets.findByIdAndDelete({ _id: id });

const LikeTweetsRepository = (idTweets, userId) =>
  Tweets.findOneAndUpdate(
    { _id: idTweets, "likes.userId": { $nin: [userId] } },
    { $push: { likes: { userId, created: new Date() } } }
  );

const DeleteLikeTweetsRepository = (idTweets, userId) =>
  Tweets.findOneAndUpdate({ _id: idTweets }, { $pull: { likes: { userId } } });

const AddTweetCommentsRepository = (idTweets, comment, userId) => {
  const idComment = Math.floor(Date.now() * Math.random()).toString(36);

  return Tweets.findOneAndUpdate(
    { _id: idTweets },
    {
      $push: {
        comments: { idComment, userId, comment, createdAt: new Date() },
      },
    }
  );
};

const SearchByTextRepository = (text) =>
  Tweets.find({
    text: { $regex: `${text || ""}`, $options: "i" },
  })
    .sort({ _id: -1 })
    .populate("user");

const DeleteTweetsCommentsRepository = (idTweets, idComment, userId) =>
  Tweets.findOneAndUpdate(
    { _id: idTweets },
    {
      $pull: {
        comments: { idComment, userId },
      },
    }
  );

export default {
  createTweetsRepository,
  FindAllTweetsRepository,
  CountTweetsRepository,
  TopTweetsRepository,
  FindTweetByIdRepository,
  FindTweetbyUserRepository,
  UpdateTweetRepository,
  SearchByTextRepository,
  EraseTweetRepository,
  LikeTweetsRepository,
  AddTweetCommentsRepository,
  DeleteLikeTweetsRepository,
  DeleteTweetsCommentsRepository,
};
