import { SearchPage } from "./SearchStyled.jsx";
import Post from "../../components/Post/PostComponent.jsx";
import SearchForm from "../../components/SearchInput/SearchFormComponent.jsx";
import TweetButton from "../../components/TweetButton/TweetButtonComponent.jsx";
import User from "../../components/TweetUser/TweetUserComponent.jsx";
import { useSearch } from "./useSearch.jsx";

const Search = () => {
  const { Tweets, Users, active, SearchTypes, handleTabClick } = useSearch();

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

      {active === "Users" &&
        Users.map((user) => (
          <div id="users" key={user._id}>
            <User key={user.id} userAvatar={user.avatar} name={user.username} />
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
    </SearchPage>
  );
};

export default Search;
