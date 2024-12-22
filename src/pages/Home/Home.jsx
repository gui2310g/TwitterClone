import { Posts, PostCreate, PostHeader } from "./HomeStyled.jsx";
import Post from "../../components/Post/PostComponent.jsx";
import { useHome } from "./useHome.jsx";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContent.jsx";
import { useFormHook } from "../../hooks/useFormHook.jsx";
import { TweetsSchema } from "../../schemas/TweetsSchema.js";

const Home = () => {
  const { Tweets, onSubmit } = useHome();
  const { user } = useContext(UserContext);
  const { 
    register: registerPost, 
    handleSubmit: handlePost,
    errors: errorsPost
    } = useFormHook(TweetsSchema);

  return (
    <Posts>
      <PostCreate onSubmit={handlePost(onSubmit)} method="post">
        <PostHeader>
          <h2>What happening {user.username}? Create a post today</h2>
          <textarea
            placeholder="Insert a text"
            {...registerPost("text")}
          />
          {errorsPost.text && <span>{errorsPost.text.message}</span>}
          
          <label htmlFor="url">Image URL:</label>
          <input
            type="url"
            placeholder="Insert an image link here"
            {...registerPost("banner")}
          />
          {errorsPost.banner && <span>{errorsPost.banner.message}</span>}
          
          <input type="submit" value="Post" id="submit" />
        </PostHeader>
      </PostCreate>

      {Tweets.map((tweet) => (
        <Post
          primary
          id={tweet.userId}
          key={tweet.id}
          name={tweet.username}
          text={tweet.text}
          userAvatar={tweet.userAvatar}
          banner={tweet.banner}
        />
      ))}
    </Posts>
  );
};

export default Home;
