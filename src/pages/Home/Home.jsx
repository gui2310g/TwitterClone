import { useState, useEffect} from "react"; 

import { Posts} from "./HomeStyled.jsx";
import Post from "../../assets/components/Post/Post.jsx";
import { GetAllTweets } from "../../services/TweetsServices.js";


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
