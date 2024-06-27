import TweetsService from "../services/Tweets.service.js";

const CreateTweetsController = async (req, res) => {
  const body = req.body;

  try {
    const Tweets = await TweetsService.CreateTweetsService(body);

    return res.status(201).send(Tweets);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const FindAllTweetsController = async (req, res) => {
  const { limit, offset } = req.query;
  const currentURL = req.baseUrl
  try {
    const Tweets = await TweetsService.FindAllTweetsService(limit, offset, currentURL);

    return res.status(201).send(Tweets);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const topTweetsController = async (req, res) => {
  try {
    const Tweets = await TweetsService.TopTweetsService();

    return res.status(201).send(Tweets);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const FindTweetByIdController = async (req, res) => {
   const { id } = req.params;

  try {
    const Tweets = await TweetsService.FindTweetByIdService(id);
    
    return res.status(201).send(Tweets);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

/* export const searchByTitle = async (req, res) => {

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
}; */

const FindTweetByUserController = async (req, res) => {
  const { id } = req.params;

  try {
    const Tweets = await TweetsService.FindTweetbyUserService(id);

    return res.status(201).send(Tweets);
  } catch (err) {
    res.status(500).send({ message: "err.message" });
  }
};

const UpdateTweetController = async (req, res) => {
  const { text, banner } = req.body;
  const { id } = req.params;
  const userId = req.userId;

  try {
    await TweetsService.UpdateTweetService(id, text, banner, userId);

    return res.status(201).send({ message: "Post successfully updated!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const DeleteTweetsController = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  try {
    await TweetsService.DeleteTweetService(id, userId);

    return res.status(201).send({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const LikeTweetsController = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;
  try {
    const Tweets = await TweetsService.likeTweetsService(id, userId);

    return res.status(201).send(Tweets);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const addCommentsController = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;
  const body = req.body;

  try {
    await TweetsService.addCommentsService(id, body, userId);
   
    return res.status(201).send({ message: "Comment added successfully" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteCommentsController = async (req, res) => {
    const { id: idTweets, idComment } = req.params;
    const userId = req.userId;
    try {
        await TweetsService.deleteCommentsService(idTweets, idComment, userId)

        return res.status(201).send({ message: "Comment deleted successfully" });
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
}

export default { 
  CreateTweetsController, FindAllTweetsController, topTweetsController, FindTweetByIdController, FindTweetByUserController, 
  UpdateTweetController, DeleteTweetsController, LikeTweetsController, addCommentsController, deleteCommentsController
}