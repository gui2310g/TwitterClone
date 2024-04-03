import {
  createService,
  findAllTweetsService,
  countTweets,
  topTweetsService,
  findByIdService,
  searchByTitleService,
  byUserService,
  updatePostService,
  eraseService,
  LikeTweetsService,
  deleteLikeTweetsService,
  AddCommentsService,   
  DeleteCommentsService
} from "../services/Tweets.service.js";

export const create = async (req, res) => {
  try {
    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      res.status(400).send({ message: "Submit all fields for registration" });
    }

    await createService({
      title,
      text,
      banner,
      user: req.userId,
    });

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const findAll = async (req, res) => {
  try {
    let { limit, offset } = req.query;

    limit = Number(limit);
    offset = Number(offset);

    if (!limit && !offset) {
      limit = 5;
      offset = 0;
    }

    const Tweets = await findAllTweetsService(offset, limit);
    const total = await countTweets();
    const currentURL = req.baseUrl;

    const next = offset + limit;
    const nextUrl =
      next < total ? `${currentURL}?limit=${limit}&offset=${next}` : null;

    const previous = offset - limit < 0 ? null : offset - limit;
    const previousURL =
      previous != null
        ? `${currentURL}?limit=${limit}&offset=${previous}`
        : null;

    if (Tweets.length === 0) {
      return res
        .status(400)
        .send({ message: "There are no registered Tweets" });
    }

    res.send({
      nextUrl,
      previousURL,
      limit,
      offset,
      total,

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
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const topTweets = async (req, res) => {
  try {
    const Tweets = await topTweetsService();

    if (!Tweets) {
      return res.status(400).send({ message: "There are no registered Tweet" });
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
        userAvatar: Tweets.user.avatar,
      },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

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
        userAvatar: Tweets.user.avatar,
      },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const searchByTitle = async (req, res) => {
  try {
    const { title } = req.query;

    const Tweets = await searchByTitleService(title);

    if (Tweets.length === 0) {
      return res
        .status(400)
        .send({ message: "There are no posts with this title" });
    }

    return res.send({
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
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const byUser = async (req, res) => {
  try {
    const id = req.userId;

    const Tweets = await byUserService(id);

    return res.send({
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
    });
  } catch (err) {
    res.status(500).send({ message: "err.message" });
  }
};

export const update = async (req, res) => {
  try {
    const { title, text, banner } = req.body;

    const { id } = req.params;

    if (!title && !banner && !text) {
      res.status(400).send({
        message: "Submit at least one field to update the post",
      });
    }

    const Tweets = await findByIdService(id);

    if (String(Tweets.user._id) !== req.userId) {
      return res.status(400).send({ message: "You didn't update this post " });
    }

    await updatePostService(id, title, text, banner);

    return res.send({ message: "Post succesfully updated " });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const erase = async (req, res) => {
  try {
    const { id } = req.params;

    const Tweets = await findByIdService(id);

    if (String(Tweets.user._id) !== req.userId) {
      return res.status(400).send({ message: "You didn't delete this post" });
    }

    await eraseService(id);

    return res.send({ message: "Post succesfully deleted " });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const likeTweets = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const TweetsLiked = await LikeTweetsService(id, userId);
    console.log(TweetsLiked);

    if (!TweetsLiked) {
      await deleteLikeTweetsService(id, userId);
      return res.status(200).send({ message: "Like succesfully removed" });
    }

    res.send({ message: "DEU LIKE PORRA" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const addComments = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;
    const comment = req.body;

    if (!comment) {
        return res.status(400).send({ message: "Write a message to comment" });
    }

    await AddCommentsService(id, comment, userId);
   
    res.send({ message: "Comment succesfully added" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const deleteComments = async (req, res) => {
    try {
        const { idTweets, idComment } = req.params;
        const userId = req.userId;
        
        const commentDeleted = await DeleteCommentsService(idTweets, idComment, userId);
       
        const commentFinder = commentDeleted.comments.find((comment) => comment.idComment === idComment) 
        
        if(!commentFinder) {
            return res.status(400).send({message: "Comment not found"})
        }

        if(commentFinder.userId !== userId) {
            return req.status(400).send({message: "You can't delete this comment"})
        }

        res.send({ message: "Comment succesfully removed" });
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
}