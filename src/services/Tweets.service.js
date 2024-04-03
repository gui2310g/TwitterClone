import Tweets from "../models/Tweets.js";

export const createService = (body) => Tweets.create(body);

export const findAllTweetsService = (offset, limit) =>
  Tweets.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

export const countTweets = () => Tweets.countDocuments();

export const topTweetsService = () =>
  Tweets.findOne().sort({ _id: -1 }).populate("user");

export const findByIdService = (id) => Tweets.findById(id).populate("user");

export const searchByTitleService = (title) =>
  Tweets.find({
    title: { $regex: `${title || ""}`, $options: "i" },
  })
    .sort({ _id: -1 })
    .populate("user");

export const byUserService = (id) =>
  Tweets.find({ user: id }).sort({ _id: -1 }).populate("user");

export const updatePostService = (id, title, text, banner) =>
  Tweets.findOneAndUpdate(
    { _id: id },
    { title, text, banner },
    {
      rawResult: true,
    }
  );

export const eraseService = (id) => Tweets.findByIdAndDelete({ _id: id });

export const LikeTweetsService = (idTweets, userId) =>
  Tweets.findOneAndUpdate(
    { _id: idTweets, "likes.userId": { $nin: [userId] } },
    { $push: { likes: { userId, created: new Date() } } }
  );

export const deleteLikeTweetsService = (idTweets, userId) =>
  Tweets.findOneAndUpdate({ _id: idTweets }, { $pull: { likes: { userId } } });

export const AddCommentsService = (idTweets, comment, userId) => {
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

export const DeleteCommentsService = (idTweets, idComment, userId) =>
  Tweets.findOneAndUpdate(
    { _id: idTweets },
    {
      $pull: {
        comments: { idComment, userId },
      },
    }
  );
