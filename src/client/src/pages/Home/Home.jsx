import Post from "../../assets/components/Post/Post.jsx";
import TweetButton from "../../assets/components/TweetButton/TweetButton.jsx";

import { Posts, TweetBox } from "./HomeStyled.jsx";

import { GetAllTweets } from "../../services/TweetsServices.js";
import { useState, useEffect } from "react";

import defaultAvatar from "../../assets/imgs/defaultAvatar.png";

const Home = () => {
  const [Tweets, setTweets] = useState([]);

  async function findAllTweets() {
    try {
      const response = await GetAllTweets();
      setTweets(response.data.results);
    } catch (error) {
      setTweets([]);
    }
  }

  useEffect(() => {
    findAllTweets();
  }, []);

  return (
    <Posts>
      <TweetBox>
        <form action="">
          <div className="TweetBoxInput">
            <img src={defaultAvatar} alt="Twitter userAvatar" />
            <input type="text" placeholder="What's Happening?" />
          </div>

          <div className="TweetBoxButton">
            <TweetButton secondary text={"Tweet"} />
          </div>
        </form>
      </TweetBox>

        {
            Tweets.map((user, index) => (
                <Post
                    primary
                    key={index.id}
                    name={user.username}
                    text={user.text}
                    userAvatar={user.userAvatar}
                    banner={user.banner}
                    likes={user.likes.length}
                    comments={user.comments.length}
                />
            ))
        }
    </Posts>
  );
};

export default Home;
