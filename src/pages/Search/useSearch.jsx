import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SearchedTweets } from "../../services/TweetsServices.js";
import { SearchedUsers } from "../../services/userServices.js";

export const useSearch = () => {
const { text } = useParams();

  const [Tweets, setTweets] = useState([]);
  const [Users, setUsers] = useState([]);
  const [active, setActive] = useState("Tweets");

  async function getSearchedTweets() {
    try {
      const response = await SearchedTweets(text);
      setTweets(response.data);
    } catch (error) {
      setTweets([]);
    }
  }

  async function getSearchedUsers() {
    try {
      const response = await SearchedUsers(text);
      setUsers(response.data);
    } catch (error) {
      setUsers([]);
    }
  }
  useEffect(() => {
    getSearchedTweets();
    getSearchedUsers();
  }, [text]);

  const SearchTypes = ["Tweets", "Users"];

  const handleTabClick = (tab) => {
    setActive(tab);
  };

  return { Tweets, Users, active, SearchTypes, handleTabClick };
}