import { useState, useEffect } from "react";
import { CreateTweets, GetAllTweets } from "../../services/TweetsServices";
import { fetchData } from "../../utils/fetchData";

export const useHome = (reset) => {
  const [Tweets, setTweets] = useState([]);

  async function findAllTweets() {
    await fetchData(
      () => GetAllTweets(),
      (response) => setTweets(response.data),
      () => setTweets([])
    )
  }
  
  async function createTweet(data) {
    await fetchData(
      () => CreateTweets(data),
      (response) => setTweets((prev) => [response.data, ...prev]),
    )
  }
  
  async function onSubmit(data) {
    await createTweet(data);
    reset();
  }

  useEffect(() => {
    findAllTweets();
  }, []);

  return { Tweets, onSubmit };
};
