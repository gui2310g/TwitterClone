import { useState, useEffect } from "react";
import { SearchPage } from "./SearchStyled.jsx";
import { useParams } from "react-router-dom";
import Post from "../../components/Post/PostComponent.jsx";
import SearchForm from "../../components/SearchInput/SearchFormComponent.jsx";
import TweetButton from "../../components/TweetButton/TweetButtonComponent.jsx";
import User from "../../components/TweetUser/TweetUserComponent.jsx";
import { SearchedTweets } from "../../services/TweetsServices.js";
import { SearchedUsers } from "../../services/userServices.js";

const Search = () => {
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

  return (
    <SearchPage>
      <SearchForm />

      <ul>
        {SearchTypes.map((list) => (
          <li key={list} onClick={() => handleTabClick(list)}>
            <span className="active">{list}</span>
          </li>
        ))}
      </ul>

      <div>
        {active === "Users" &&
          Users.map((user) => (
            <div id="users" key={user._id}>
              <User
                key={user.id}
                userAvatar={user.avatar}
                name={user.username}
              />
              <TweetButton text={"Follow"} />
            </div>
          ))}

        {active === "Tweets" &&
          Tweets.map((tweet) => (
            <Post
              primary
              key={tweet.id}
              name={tweet.username}
              text={tweet.text}
              userAvatar={tweet.userAvatar}
              banner={tweet.banner}
            />
          ))}
      </div>
    </SearchPage>
  );
};

export default Search;
