import { Widget, FollowingWidget } from "./WidgetStyled.jsx";
import SearchForm from "../SearchInput/SearchFormComponent.jsx";
import TweetUser from "../TweetUser/TweetUserComponent.jsx";
import TweetButton from "../TweetButton/TweetButtonComponent.jsx";
import { useWidget } from "./useWidget.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContent.jsx";

const Widgets = () => {
  const { user } = useWidget();
  const { user: loggedInUser } = useContext(UserContext);

  return (
    <Widget>
      <SearchForm />

      <FollowingWidget>
        <h2>Who Follows?</h2>

        {user
          .slice(0,5)
          .filter(u => u.id !== loggedInUser.id)
          .map((user) => {
            return (
              <div id="users" key={user.id}>
                <Link to={`/profile/${user.id}`}>
                  <TweetUser
                    secondary
                    userAvatar={user.avatar}
                    name={user.username}
                  />
                </Link>
                <TweetButton text={"Follow"} />
              </div>
            );
          })
        }
        
      </FollowingWidget>
    </Widget>
  );
};

export default Widgets;
