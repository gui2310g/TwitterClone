import { useState, useEffect } from "react";
import { CreateTweets, GetAllTweets } from "../../services/TweetsServices";

export const useHome = () => {
  const [Tweets, setTweets] = useState([]);

  async function findAllTweets() {
    try {
      const response = await GetAllTweets();
      setTweets(response.data);
    } catch (error) {
      console.error("Error fetching tweets", error);
      setTweets([]);
    }
  }

  async function createTweet(data) {
    try {
      const response = await CreateTweets(data);
      setTweets((prev) => [response.data, ...prev]);
    } catch (error) {
      console.error("Error creating tweet", error);
    }
  }

  const onSubmit = async (data, reset) => {
    await createTweet(data);
    reset();
  };

  useEffect(() => {
    findAllTweets();
  }, []);

  return { Tweets, onSubmit };
};
