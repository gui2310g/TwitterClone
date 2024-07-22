import TweetsRepositories from "../repositories/Tweets.repositories.js";

const CreateTweetsService = async (body, userId) => {
  const { text, banner } = body;

  if (!text || !banner) throw new Error("Submit all fields for registration");

  const Tweets = await TweetsRepositories.createTweetsRepository(body, userId);

  return Tweets;
};

const FindAllTweetsService = async (limit, offset, currentURL) => {
  limit = Number(limit);
  offset = Number(offset);

  if (!limit && !offset) {
    limit = 5;
    offset = 0;
  }

  const Tweets = await TweetsRepositories.FindAllTweetsRepository(
    offset,
    limit
  );
  const total = await TweetsRepositories.CountTweetsRepository();

  const next = offset + limit;
  const nextUrl =
    next < total ? `${currentURL}?limit=${limit}&offset=${next}` : null;

  const previous = offset - limit < 0 ? null : offset - limit;
  const previousURL =
    previous != null ? `${currentURL}?limit=${limit}&offset=${previous}` : null;

  if (Tweets.length === 0) throw new Error("There are no registered Tweets");

  return {
    nextUrl,
    previousURL,
    limit,
    offset,
    total,

    results: Tweets.map((item) => ({
      id: item._id,
      text: item.text,
      banner: item.banner,
      likes: item.likes,
      comments: item.comments,
      name: item.name,
      username: item.user.username,
      userAvatar: item.user.avatar,
    })),
  };
};

const TopTweetsService = async () => {
  const Tweets = await TweetsRepositories.TopTweetsRepository();

  if (!Tweets) throw new Error("There are no registered Tweet");

  return {
    tweets: {
      id: Tweets._id,
      title: Tweets.title,
      text: Tweets.text,
      banner: Tweets.banner,
      likes: Tweets.likes,
      comments: Tweets.comments,
      name: Tweets.name,
      username: Tweets.user.username,
      userAvatar: Tweets.user.avatar,
    },
  };
};

const FindTweetByIdService = async (id) => {
  const Tweets = await TweetsRepositories.FindTweetByIdRepository(id);

  return {
    tweets: {
      id: Tweets._id,
      title: Tweets.title,
      text: Tweets.text,
      banner: Tweets.banner,
      likes: Tweets.likes,
      comments: Tweets.comments,
      name: Tweets.name,
      username: Tweets.user.username,
      userAvatar: Tweets.user.avatar,
    },
  };
};

const SearchByTextService = async (text) => {
  const Tweets = await TweetsRepositories.SearchByTextRepository(text);

  if (Tweets.length === 0) throw new Error("There are no posts with this text");

  return {
    results: Tweets.map((item) => ({
      id: item._id,
      title: item.title,
      text: item.text,
      banner: item.banner,
      likes: item.likes,
      comments: item.comments,
      name: item.name,
      username: item.user.username,
      userAvatar: item.user.avatar,
    })),
  };
};

const FindTweetbyUserService = async (userId) => {
  const Tweets = await TweetsRepositories.FindTweetbyUserRepository(userId);

  return {
    TweetsByUser: Tweets.map((item) => ({
      id: item._id,
      title: item.title,
      text: item.text,
      banner: item.banner,
      likes: item.likes,
      comments: item.comments,
      name: item.name,
      username: item.user.username,
      userAvatar: item.user.avatar,
    })),
  };
};

const UpdateTweetService = async (id, body, userId) => {
  const { text, banner } = body;

  if (!banner && !text)
    throw new Error("Submit at least one field to update the post");

  const Tweets = await TweetsRepositories.FindTweetByIdRepository(id);

  if (String(Tweets.user._id) !== userId)
    throw new Error("You didn't update this post ");

  await TweetsRepositories.UpdateTweetRepository(id, body);

  return { message: "Post succesfully updated " };
};

const DeleteTweetService = async (id, userId) => {
  const Tweets = await TweetsRepositories.FindTweetByIdRepository(id);

  if (String(Tweets.user._id) !== userId)
    throw new Error("You didn't delete this post");

  await TweetsRepositories.EraseTweetRepository(id);

  return { message: "Post succesfully deleted " };
};

const likeTweetsService = async (id, userId) => {
  const TweetsLiked = await TweetsRepositories.LikeTweetsRepository(id, userId);

  if (!TweetsLiked) {
    await TweetsRepositories.DeleteLikeTweetsRepository(id, userId);
    return { message: "Like succesfully removed" };
  }

  return { message: "DEU LIKE" };
};

const addCommentsService = async (id, userId, comment) => {
  if (!comment) throw new Error("Write a message to comment");

  const Tweets = await TweetsRepositories.AddTweetCommentsRepository(
    id,
    comment,
    userId
  );

  return Tweets;
};

const deleteCommentsService = async (idTweets, idComment, userId) => {
  const commentDeleted =
    await TweetsRepositories.DeleteTweetsCommentsRepository(
      idTweets,
      idComment,
      userId
    );

  const commentFinder = commentDeleted.comments.find(
    (comment) => comment.idComment === idComment
  );

  if (!commentFinder) throw new Error("Comment not found");

  if (commentFinder.userId !== userId)
    throw new Error("You can't delete this comment");

  return commentDeleted;
};

export default {
  CreateTweetsService,
  FindAllTweetsService,
  TopTweetsService,
  FindTweetByIdService,
  FindTweetbyUserService,
  UpdateTweetService,
  DeleteTweetService,
  likeTweetsService,
  addCommentsService,
  deleteCommentsService,
  SearchByTextService,
};
