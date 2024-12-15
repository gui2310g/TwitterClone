import { Widget, FollowingWidget } from "./WidgetStyled.jsx";
import SearchForm from "../SearchInput/SearchFormComponent.jsx";
import TweetUser from "../TweetUser/TweetUserComponent.jsx";
import TweetButton from "../TweetButton/TweetButtonComponent.jsx";
import { useWidget } from "./useWidget.jsx";

const Widgets = () => {
  const { user } = useWidget();

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
