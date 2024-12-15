import { useEffect, useState } from "react";

import { Widget, FollowingWidget } from "./WidgetsStyled.jsx";

import SearchForm from "../SearchInput/SearchFormComponent.jsx";
import TweetUser from "../TweetUser/TweetUserComponent.jsx";
import TweetButton from "../TweetButton/TweetButtonComponent.jsx";

import { GetAllUsers } from "../../services/userServices.js";

const Widgets = () => {
  const [user, setUsers] = useState([]);

  async function findAllUsers() {
    const response = await GetAllUsers();
    setUsers(response.data);
  }

  useEffect(() => {
    findAllUsers();
  }, []);

  return (
    <Widget>
      <SearchForm />

      <FollowingWidget>
        <h2>Who Follows?</h2>

        {user.map((user) => {
          return (
            <div id="users" key={user.id}>
              <TweetUser
                secondary
                userAvatar={user.avatar}
                name={user.username}
              />
              <TweetButton text={"Follow"} />
            </div>
          );
        })}
      </FollowingWidget>
    </Widget>
  );
};

export default Widgets;
