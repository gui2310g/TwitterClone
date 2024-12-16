import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

import { ProfileBody, ProfileHeader, ProfilePage } from "./ProfileStyled.jsx";
import TweetButton from "../../components/TweetButton/TweetButtonComponent.jsx";
import Post from "../../components/Post/PostComponent.jsx";
import { useProfile } from "./useProfile.jsx";

const Profile = () => {
  const { user, tweets } = useProfile();
  
  return (
    <ProfilePage>
      <ProfileHeader>
        <Link to="/">
          <FaArrowLeft />
        </Link>

        <div id="userHeader">
          <h3>{user.username}</h3>
          <span>{tweets.length} posts</span>
        </div>
      </ProfileHeader>

      <ProfileBody>
        <img src={user.background} alt="User background" id="imgbackground" />

        <div id="user">
          <div id="userDescription">
            <img src={user.avatar} alt="User profile avatar" />
            <strong>{user.username}</strong>
            <span>@{user.username}</span>

            <div id="followers">
              <span>20 followers</span>
              <span>20 following</span>
            </div>
          </div>

          <TweetButton secondary text={"Edit Profile"} />
        </div>
      </ProfileBody>

      {tweets.length === 0 && <h2>This user doesnt have a tweet</h2>}

      {tweets.map((item) => (
        <Post
          primary
          key={item.id}
          name={item.username}
          text={item.text}
          userAvatar={item.userAvatar}
          banner={item.banner}
          likes={item.likes.length}
          comments={item.comments.length}
        />
      ))}
    </ProfilePage>
  );
};

export default Profile;
