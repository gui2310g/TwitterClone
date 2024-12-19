import { Posts } from "./HomeStyled.jsx";
import Post from "../../components/Post/PostComponent.jsx";
import { useHome } from "./useHome.jsx";

const Home = () => {
  const { Tweets } = useHome();

  return (
    <Posts>
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
