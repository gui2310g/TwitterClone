import { useState, useEffect } from "react";
import { GetAllTweets } from "../../services/TweetsServices";
export const useHome = () => {
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

    return { Tweets };
}