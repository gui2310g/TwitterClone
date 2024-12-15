import { useState, useEffect } from "react";

import { Posts } from "./HomeStyled.jsx";
import Post from "../../components/Post/PostComponent.jsx";
import { GetAllTweets } from "../../services/TweetsServices.js";

const Home = () => {
  const [Tweets, setTweets] = useState([]);

  async function findAllTweets() {
    try {
      const response = await GetAllTweets();
      setTweets(response.data);
    } catch (error) {
      setTweets([]);
    }
  }

  useEffect(() => {
    findAllTweets();
  }, []);

  return (
    <Posts>
      {Tweets.map((tweet) => (
        <Post
          primary
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
